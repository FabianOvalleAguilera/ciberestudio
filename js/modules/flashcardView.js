// 3D Flip Flashcards Active Recall Trainer (English)
import { StorageManager } from './storage.js?v=2026.5';

export const FlashcardView = {
  currentIndex: 0,
  flashcards: [],
  masteredIds: new Set(),
  isFlipped: false,

  init() {
    this.render();
  },

  render() {
    const exam = StorageManager.getCurrentExam();
    this.flashcards = StorageManager.getFlashcards(exam ? exam.id : 'csa-v2');
    this.isFlipped = false;

    const wrapper = document.getElementById('flashcards-container-area');
    if (!wrapper) return;

    if (!this.flashcards || this.flashcards.length === 0) {
      wrapper.innerHTML = `
        <div class="card" style="text-align: center; padding: 2.5rem;">
          <p style="color: var(--text-muted);">No flashcards registered for this certification.</p>
        </div>
      `;
      return;
    }

    if (this.currentIndex >= this.flashcards.length) {
      this.currentIndex = 0;
    }

    // Reconstruct template if it was destroyed
    if (!document.getElementById('active-flashcard-3d')) {
      wrapper.innerHTML = `
        <div class="flashcards-wrapper">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.75rem;">
            <span id="fc-category-badge" class="badge badge-purple">General</span>
            <span id="fc-counter-text" style="font-size: 0.85rem; color: var(--text-muted);">Card 1 of 10</span>
          </div>

          <div class="progress-bar-bg" style="margin-bottom: 1.25rem; height: 6px;">
            <div id="fc-progress-fill" class="progress-bar-fill emerald" style="width: 0%;"></div>
          </div>

          <!-- 3D Flashcard Element -->
          <div id="active-flashcard-3d" class="flashcard-3d">
            <!-- Front Face -->
            <div class="flashcard-face flashcard-front">
              <span class="flashcard-hint">❓ Question / Key Concept</span>
              <div id="fc-front-text" style="font-size: 1.3rem; font-weight: 700; line-height: 1.5; color: #fff;">
                Loading flashcard...
              </div>
              <span class="flashcard-hint" style="color: var(--accent-cyan);">👉 Click to flip</span>
            </div>

            <!-- Back Face -->
            <div class="flashcard-face flashcard-back">
              <span class="flashcard-hint" style="color: var(--accent-emerald);">💡 Answer / Definition</span>
              <div id="fc-back-text" style="font-size: 1.05rem; font-weight: 500; line-height: 1.6; color: var(--text-main); white-space: pre-line;">
                Answer
              </div>
              <span class="flashcard-hint" style="color: var(--accent-purple);">🔄 Click to flip again</span>
            </div>
          </div>

          <!-- Flashcard Navigation Controls -->
          <div class="flashcard-controls">
            <button id="fc-prev-btn" class="btn btn-secondary">⬅️ Previous</button>
            <button id="fc-flip-btn" class="btn btn-primary">🔄 Flip Card</button>
            <button id="fc-master-btn" class="btn btn-secondary btn-sm">⭐ Mark as Mastered</button>
            <button id="fc-next-btn" class="btn btn-secondary">Next ➡️</button>
            <button id="fc-shuffle-btn" class="btn btn-secondary" title="Shuffle flashcards">🔀</button>
          </div>
        </div>
      `;
      this.bindEvents();
    }

    this.updateCardUI();
  },

  bindEvents() {
    const cardElem = document.getElementById('active-flashcard-3d');
    const prevBtn = document.getElementById('fc-prev-btn');
    const nextBtn = document.getElementById('fc-next-btn');
    const flipBtn = document.getElementById('fc-flip-btn');
    const masterBtn = document.getElementById('fc-master-btn');
    const shuffleBtn = document.getElementById('fc-shuffle-btn');

    if (cardElem) cardElem.onclick = () => this.toggleFlip();
    if (flipBtn) flipBtn.onclick = () => this.toggleFlip();
    if (prevBtn) prevBtn.onclick = () => this.prevCard();
    if (nextBtn) nextBtn.onclick = () => this.nextCard();
    if (shuffleBtn) shuffleBtn.onclick = () => this.shuffleCards();
    if (masterBtn) masterBtn.onclick = () => this.toggleMastery();
  },

  updateCardUI() {
    if (!this.flashcards || this.flashcards.length === 0) return;
    const card = this.flashcards[this.currentIndex];
    const cardElem = document.getElementById('active-flashcard-3d');
    if (!card || !cardElem) return;

    cardElem.classList.remove('flipped');
    this.isFlipped = false;

    const catBadge = document.getElementById('fc-category-badge');
    const counterText = document.getElementById('fc-counter-text');
    const frontText = document.getElementById('fc-front-text');
    const backText = document.getElementById('fc-back-text');
    const masterBtn = document.getElementById('fc-master-btn');
    const progressFill = document.getElementById('fc-progress-fill');

    if (catBadge) catBadge.textContent = card.category || 'General';
    if (counterText) counterText.textContent = `Card ${this.currentIndex + 1} of ${this.flashcards.length}`;
    if (frontText) frontText.textContent = card.front;
    if (backText) backText.textContent = card.back;

    const isMastered = this.masteredIds.has(card.id);
    if (masterBtn) {
      masterBtn.className = `btn ${isMastered ? 'btn-emerald' : 'btn-secondary'} btn-sm`;
      masterBtn.textContent = isMastered ? '✅ Mastered' : '⭐ Mark as Mastered';
    }

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
