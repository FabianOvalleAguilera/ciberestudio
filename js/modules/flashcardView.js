// 3D Flip Flashcards Active Recall Trainer (English)
import { StorageManager } from './storage.js';

export const FlashcardView = {
  currentIndex: 0,
  flashcards: [],
  masteredIds: new Set(),
  isFlipped: false,

  init() {
    this.bindEvents();
    this.render();
  },

  bindEvents() {
    const cardElem = document.getElementById('active-flashcard-3d');
    const prevBtn = document.getElementById('fc-prev-btn');
    const nextBtn = document.getElementById('fc-next-btn');
    const flipBtn = document.getElementById('fc-flip-btn');
    const masterBtn = document.getElementById('fc-master-btn');
    const shuffleBtn = document.getElementById('fc-shuffle-btn');

    if (cardElem) cardElem.addEventListener('click', () => this.toggleFlip());
    if (flipBtn) flipBtn.addEventListener('click', () => this.toggleFlip());
    if (prevBtn) prevBtn.addEventListener('click', () => this.prevCard());
    if (nextBtn) nextBtn.addEventListener('click', () => this.nextCard());
    if (shuffleBtn) shuffleBtn.addEventListener('click', () => this.shuffleCards());
    if (masterBtn) masterBtn.addEventListener('click', () => this.toggleMastery());
  },

  render() {
    const exam = StorageManager.getCurrentExam();
    this.flashcards = StorageManager.getFlashcards(exam.id);
    this.isFlipped = false;

    const wrapper = document.getElementById('flashcards-container-area');
    if (!wrapper) return;

    if (this.flashcards.length === 0) {
      wrapper.innerHTML = `
        <div class="card" style="text-align: center; padding: 2.5rem;">
          <p style="color: var(--text-muted);">No flashcards registered for ${exam.name}.</p>
        </div>
      `;
      return;
    }

    if (this.currentIndex >= this.flashcards.length) {
      this.currentIndex = 0;
    }

    this.updateCardUI();
  },

  updateCardUI() {
    const card = this.flashcards[this.currentIndex];
    const cardElem = document.getElementById('active-flashcard-3d');
    if (!card || !cardElem) return;

    cardElem.classList.remove('flipped');
    this.isFlipped = false;

    document.getElementById('fc-category-badge').textContent = card.category || 'General';
    document.getElementById('fc-counter-text').textContent = 
      `Card ${this.currentIndex + 1} of ${this.flashcards.length}`;

    document.getElementById('fc-front-text').textContent = card.front;
    document.getElementById('fc-back-text').textContent = card.back;

    const isMastered = this.masteredIds.has(card.id);
    const masterBtn = document.getElementById('fc-master-btn');
    if (masterBtn) {
      masterBtn.className = `btn ${isMastered ? 'btn-emerald' : 'btn-secondary'} btn-sm`;
      masterBtn.textContent = isMastered ? '✅ Mastered' : '⭐ Mark as Mastered';
    }

    const progressFill = document.getElementById('fc-progress-fill');
    if (progressFill) {
      const pct = (this.masteredIds.size / this.flashcards.length) * 100;
      progressFill.style.width = `${pct}%`;
    }
  },

  toggleFlip() {
    const cardElem = document.getElementById('active-flashcard-3d');
    if (!cardElem) return;
    this.isFlipped = !this.isFlipped;
    if (this.isFlipped) {
      cardElem.classList.add('flipped');
    } else {
      cardElem.classList.remove('flipped');
    }
  },

  nextCard() {
    if (this.currentIndex < this.flashcards.length - 1) {
      this.currentIndex++;
    } else {
      this.currentIndex = 0;
    }
    this.updateCardUI();
  },

  prevCard() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    } else {
      this.currentIndex = this.flashcards.length - 1;
    }
    this.updateCardUI();
  },

  shuffleCards() {
    this.flashcards = [...this.flashcards].sort(() => 0.5 - Math.random());
    this.currentIndex = 0;
    this.updateCardUI();
  },

  toggleMastery() {
    const card = this.flashcards[this.currentIndex];
    if (!card) return;
    if (this.masteredIds.has(card.id)) {
      this.masteredIds.delete(card.id);
    } else {
      this.masteredIds.add(card.id);
    }
    this.updateCardUI();
  }
};
