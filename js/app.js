// Main Application Controller and View Router (English)
import { StorageManager } from './modules/storage.js';
import { QuizEngine } from './modules/quiz.js';
import { NotesView } from './modules/notesView.js';
import { MindmapView } from './modules/mindmapView.js';
import { FlashcardView } from './modules/flashcardView.js';
import { ExamManager } from './modules/examManager.js';

const App = {
  currentTab: 'dashboard',

  init() {
    StorageManager.init();

    // Initialize modules
    ExamManager.init(() => this.handleExamChanged());
    QuizEngine.init();
    NotesView.init();
    MindmapView.init();
    FlashcardView.init();

    this.bindNavigation();
    this.updateDashboard();
  },

  bindNavigation() {
    const tabs = document.querySelectorAll('.nav-tab');
    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        const targetViewId = tab.getAttribute('data-tab');
        this.switchTab(targetViewId);
      });
    });

    // Dashboard quick launch buttons
    const launchQuizBtn = document.getElementById('dash-launch-quiz');
    const launchNotesBtn = document.getElementById('dash-launch-notes');
    const launchMapsBtn = document.getElementById('dash-launch-maps');
    const launchCardsBtn = document.getElementById('dash-launch-cards');

    if (launchQuizBtn) launchQuizBtn.addEventListener('click', () => this.switchTab('quiz'));
    if (launchNotesBtn) launchNotesBtn.addEventListener('click', () => this.switchTab('notes'));
    if (launchMapsBtn) launchMapsBtn.addEventListener('click', () => this.switchTab('mindmaps'));
    if (launchCardsBtn) launchCardsBtn.addEventListener('click', () => this.switchTab('flashcards'));
  },

  switchTab(tabId) {
    this.currentTab = tabId;

    document.querySelectorAll('.nav-tab').forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute('data-tab') === tabId);
    });

    document.querySelectorAll('.tab-view').forEach(view => {
      view.classList.toggle('active', view.id === `view-${tabId}`);
    });

    if (tabId === 'dashboard') this.updateDashboard();
    if (tabId === 'notes') NotesView.render();
    if (tabId === 'mindmaps') MindmapView.render();
    if (tabId === 'flashcards') FlashcardView.render();
    if (tabId === 'quiz') QuizEngine.renderModuleOptions();
  },

  handleExamChanged() {
    this.updateDashboard();
    QuizEngine.exitQuiz();
    NotesView.render();
    MindmapView.render();
    FlashcardView.render();
  },

  updateDashboard() {
    const exam = StorageManager.getCurrentExam();
    const questions = StorageManager.getQuestions(exam.id);
    const stats = StorageManager.getExamStats(exam.id);
    const missed = StorageManager.getMissedQuestions(exam.id);

    // Hero details
    const heroTitle = document.getElementById('dash-hero-title');
    const heroDesc = document.getElementById('dash-hero-desc');
    const heroCodeBadge = document.getElementById('dash-hero-code');

    if (heroTitle) heroTitle.textContent = `${exam.name} - ${exam.title}`;
    if (heroDesc) heroDesc.textContent = exam.description;
    if (heroCodeBadge) heroCodeBadge.textContent = `Exam Code: ${exam.code} | Passing Score: ${exam.passingScore}%`;

    // Stat Cards
    const totalQElem = document.getElementById('dash-stat-total-q');
    const avgScoreElem = document.getElementById('dash-stat-avg-score');
    const quizzesTakenElem = document.getElementById('dash-stat-quizzes-taken');
    const missedCountElem = document.getElementById('dash-stat-missed-count');

    if (totalQElem) totalQElem.textContent = questions.length;
    if (quizzesTakenElem) quizzesTakenElem.textContent = stats.quizzesTaken;
    if (missedCountElem) missedCountElem.textContent = missed.length;

    let avgPercentage = 0;
    if (stats.history && stats.history.length > 0) {
      const sum = stats.history.reduce((acc, curr) => acc + curr.percentage, 0);
      avgPercentage = Math.round(sum / stats.history.length);
    }
    if (avgScoreElem) avgScoreElem.textContent = `${avgPercentage}%`;

    // Readiness Gauge
    const readinessFill = document.getElementById('dash-readiness-fill');
    const readinessText = document.getElementById('dash-readiness-text');
    if (readinessFill && readinessText) {
      readinessFill.style.width = `${Math.min(100, avgPercentage)}%`;
      readinessText.textContent = `${avgPercentage}% Exam Readiness`;
    }

    // Module Breakdown List
    const moduleListContainer = document.getElementById('dash-module-breakdown');
    if (moduleListContainer) {
      moduleListContainer.innerHTML = '';
      exam.modules.forEach(mod => {
        const modQuestions = questions.filter(q => q.moduleId === mod.id);
        const item = document.createElement('div');
        item.style.padding = '0.75rem 0';
        item.style.borderBottom = '1px solid rgba(255, 255, 255, 0.05)';
        item.innerHTML = `
          <div style="display: flex; justify-content: space-between; font-size: 0.88rem; margin-bottom: 0.35rem;">
            <span><strong>${mod.name}</strong></span>
            <span class="badge badge-cyan">${modQuestions.length} Questions</span>
          </div>
        `;
        moduleListContainer.appendChild(item);
      });
    }
  }
};

document.addEventListener('DOMContentLoaded', () => {
  App.init();
});
