// Notes, Cheat Sheets, and Personal Notebook View Module (English)
import { StorageManager } from './storage.js';

export const NotesView = {
  activeCategory: 'all',
  searchQuery: '',

  init() {
    this.bindEvents();
    this.render();
  },

  bindEvents() {
    const searchInput = document.getElementById('notes-search-input');
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        this.searchQuery = e.target.value.toLowerCase().trim();
        this.renderNotesContent();
      });
    }

    // Personal notes editor
    const textarea = document.getElementById('personal-notes-textarea');
    const saveStatus = document.getElementById('notes-save-status');

    if (textarea) {
      const exam = StorageManager.getCurrentExam();
      textarea.value = StorageManager.getUserPersonalNotes(exam.id);

      textarea.addEventListener('input', () => {
        if (saveStatus) saveStatus.textContent = 'Saving...';
        StorageManager.saveUserPersonalNotes(exam.id, textarea.value);
        setTimeout(() => {
          if (saveStatus) saveStatus.textContent = '✅ Auto-saved locally';
        }, 400);
      });
    }
  },

  render() {
    this.renderCategories();
    this.renderNotesContent();
    this.loadPersonalNotes();
  },

  loadPersonalNotes() {
    const exam = StorageManager.getCurrentExam();
    const textarea = document.getElementById('personal-notes-textarea');
    if (textarea) {
      textarea.value = StorageManager.getUserPersonalNotes(exam.id);
    }
  },

  renderCategories() {
    const exam = StorageManager.getCurrentExam();
    const notes = StorageManager.getNotes(exam.id);
    const container = document.getElementById('notes-categories-list');
    if (!container) return;

    const categories = ['all', ...new Set(notes.map(n => n.category))];

    container.innerHTML = '';
    categories.forEach(cat => {
      const btn = document.createElement('button');
      btn.className = `note-category-btn ${this.activeCategory === cat ? 'active' : ''}`;
      btn.innerHTML = `
        <span>${cat === 'all' ? '📚 All Cheat Sheets' : cat}</span>
        <span class="badge ${this.activeCategory === cat ? 'badge-cyan' : 'badge-purple'}">
          ${cat === 'all' ? notes.length : notes.filter(n => n.category === cat).length}
        </span>
      `;
      btn.addEventListener('click', () => {
        this.activeCategory = cat;
        this.renderCategories();
        this.renderNotesContent();
      });
      container.appendChild(btn);
    });
  },

  renderNotesContent() {
    const exam = StorageManager.getCurrentExam();
    let notes = StorageManager.getNotes(exam.id);
    const container = document.getElementById('notes-display-area');
    if (!container) return;

    if (this.activeCategory !== 'all') {
      notes = notes.filter(n => n.category === this.activeCategory);
    }

    if (this.searchQuery) {
      notes = notes.filter(n => {
        const titleMatch = n.title.toLowerCase().includes(this.searchQuery);
        const descMatch = n.description.toLowerCase().includes(this.searchQuery);
        const contentMatch = JSON.stringify(n).toLowerCase().includes(this.searchQuery);
        return titleMatch || descMatch || contentMatch;
      });
    }

    if (notes.length === 0) {
      container.innerHTML = `
        <div class="card" style="text-align: center; padding: 2rem;">
          <p style="color: var(--text-muted);">No cheat sheets found matching your query.</p>
        </div>
      `;
      return;
    }

    container.innerHTML = '';
    notes.forEach(note => {
      const card = document.createElement('div');
      card.className = 'card';
      card.style.marginBottom = '1.5rem';

      let innerHtml = `
        <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 0.75rem;">
          <div>
            <span class="badge badge-cyan" style="margin-bottom: 0.4rem;">${note.category}</span>
            <h3 style="font-size: 1.25rem; font-weight: 700;">${note.title}</h3>
          </div>
        </div>
        <p style="color: var(--text-muted); font-size: 0.9rem; margin-bottom: 1rem;">${note.description}</p>
      `;

      if (note.type === 'table') {
        innerHtml += `
          <div style="overflow-x: auto;">
            <table class="data-table">
              <thead>
                <tr>${note.headers.map(h => `<th>${h}</th>`).join('')}</tr>
              </thead>
              <tbody>
                ${note.rows.map(row => `
                  <tr>
                    ${row.map((cell, idx) => `
                      <td>${idx === 0 ? `<code class="code-snippet">${cell}</code>` : cell}</td>
                    `).join('')}
                  </tr>
                `).join('')}
              </tbody>
            </table>
          </div>
        `;
      } else if (note.type === 'cards') {
        innerHtml += `
          <div style="display: flex; flex-direction: column; gap: 0.75rem;">
            ${note.items.map(item => `
              <div style="background: var(--bg-tertiary); padding: 1rem; border-radius: var(--radius-md); border-left: 3px solid var(--accent-cyan);">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.35rem;">
                  <strong style="color: #fff; font-size: 0.95rem;">${item.title}</strong>
                  <code class="code-snippet">${item.code}</code>
                </div>
                <p style="color: var(--text-muted); font-size: 0.85rem;">${item.desc}</p>
              </div>
            `).join('')}
          </div>
        `;
      }

      card.innerHTML = innerHtml;
      container.appendChild(card);
    });
  }
};
