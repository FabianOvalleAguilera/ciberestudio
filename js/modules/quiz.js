// Express Quiz and Timed Mock Exam Engine (English)
import { StorageManager } from './storage.js';

export const QuizEngine = {
  state: {
    active: false,
    mode: 'express', // express, module, mock, missed
    selectedModuleId: null,
    questions: [],
    currentIndex: 0,
    userAnswers: {}, // { questionId: selectedIndex }
    score: 0,
    timerInterval: null,
    timeRemainingSeconds: 0,
    instantFeedback: true
  },

  init() {
    this.bindEvents();
    this.renderModuleOptions();
  },

  bindEvents() {
    // Config panel buttons
    const expressBtn = document.getElementById('start-express-quiz');
    const mockBtn = document.getElementById('start-mock-quiz');
    const moduleSelectBtn = document.getElementById('start-module-quiz');
    const missedBtn = document.getElementById('start-missed-quiz');

    if (expressBtn) expressBtn.addEventListener('click', () => this.startQuiz('express'));
    if (mockBtn) mockBtn.addEventListener('click', () => this.startQuiz('mock'));
    if (moduleSelectBtn) {
      moduleSelectBtn.addEventListener('click', () => {
        const modSelect = document.getElementById('quiz-module-select');
        const modId = modSelect ? parseInt(modSelect.value, 10) : null;
        this.startQuiz('module', modId);
      });
    }
    if (missedBtn) missedBtn.addEventListener('click', () => this.startQuiz('missed'));

    // Navigation in quiz
    const nextBtn = document.getElementById('quiz-next-btn');
    const prevBtn = document.getElementById('quiz-prev-btn');
    const finishBtn = document.getElementById('quiz-finish-btn');
    const exitBtn = document.getElementById('quiz-exit-btn');

    if (nextBtn) nextBtn.addEventListener('click', () => this.nextQuestion());
    if (prevBtn) prevBtn.addEventListener('click', () => this.prevQuestion());
    if (finishBtn) finishBtn.addEventListener('click', () => this.finishQuiz());
    if (exitBtn) exitBtn.addEventListener('click', () => this.exitQuiz());

    // Results modal retry
    const retryBtn = document.getElementById('quiz-retry-btn');
    if (retryBtn) retryBtn.addEventListener('click', () => this.exitQuiz());
  },

  renderModuleOptions() {
    const currentExam = StorageManager.getCurrentExam();
    const select = document.getElementById('quiz-module-select');
    if (!select || !currentExam) return;

    select.innerHTML = '';
    currentExam.modules.forEach(mod => {
      const opt = document.createElement('option');
      opt.value = mod.id;
      opt.textContent = mod.name;
      select.appendChild(opt);
    });

    // Update missed count badge
    const missed = StorageManager.getMissedQuestions();
    const missedBadge = document.getElementById('missed-count-badge');
    if (missedBadge) {
      missedBadge.textContent = `${missed.length} Available`;
    }
  },

  startQuiz(mode, moduleId = null) {
    const exam = StorageManager.getCurrentExam();
    let allQuestions = StorageManager.getQuestions(exam.id);

    if (mode === 'module' && moduleId) {
      allQuestions = allQuestions.filter(q => q.moduleId === moduleId);
    } else if (mode === 'missed') {
      allQuestions = StorageManager.getMissedQuestions(exam.id);
    }

    if (!allQuestions || allQuestions.length === 0) {
      alert(`No questions available for the selected mode in ${exam.name}. You can add more in the Exam Manager.`);
      return;
    }

    // Shuffle questions
    let selected = [...allQuestions].sort(() => 0.5 - Math.random());

    if (mode === 'express') {
      selected = selected.slice(0, Math.min(10, selected.length));
      this.state.instantFeedback = true;
      this.state.timeRemainingSeconds = selected.length * 90;
    } else if (mode === 'mock') {
      selected = selected.slice(0, Math.min(exam.totalQuestionsRealExam || 100, selected.length));
      this.state.instantFeedback = false;
      this.state.timeRemainingSeconds = (exam.durationMinutes || 180) * 60;
    } else {
      this.state.instantFeedback = true;
      this.state.timeRemainingSeconds = selected.length * 100;
    }

    this.state.active = true;
    this.state.mode = mode;
    this.state.selectedModuleId = moduleId;
    this.state.questions = selected;
    this.state.currentIndex = 0;
    this.state.userAnswers = {};
    this.state.score = 0;

    // Toggle UI views
    document.getElementById('quiz-setup-section').style.display = 'none';
    document.getElementById('quiz-active-section').style.display = 'block';
    document.getElementById('quiz-results-section').style.display = 'none';

    this.startTimer();
    this.renderCurrentQuestion();
  },

  startTimer() {
    clearInterval(this.state.timerInterval);
    const timerElem = document.getElementById('quiz-timer-display');

    const updateDisplay = () => {
      const minutes = Math.floor(this.state.timeRemainingSeconds / 60);
      const seconds = this.state.timeRemainingSeconds % 60;
      if (timerElem) {
        timerElem.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
      }
      if (this.state.timeRemainingSeconds <= 0) {
        clearInterval(this.state.timerInterval);
        alert("Time is up!");
        this.finishQuiz();
      }
      this.state.timeRemainingSeconds--;
    };

    updateDisplay();
    this.state.timerInterval = setInterval(updateDisplay, 1000);
  },

  renderCurrentQuestion() {
    const q = this.state.questions[this.state.currentIndex];
    if (!q) return;

    // Header info
    document.getElementById('quiz-progress-text').textContent = 
      `Question ${this.state.currentIndex + 1} of ${this.state.questions.length}`;
    document.getElementById('quiz-progress-bar').style.width = 
      `${((this.state.currentIndex + 1) / this.state.questions.length) * 100}%`;
    document.getElementById('quiz-module-badge').textContent = q.moduleName || `Module ${q.moduleId}`;
    
    const diffBadge = document.getElementById('quiz-difficulty-badge');
    if (diffBadge) {
      diffBadge.textContent = q.difficulty || 'Medium';
      diffBadge.className = `badge ${q.difficulty === 'Easy' ? 'badge-emerald' : q.difficulty === 'Hard' ? 'badge-rose' : 'badge-amber'}`;
    }

    // Question content
    document.getElementById('quiz-question-text').textContent = q.question;

    // Options rendering
    const optionsContainer = document.getElementById('quiz-options-container');
    optionsContainer.innerHTML = '';

    const letters = ['A', 'B', 'C', 'D', 'E'];
    const hasAnswered = this.state.userAnswers.hasOwnProperty(q.id);
    const selectedAnswerIndex = this.state.userAnswers[q.id];

    q.options.forEach((optText, index) => {
      const btn = document.createElement('button');
      btn.className = 'option-item';
      if (hasAnswered && selectedAnswerIndex === index) {
        btn.classList.add('selected');
      }

      if (this.state.instantFeedback && hasAnswered) {
        btn.classList.add('disabled');
        if (index === q.correctAnswer) {
          btn.classList.add('correct');
        } else if (selectedAnswerIndex === index && index !== q.correctAnswer) {
          btn.classList.add('wrong');
        }
      }

      btn.innerHTML = `
        <span class="option-key">${letters[index] || index + 1}</span>
        <span class="option-content">${optText}</span>
      `;

      btn.addEventListener('click', () => {
        if (this.state.instantFeedback && hasAnswered) return;
        this.selectAnswer(q, index);
      });

      optionsContainer.appendChild(btn);
    });

    // Explanation Box
    const explanationBox = document.getElementById('quiz-explanation-box');
    if (this.state.instantFeedback && hasAnswered) {
      const isCorrect = selectedAnswerIndex === q.correctAnswer;
      explanationBox.style.display = 'block';
      explanationBox.className = `explanation-box ${isCorrect ? 'correct-box' : 'wrong-box'}`;
      explanationBox.innerHTML = `
        <strong>${isCorrect ? '✅ Correct Answer!' : '❌ Incorrect'}</strong>
        <p style="margin-top: 0.5rem;">${q.explanation || 'No explanation provided.'}</p>
      `;
    } else {
      explanationBox.style.display = 'none';
    }

    // Navigation buttons state
    document.getElementById('quiz-prev-btn').disabled = this.state.currentIndex === 0;
    const isLast = this.state.currentIndex === this.state.questions.length - 1;
    document.getElementById('quiz-next-btn').style.display = isLast ? 'none' : 'inline-flex';
    document.getElementById('quiz-finish-btn').style.display = isLast ? 'inline-flex' : 'none';
  },

  selectAnswer(question, selectedIndex) {
    this.state.userAnswers[question.id] = selectedIndex;
    const isCorrect = selectedIndex === question.correctAnswer;

    if (isCorrect) {
      StorageManager.removeMissedQuestion(question.id);
    } else {
      StorageManager.recordMissedQuestion(question.id);
    }

    this.renderCurrentQuestion();
  },

  nextQuestion() {
    if (this.state.currentIndex < this.state.questions.length - 1) {
      this.state.currentIndex++;
      this.renderCurrentQuestion();
    }
  },

  prevQuestion() {
    if (this.state.currentIndex > 0) {
      this.state.currentIndex--;
      this.renderCurrentQuestion();
    }
  },

  finishQuiz() {
    clearInterval(this.state.timerInterval);

    // Calculate score
    let correctCount = 0;
    this.state.questions.forEach(q => {
      if (this.state.userAnswers[q.id] === q.correctAnswer) {
        correctCount++;
      }
    });

    this.state.score = correctCount;
    const total = this.state.questions.length;
    const percentage = Math.round((correctCount / total) * 100);
    const exam = StorageManager.getCurrentExam();
    const passed = percentage >= (exam.passingScore || 70);

    // Record stats
    StorageManager.recordQuizHistory(exam.id, {
      score: correctCount,
      total: total,
      percentage: percentage,
      mode: this.state.mode
    });

    // Show Results View
    document.getElementById('quiz-active-section').style.display = 'none';
    document.getElementById('quiz-results-section').style.display = 'block';

    const scoreCircle = document.getElementById('results-score-circle');
    scoreCircle.style.borderColor = passed ? 'var(--accent-emerald)' : 'var(--accent-rose)';
    scoreCircle.innerHTML = `
      <span style="font-size: 2rem; font-weight: 800; color: ${passed ? 'var(--accent-emerald)' : 'var(--accent-rose)'};">${percentage}%</span>
      <span style="font-size: 0.8rem; color: var(--text-muted);">${correctCount}/${total} Correct</span>
    `;

    document.getElementById('results-title').textContent = passed ? "🎉 Exam Passed!" : "⚠️ Needs Review";
    document.getElementById('results-desc').textContent = passed 
      ? `Congratulations! You scored above the passing threshold (${exam.passingScore}%). Great preparation for ${exam.code}!` 
      : `The passing score for ${exam.code} is ${exam.passingScore}%. We recommend reviewing missed questions and cheatsheets.`;

    this.renderModuleOptions();
  },

  exitQuiz() {
    clearInterval(this.state.timerInterval);
    this.state.active = false;
    document.getElementById('quiz-active-section').style.display = 'none';
    document.getElementById('quiz-results-section').style.display = 'none';
    document.getElementById('quiz-setup-section').style.display = 'block';
    this.renderModuleOptions();
  }
};
