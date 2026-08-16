// Mindmaps and SOC Workflows Engine (English)
import { StorageManager } from './storage.js';

export const MindmapView = {
  activeMapId: null,

  init() {
    this.render();
  },

  render() {
    const exam = StorageManager.getCurrentExam();
    const mindmaps = StorageManager.getMindmaps(exam.id);
    const selectorContainer = document.getElementById('mindmap-tabs-container');
    const flowContainer = document.getElementById('mindmap-flow-container');

    if (!selectorContainer || !flowContainer) return;

    if (mindmaps.length === 0) {
      selectorContainer.innerHTML = '';
      flowContainer.innerHTML = `
        <div class="card" style="text-align: center; padding: 2.5rem;">
          <p style="color: var(--text-muted);">No diagrams loaded for ${exam.name}.</p>
        </div>
      `;
      return;
    }

    if (!this.activeMapId || !mindmaps.some(m => m.id === this.activeMapId)) {
      this.activeMapId = mindmaps[0].id;
    }

    // Render tabs
    selectorContainer.innerHTML = '';
    mindmaps.forEach(map => {
      const btn = document.createElement('button');
      btn.className = `btn ${this.activeMapId === map.id ? 'btn-primary' : 'btn-secondary'}`;
      btn.style.fontSize = '0.85rem';
      btn.textContent = map.title;
      btn.addEventListener('click', () => {
        this.activeMapId = map.id;
        this.render();
      });
      selectorContainer.appendChild(btn);
    });

    // Render active map
    const activeMap = mindmaps.find(m => m.id === this.activeMapId) || mindmaps[0];
    
    document.getElementById('mindmap-title').textContent = activeMap.title;
    document.getElementById('mindmap-desc').textContent = activeMap.description;

    flowContainer.innerHTML = '';
    activeMap.steps.forEach((step) => {
      const stepCard = document.createElement('div');
      stepCard.className = 'flow-step-card';
      stepCard.innerHTML = `
        <span class="flow-step-number">${step.number}</span>
        <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 0.5rem;">
          <h4 style="font-size: 1.15rem; font-weight: 700;">${step.title}</h4>
          <span class="badge badge-purple">${step.badge || step.role}</span>
        </div>
        <p style="color: var(--text-muted); font-size: 0.92rem;">${step.summary}</p>
        
        <div class="flow-details-drawer">
          <strong style="font-size: 0.8rem; text-transform: uppercase; color: var(--accent-cyan); letter-spacing: 0.05em;">Key Detection Points & SOC Actions:</strong>
          <ul style="margin-top: 0.5rem; padding-left: 1.25rem; color: var(--text-main); font-size: 0.88rem;">
            ${step.details.map(d => `<li style="margin-bottom: 0.35rem;">${d}</li>`).join('')}
          </ul>
        </div>
      `;

      stepCard.addEventListener('click', () => {
        stepCard.classList.toggle('expanded');
      });

      flowContainer.appendChild(stepCard);
    });
  }
};
