// Gestor central de almacenamiento y persistencia multi-examen
import { defaultExams } from '../data/exams.js?v=2026.4';
import { initialQuestions } from '../data/questions.js?v=2026.4';
import { defaultNotes } from '../data/notes.js?v=2026.4';
import { defaultMindmaps } from '../data/mindmaps.js?v=2026.4';
import { defaultFlashcards } from '../data/flashcards.js?v=2026.4';

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
    // Sincronizar exámenes por defecto (añadir o actualizar nuevos como csa-v2)
    try {
      const existingExams = JSON.parse(localStorage.getItem(STORAGE_KEYS.EXAMS)) || [];
      const existingExamIds = new Set(existingExams.map(e => e.id));
      let updatedExams = [...existingExams];
      defaultExams.forEach(defEx => {
        if (!existingExamIds.has(defEx.id)) {
          updatedExams.push(defEx);
        } else {
          const idx = updatedExams.findIndex(e => e.id === defEx.id);
          if (idx >= 0) {
            updatedExams[idx] = { ...defEx, ...updatedExams[idx] };
          }
        }
      });
      localStorage.setItem(STORAGE_KEYS.EXAMS, JSON.stringify(updatedExams));
    } catch (e) {
      localStorage.setItem(STORAGE_KEYS.EXAMS, JSON.stringify(defaultExams));
    }

    // Examen actual por defecto
    if (!localStorage.getItem(STORAGE_KEYS.CURRENT_EXAM)) {
      localStorage.setItem(STORAGE_KEYS.CURRENT_EXAM, 'csa-v2');
    }
    // Sincronizar banco de preguntas (asegurar datos actualizados e íntegros)
    try {
      const existingQ = JSON.parse(localStorage.getItem(STORAGE_KEYS.QUESTIONS)) || [];
      const initialMap = new Map(initialQuestions.map(q => [q.id, {
        ...q,
        correctAnswer: parseInt(q.correctAnswer, 10)
      }]));

      // Preservar preguntas personalizadas añadidas por el usuario
      const customQuestions = existingQ.filter(q => !initialMap.has(q.id));

      // Combinar las preguntas oficiales con las personalizadas del usuario
      const updatedQ = [...Array.from(initialMap.values()), ...customQuestions];
      localStorage.setItem(STORAGE_KEYS.QUESTIONS, JSON.stringify(updatedQ));
    } catch (e) {
      localStorage.setItem(STORAGE_KEYS.QUESTIONS, JSON.stringify(initialQuestions));
    }

    // Sincronizar apuntes / notes
    try {
      localStorage.setItem(STORAGE_KEYS.NOTES, JSON.stringify(defaultNotes));
    } catch (e) {
      console.error(e);
    }

    // Sincronizar mapas mentales
    try {
      localStorage.setItem(STORAGE_KEYS.MINDMAPS, JSON.stringify(defaultMindmaps));
    } catch (e) {
      console.error(e);
    }

    // Sincronizar flashcards
    try {
      localStorage.setItem(STORAGE_KEYS.FLASHCARDS, JSON.stringify(defaultFlashcards));
    } catch (e) {
      console.error(e);
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
      const res = all.filter(n => n.examId === targetExamId);
      if (res.length === 0 && targetExamId === 'csa-v2') {
        return all.filter(n => n.examId === 'csa');
      }
      return res;
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
      const res = all.filter(m => m.examId === targetExamId);
      if (res.length === 0 && targetExamId === 'csa-v2') {
        return all.filter(m => m.examId === 'csa');
      }
      return res;
    } catch (e) {
      return [];
    }
  },

  getFlashcards(examId = null) {
    const targetExamId = examId || this.getCurrentExamId();
    try {
      const all = JSON.parse(localStorage.getItem(STORAGE_KEYS.FLASHCARDS)) || [];
      const res = all.filter(f => f.examId === targetExamId);
      if (res.length === 0 && targetExamId === 'csa-v2') {
        return all.filter(f => f.examId === 'csa');
      }
      return res;
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
