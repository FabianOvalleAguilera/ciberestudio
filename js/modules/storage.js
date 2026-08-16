// Gestor central de almacenamiento y persistencia multi-examen
import { defaultExams } from '../data/exams.js';
import { initialQuestions } from '../data/questions.js';
import { defaultNotes } from '../data/notes.js';
import { defaultMindmaps } from '../data/mindmaps.js';
import { defaultFlashcards } from '../data/flashcards.js';

const STORAGE_KEYS = {
  CURRENT_EXAM: 'soc_hub_current_exam',
  EXAMS: 'soc_hub_exams_list',
  QUESTIONS: 'soc_hub_questions_data',
  NOTES: 'soc_hub_notes_data',
  USER_NOTES: 'soc_hub_user_notes',
  MINDMAPS: 'soc_hub_mindmaps_data',
  FLASHCARDS: 'soc_hub_flashcards_data',
  STATS: 'soc_hub_stats_data',
  MISSED_QUESTIONS: 'soc_hub_missed_questions',
  FLASHCARD_MASTERY: 'soc_hub_fc_mastery'
};

export const StorageManager = {
  init() {
    // Inicializar exámenes si no existen
    if (!localStorage.getItem(STORAGE_KEYS.EXAMS)) {
      localStorage.setItem(STORAGE_KEYS.EXAMS, JSON.stringify(defaultExams));
    }
    // Examen actual por defecto
    if (!localStorage.getItem(STORAGE_KEYS.CURRENT_EXAM)) {
      localStorage.setItem(STORAGE_KEYS.CURRENT_EXAM, 'csa');
    }
    // Sincronizar banco de preguntas (añadir nuevas preguntas que no existan)
    try {
      const existingQ = JSON.parse(localStorage.getItem(STORAGE_KEYS.QUESTIONS)) || [];
      const existingIds = new Set(existingQ.map(q => q.id));
      let updatedQ = [...existingQ];
      initialQuestions.forEach(q => {
        if (!existingIds.has(q.id)) {
          updatedQ.push(q);
        }
      });
      localStorage.setItem(STORAGE_KEYS.QUESTIONS, JSON.stringify(updatedQ));
    } catch (e) {
      localStorage.setItem(STORAGE_KEYS.QUESTIONS, JSON.stringify(initialQuestions));
    }

    // Sincronizar apuntes / notes
    try {
      const existingN = JSON.parse(localStorage.getItem(STORAGE_KEYS.NOTES)) || [];
      const existingNoteIds = new Set(existingN.map(n => n.id));
      let updatedN = [...existingN];
      defaultNotes.forEach(n => {
        if (!existingNoteIds.has(n.id)) {
          updatedN.push(n);
        } else {
          // Actualizar notas existentes por si se enriquecieron
          const idx = updatedN.findIndex(item => item.id === n.id);
          if (idx >= 0) updatedN[idx] = n;
        }
      });
      localStorage.setItem(STORAGE_KEYS.NOTES, JSON.stringify(updatedN));
    } catch (e) {
      localStorage.setItem(STORAGE_KEYS.NOTES, JSON.stringify(defaultNotes));
    }

    // Sincronizar mapas mentales
    try {
      const existingM = JSON.parse(localStorage.getItem(STORAGE_KEYS.MINDMAPS)) || [];
      const existingMapIds = new Set(existingM.map(m => m.id));
      let updatedM = [...existingM];
      defaultMindmaps.forEach(m => {
        if (!existingMapIds.has(m.id)) {
          updatedM.push(m);
        } else {
          const idx = updatedM.findIndex(item => item.id === m.id);
          if (idx >= 0) updatedM[idx] = m;
        }
      });
      localStorage.setItem(STORAGE_KEYS.MINDMAPS, JSON.stringify(updatedM));
    } catch (e) {
      localStorage.setItem(STORAGE_KEYS.MINDMAPS, JSON.stringify(defaultMindmaps));
    }

    // Sincronizar flashcards
    try {
      const existingF = JSON.parse(localStorage.getItem(STORAGE_KEYS.FLASHCARDS)) || [];
      const existingFcIds = new Set(existingF.map(f => f.id));
      let updatedF = [...existingF];
      defaultFlashcards.forEach(f => {
        if (!existingFcIds.has(f.id)) {
          updatedF.push(f);
        } else {
          const idx = updatedF.findIndex(item => item.id === f.id);
          if (idx >= 0) updatedF[idx] = f;
        }
      });
      localStorage.setItem(STORAGE_KEYS.FLASHCARDS, JSON.stringify(updatedF));
    } catch (e) {
      localStorage.setItem(STORAGE_KEYS.FLASHCARDS, JSON.stringify(defaultFlashcards));
    }

    // Stats iniciales
    if (!localStorage.getItem(STORAGE_KEYS.STATS)) {
      localStorage.setItem(STORAGE_KEYS.STATS, JSON.stringify({}));
    }
    // Fallos
    if (!localStorage.getItem(STORAGE_KEYS.MISSED_QUESTIONS)) {
      localStorage.setItem(STORAGE_KEYS.MISSED_QUESTIONS, JSON.stringify([]));
    }
  },

  getCurrentExamId() {
    return localStorage.getItem(STORAGE_KEYS.CURRENT_EXAM) || 'csa';
  },

  setCurrentExamId(examId) {
    localStorage.setItem(STORAGE_KEYS.CURRENT_EXAM, examId);
  },

  getExams() {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEYS.EXAMS)) || defaultExams;
    } catch (e) {
      return defaultExams;
    }
  },

  getCurrentExam() {
    const currentId = this.getCurrentExamId();
    const exams = this.getExams();
    return exams.find(e => e.id === currentId) || exams[0] || defaultExams[0];
  },

  saveExam(newExam) {
    const exams = this.getExams();
    const existingIndex = exams.findIndex(e => e.id === newExam.id);
    if (existingIndex >= 0) {
      exams[existingIndex] = newExam;
    } else {
      exams.push(newExam);
    }
    localStorage.setItem(STORAGE_KEYS.EXAMS, JSON.stringify(exams));
  },

  getQuestions(examId = null) {
    const targetExamId = examId || this.getCurrentExamId();
    try {
      const all = JSON.parse(localStorage.getItem(STORAGE_KEYS.QUESTIONS)) || [];
      return all.filter(q => q.examId === targetExamId);
    } catch (e) {
      return [];
    }
  },

  addQuestion(questionObj) {
    try {
      const all = JSON.parse(localStorage.getItem(STORAGE_KEYS.QUESTIONS)) || [];
      all.push(questionObj);
      localStorage.setItem(STORAGE_KEYS.QUESTIONS, JSON.stringify(all));
      return true;
    } catch (e) {
      console.error(e);
      return false;
    }
  },

  getNotes(examId = null) {
    const targetExamId = examId || this.getCurrentExamId();
    try {
      const all = JSON.parse(localStorage.getItem(STORAGE_KEYS.NOTES)) || [];
      return all.filter(n => n.examId === targetExamId);
    } catch (e) {
      return [];
    }
  },

  getUserPersonalNotes(examId = null) {
    const targetExamId = examId || this.getCurrentExamId();
    try {
      const all = JSON.parse(localStorage.getItem(STORAGE_KEYS.USER_NOTES)) || {};
      return all[targetExamId] || "";
    } catch (e) {
      return "";
    }
  },

  saveUserPersonalNotes(examId, text) {
    try {
      const all = JSON.parse(localStorage.getItem(STORAGE_KEYS.USER_NOTES)) || {};
      all[examId] = text;
      localStorage.setItem(STORAGE_KEYS.USER_NOTES, JSON.stringify(all));
    } catch (e) {
      console.error(e);
    }
  },

  getMindmaps(examId = null) {
    const targetExamId = examId || this.getCurrentExamId();
    try {
      const all = JSON.parse(localStorage.getItem(STORAGE_KEYS.MINDMAPS)) || [];
      return all.filter(m => m.examId === targetExamId);
    } catch (e) {
      return [];
    }
  },

  getFlashcards(examId = null) {
    const targetExamId = examId || this.getCurrentExamId();
    try {
      const all = JSON.parse(localStorage.getItem(STORAGE_KEYS.FLASHCARDS)) || [];
      return all.filter(f => f.examId === targetExamId);
    } catch (e) {
      return [];
    }
  },

  getMissedQuestions(examId = null) {
    const targetExamId = examId || this.getCurrentExamId();
    try {
      const missedIds = JSON.parse(localStorage.getItem(STORAGE_KEYS.MISSED_QUESTIONS)) || [];
      const allQuestions = this.getQuestions(targetExamId);
      return allQuestions.filter(q => missedIds.includes(q.id));
    } catch (e) {
      return [];
    }
  },

  recordMissedQuestion(questionId) {
    try {
      const missed = new Set(JSON.parse(localStorage.getItem(STORAGE_KEYS.MISSED_QUESTIONS)) || []);
      missed.add(questionId);
      localStorage.setItem(STORAGE_KEYS.MISSED_QUESTIONS, JSON.stringify(Array.from(missed)));
    } catch (e) {
      console.error(e);
    }
  },

  removeMissedQuestion(questionId) {
    try {
      let missed = JSON.parse(localStorage.getItem(STORAGE_KEYS.MISSED_QUESTIONS)) || [];
      missed = missed.filter(id => id !== questionId);
      localStorage.setItem(STORAGE_KEYS.MISSED_QUESTIONS, JSON.stringify(missed));
    } catch (e) {
      console.error(e);
    }
  },

  recordQuizHistory(examId, result) {
    try {
      const stats = JSON.parse(localStorage.getItem(STORAGE_KEYS.STATS)) || {};
      if (!stats[examId]) {
        stats[examId] = {
          quizzesTaken: 0,
          totalQuestionsAnswered: 0,
          totalCorrect: 0,
          history: []
        };
      }
      stats[examId].quizzesTaken += 1;
      stats[examId].totalQuestionsAnswered += result.total;
      stats[examId].totalCorrect += result.score;
      stats[examId].history.push({
        date: new Date().toISOString(),
        score: result.score,
        total: result.total,
        percentage: result.percentage,
        mode: result.mode
      });
      localStorage.setItem(STORAGE_KEYS.STATS, JSON.stringify(stats));
    } catch (e) {
      console.error(e);
    }
  },

  getExamStats(examId = null) {
    const targetExamId = examId || this.getCurrentExamId();
    try {
      const stats = JSON.parse(localStorage.getItem(STORAGE_KEYS.STATS)) || {};
      return stats[targetExamId] || {
        quizzesTaken: 0,
        totalQuestionsAnswered: 0,
        totalCorrect: 0,
        history: []
      };
    } catch (e) {
      return { quizzesTaken: 0, totalQuestionsAnswered: 0, totalCorrect: 0, history: [] };
    }
  },

  exportAllData() {
    const data = {
      version: "1.0",
      exportDate: new Date().toISOString(),
      exams: this.getExams(),
      questions: JSON.parse(localStorage.getItem(STORAGE_KEYS.QUESTIONS)) || [],
      notes: JSON.parse(localStorage.getItem(STORAGE_KEYS.NOTES)) || [],
      userNotes: JSON.parse(localStorage.getItem(STORAGE_KEYS.USER_NOTES)) || {},
      mindmaps: JSON.parse(localStorage.getItem(STORAGE_KEYS.MINDMAPS)) || [],
      flashcards: JSON.parse(localStorage.getItem(STORAGE_KEYS.FLASHCARDS)) || [],
      stats: JSON.parse(localStorage.getItem(STORAGE_KEYS.STATS)) || {}
    };
    return JSON.stringify(data, null, 2);
  },

  importAllData(jsonString) {
    try {
      const data = typeof jsonString === 'string' ? JSON.parse(jsonString) : jsonString;
      if (data.exams && Array.isArray(data.exams)) {
        const currentExams = this.getExams();
        data.exams.forEach(ex => {
          if (!currentExams.some(e => e.id === ex.id)) {
            currentExams.push(ex);
          }
        });
        localStorage.setItem(STORAGE_KEYS.EXAMS, JSON.stringify(currentExams));
      }
      if (data.questions && Array.isArray(data.questions)) {
        const currentQuestions = JSON.parse(localStorage.getItem(STORAGE_KEYS.QUESTIONS)) || [];
        data.questions.forEach(q => {
          if (!currentQuestions.some(cq => cq.id === q.id)) {
            currentQuestions.push(q);
          }
        });
        localStorage.setItem(STORAGE_KEYS.QUESTIONS, JSON.stringify(currentQuestions));
      }
      if (data.notes && Array.isArray(data.notes)) {
        const currentNotes = JSON.parse(localStorage.getItem(STORAGE_KEYS.NOTES)) || [];
        data.notes.forEach(n => {
          if (!currentNotes.some(cn => cn.id === n.id)) {
            currentNotes.push(n);
          }
        });
        localStorage.setItem(STORAGE_KEYS.NOTES, JSON.stringify(currentNotes));
      }
      if (data.flashcards && Array.isArray(data.flashcards)) {
        const currentFlashcards = JSON.parse(localStorage.getItem(STORAGE_KEYS.FLASHCARDS)) || [];
        data.flashcards.forEach(f => {
          if (!currentFlashcards.some(cf => cf.id === f.id)) {
            currentFlashcards.push(f);
          }
        });
        localStorage.setItem(STORAGE_KEYS.FLASHCARDS, JSON.stringify(currentFlashcards));
      }
      return { success: true, message: "Datos importados con éxito." };
    } catch (e) {
      console.error(e);
      return { success: false, message: "Error al procesar el archivo JSON: " + e.message };
    }
  }
};
