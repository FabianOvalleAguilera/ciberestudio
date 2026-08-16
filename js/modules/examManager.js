// Exam Manager, Import/Export, and Custom Question Builder (English)
import { StorageManager } from './storage.js';

export const ExamManager = {
  init(onExamChanged) {
    this.onExamChanged = onExamChanged;
    this.bindEvents();
    this.renderExamSelects();
  },

  bindEvents() {
    const mainSelect = document.getElementById('global-exam-select');
    if (mainSelect) {
      mainSelect.addEventListener('change', (e) => {
        StorageManager.setCurrentExamId(e.target.value);
        if (this.onExamChanged) this.onExamChanged();
      });
    }

    const openNewExamBtn = document.getElementById('open-new-exam-modal');
    const openAddQBtn = document.getElementById('open-add-q-modal');
    const openImportExportBtn = document.getElementById('open-import-export-modal');

    if (openNewExamBtn) openNewExamBtn.addEventListener('click', () => this.openModal('modal-new-exam'));
    if (openAddQBtn) openAddQBtn.addEventListener('click', () => this.openModal('modal-add-question'));
    if (openImportExportBtn) openImportExportBtn.addEventListener('click', () => this.openModal('modal-import-export'));

    document.querySelectorAll('.close-modal-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const modal = e.target.closest('.modal-overlay');
        if (modal) modal.classList.remove('active');
      });
    });

    const newExamForm = document.getElementById('form-new-exam');
    if (newExamForm) {
      newExamForm.addEventListener('submit', (e) => {
        e.preventDefault();
        this.handleCreateExam();
      });
    }

    const addQForm = document.getElementById('form-add-question');
    if (addQForm) {
      addQForm.addEventListener('submit', (e) => {
        e.preventDefault();
        this.handleAddQuestion();
      });
    }

    const exportBtn = document.getElementById('btn-export-backup');
    if (exportBtn) {
      exportBtn.addEventListener('click', () => this.handleExport());
    }

    const importBtn = document.getElementById('btn-import-backup');
    const importFile = document.getElementById('import-file-input');
    if (importBtn && importFile) {
      importBtn.addEventListener('click', () => importFile.click());
      importFile.addEventListener('change', (e) => this.handleImportFile(e));
    }

    const copyTemplateBtn = document.getElementById('btn-copy-template');
    if (copyTemplateBtn) {
      copyTemplateBtn.addEventListener('click', () => this.copyJsonTemplate());
    }
  },

  openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (!modal) return;
    modal.classList.add('active');

    if (modalId === 'modal-add-question') {
      this.populateAddQuestionModules();
    }
  },

  closeAllModals() {
    document.querySelectorAll('.modal-overlay').forEach(m => m.classList.remove('active'));
  },

  renderExamSelects() {
    const exams = StorageManager.getExams();
    const currentId = StorageManager.getCurrentExamId();
    const mainSelect = document.getElementById('global-exam-select');

    if (mainSelect) {
      mainSelect.innerHTML = '';
      exams.forEach(ex => {
        const opt = document.createElement('option');
        opt.value = ex.id;
        opt.textContent = `${ex.name} (${ex.code})`;
        if (ex.id === currentId) opt.selected = true;
        mainSelect.appendChild(opt);
      });
    }
  },

  populateAddQuestionModules() {
    const exam = StorageManager.getCurrentExam();
    const select = document.getElementById('add-q-module');
    if (!select) return;

    select.innerHTML = '';
    exam.modules.forEach(m => {
      const opt = document.createElement('option');
      opt.value = m.id;
      opt.textContent = m.name;
      select.appendChild(opt);
    });
  },

  handleCreateExam() {
    const name = document.getElementById('new-exam-name').value.trim();
    const code = document.getElementById('new-exam-code').value.trim();
    const title = document.getElementById('new-exam-title').value.trim();
    const desc = document.getElementById('new-exam-desc').value.trim();
    const score = parseInt(document.getElementById('new-exam-score').value, 10) || 70;
    const modulesRaw = document.getElementById('new-exam-modules').value.trim();

    if (!name || !code) {
      alert("Please fill in the certification name and exam code.");
      return;
    }

    const id = code.toLowerCase().replace(/[^a-z0-9]/g, '-');
    const modules = modulesRaw.split('\n')
      .map((m) => m.trim())
      .filter(m => m.length > 0)
      .map((m, idx) => ({
        id: idx + 1,
        name: m,
        shortName: m.length > 20 ? m.substring(0, 18) + '...' : m
      }));

    const newExam = {
      id,
      name,
      code,
      title: title || name,
      description: desc || "Cybersecurity certification exam.",
      passingScore: score,
      totalQuestionsRealExam: 100,
      durationMinutes: 180,
      modules: modules.length > 0 ? modules : [{ id: 1, name: "General", shortName: "General" }]
    };

    StorageManager.saveExam(newExam);
    StorageManager.setCurrentExamId(id);
    this.renderExamSelects();
    this.closeAllModals();

    if (this.onExamChanged) this.onExamChanged();
    alert(`Certification "${name}" added successfully! You can now populate questions and cheat sheets.`);
  },

  handleAddQuestion() {
    const exam = StorageManager.getCurrentExam();
    const moduleId = parseInt(document.getElementById('add-q-module').value, 10);
    const modObj = exam.modules.find(m => m.id === moduleId);
    const questionText = document.getElementById('add-q-text').value.trim();
    const optA = document.getElementById('add-q-opt-a').value.trim();
    const optB = document.getElementById('add-q-opt-b').value.trim();
    const optC = document.getElementById('add-q-opt-c').value.trim();
    const optD = document.getElementById('add-q-opt-d').value.trim();
    const correctIdx = parseInt(document.getElementById('add-q-correct').value, 10);
    const explanation = document.getElementById('add-q-explanation').value.trim();
    const difficulty = document.getElementById('add-q-diff').value;

    if (!questionText || !optA || !optB || !optC || !optD) {
      alert("Please fill in the question and all 4 answer options.");
      return;
    }

    const newQuestion = {
      id: `${exam.id}-q-${Date.now()}`,
      examId: exam.id,
      moduleId: moduleId,
      moduleName: modObj ? modObj.name : `Module ${moduleId}`,
      question: questionText,
      options: [optA, optB, optC, optD],
      correctAnswer: correctIdx,
      explanation: explanation || "No additional explanation provided.",
      difficulty: difficulty
    };

    StorageManager.addQuestion(newQuestion);
    document.getElementById('form-add-question').reset();
    this.closeAllModals();

    if (this.onExamChanged) this.onExamChanged();
    alert("Question added successfully to the bank!");
  },

  handleExport() {
    const jsonStr = StorageManager.exportAllData();
    const blob = new Blob([jsonStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `soc-study-hub-backup-${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    URL.revokeObjectURL(url);
  },

  handleImportFile(event) {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      const content = e.target.result;
      const res = StorageManager.importAllData(content);
      if (res.success) {
        this.renderExamSelects();
        this.closeAllModals();
        if (this.onExamChanged) this.onExamChanged();
        alert("Data and questions imported successfully!");
      } else {
        alert(res.message);
      }
    };
    reader.readAsText(file);
  },

  copyJsonTemplate() {
    const template = {
      questions: [
        {
          id: "custom-q1",
          examId: "csa",
          moduleId: 1,
          moduleName: "Module 1: Security Operations & Management",
          question: "Your custom question text here?",
          options: [
            "Option A",
            "Option B (Correct)",
            "Option C",
            "Option D"
          ],
          correctAnswer: 1,
          explanation: "Detailed technical rationale explaining why Option B is correct.",
          difficulty: "Medium"
        }
      ]
    };

    navigator.clipboard.writeText(JSON.stringify(template, null, 2))
      .then(() => alert("JSON template copied to clipboard. You can populate it and import."))
      .catch(() => alert("Could not copy automatically."));
  }
};
