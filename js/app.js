/* ============================================================
   JOLLOF PAGES — Main Application Logic
   Tab system, content rendering, interactivity
   ============================================================ */

'use strict';

/* ── Tab Switching System ──────────────────────────────────── */
(function initTabs() {
  const tabs = document.querySelectorAll('.main-tab');
  const workspaces = document.querySelectorAll('.workspace');

  function activateTab(tabId) {
    // Deactivate all
    tabs.forEach(t => t.classList.remove('active'));
    workspaces.forEach(w => {
      w.classList.remove('active');
      w.style.display = 'none';
    });

    // Activate selected
    const activeTab = document.querySelector(`.main-tab[data-tab="${tabId}"]`);
    const activeWs = document.getElementById(`ws-${tabId}`);

    if (activeTab) activeTab.classList.add('active');
    if (activeWs) {
      activeWs.classList.add('active');
      if (tabId === 'dashboard') {
        activeWs.style.display = 'grid';
      } else {
        activeWs.style.display = 'flex';
      }
    }

    // Render content for tab if needed
    const rendered = activeWs ? activeWs.dataset.rendered : false;
    if (!rendered && tabId !== 'dashboard') {
      renderTab(tabId);
      if (activeWs) activeWs.dataset.rendered = 'true';
    }
  }

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      activateTab(tab.dataset.tab);
    });
  });

  // Initialize: show dashboard on load
  activateTab('dashboard');
})();

/* ── Tab Content Renderers ─────────────────────────────────── */
function renderTab(tabId) {
  const renders = {
    setup:       renderSetup,
    characters:  renderCharacters,
    world:       renderWorld,
    factions:    renderFactions,
    timeline:    renderTimeline,
    wiki:        renderWiki,
    planning:    renderPlanning,
    builder:     renderBuilder,
    visuals:     renderVisuals,
    composition: renderComposition,
    agents:      renderAgents
  };
  if (renders[tabId]) renders[tabId]();
}

/* ════════════════════════════════════════ SERIES SETUP ══════ */
function renderSetup() {
  const el = document.getElementById('setup-content');
  const p = JP_DATA.project;

  el.innerHTML = `
    <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:16px;padding-bottom:24px">

      <!-- LEFT: Project Identity -->
      <div>
        <div class="panel-card" style="margin:0 0 16px">
          <div class="panel-header">
            <span class="panel-title"><i class="fa-solid fa-id-card"></i> Project Identity</span>
          </div>
          <div class="panel-body">
            <div class="form-group">
              <label class="form-label">Series Title</label>
              <input class="form-input" value="${p.title}" />
            </div>
            <div class="form-group">
              <label class="form-label">Subtitle / Tagline</label>
              <input class="form-input" value="${p.subtitle}" />
            </div>
            <div class="form-group">
              <label class="form-label">Story Promise</label>
              <input class="form-input" value="${p.tagline}" />
            </div>
            <div class="form-group">
              <label class="form-label">Project Code</label>
              <input class="form-input" value="${p.code}" style="font-family:var(--font-mono)" />
            </div>
            <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px">
              <div class="form-group">
                <label class="form-label">Genre</label>
                <input class="form-input" value="${p.genre}" />
              </div>
              <div class="form-group">
                <label class="form-label">Subgenre</label>
                <input class="form-input" value="${p.subgenre}" />
              </div>
            </div>
            <div class="form-group">
              <label class="form-label">Tone</label>
              <input class="form-input" value="${p.tone}" />
            </div>
            <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px">
              <div class="form-group">
                <label class="form-label">Audience</label>
                <input class="form-input" value="${p.audience}" />
              </div>
              <div class="form-group">
                <label class="form-label">Maturity</label>
                <input class="form-input" value="${p.maturity}" />
              </div>
            </div>
          </div>
        </div>

        <div class="panel-card" style="margin:0 0 16px">
          <div class="panel-header">
            <span class="panel-title"><i class="fa-solid fa-book"></i> Volume & Issue Planning</span>
          </div>
          <div class="panel-body">
            <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px;margin-bottom:12px">
              <div class="stat-box">
                <div class="stat-value">${p.volumes}</div>
                <div class="stat-label">Volumes</div>
              </div>
              <div class="stat-box">
                <div class="stat-value">${p.issueTarget}</div>
                <div class="stat-label">Issues</div>
              </div>
              <div class="stat-box">
                <div class="stat-value">520</div>
                <div class="stat-label">Pages</div>
              </div>
            </div>
            <div class="form-group">
              <label class="form-label">Page Target</label>
              <input class="form-input" value="${p.pageTarget}" />
            </div>
            <div class="form-group">
              <label class="form-label">Word Target per Issue</label>
              <input class="form-input" value="${p.wordTarget}" />
            </div>
          </div>
        </div>
      </div>

      <!-- CENTER: Story Architecture -->
      <div>
        <div class="panel-card" style="margin:0 0 16px">
          <div class="panel-header">
            <span class="panel-title"><i class="fa-solid fa-sitemap"></i> Story Architecture</span>
          </div>
          <div class="panel-body">
            <div class="form-group">
              <label class="form-label">High-Level Premise</label>
              <textarea class="form-textarea" style="min-height:90px">${p.premise}</textarea>
            </div>
            <div class="form-group">
              <label class="form-label">Core Conflict</label>
              <textarea class="form-textarea">${p.coreConflict}</textarea>
            </div>
            <div class="form-group">
              <label class="form-label">Framework</label>
              <input class="form-input" value="${p.framework}" />
            </div>
            <div class="form-group">
              <label class="form-label">Narrative Perspective</label>
              <input class="form-input" value="${p.perspective}" />
            </div>
            <div class="form-group">
              <label class="form-label">Pacing Model</label>
              <input class="form-input" value="${p.pacing}" />
            </div>
          </div>
        </div>

        <div class="panel-card" style="margin:0 0 16px">
          <div class="panel-header">
            <span class="panel-title"><i class="fa-solid fa-tags"></i> Core Themes</span>
          </div>
          <div class="panel-body">
            <div style="display:flex;flex-wrap:wrap;gap:6px;margin-bottom:8px">
              ${p.themes.map(t => `<span class="tag-pill" style="font-size:10.5px;padding:3px 8px">${t}</span>`).join('')}
            </div>
            <button class="btn btn-ghost btn-xs"><i class="fa-solid fa-plus"></i> Add Theme</button>
          </div>
        </div>

        <div class="panel-card" style="margin:0 0 16px">
          <div class="panel-header">
            <span class="panel-title"><i class="fa-solid fa-user-shield"></i> Protagonist Summary</span>
          </div>
          <div class="panel-body">
            <div class="form-group">
              <label class="form-label">Protagonist</label>
              <input class="form-input" value="John Walker — The Reluctant" />
            </div>
            <div class="form-group">
              <label class="form-label">Co-Protagonist</label>
              <input class="form-input" value="Maya Reed — The Inheritor" />
            </div>
            <div class="form-group">
              <label class="form-label">Primary Antagonist</label>
              <input class="form-input" value="Elder Voss — The Archon" />
            </div>
          </div>
        </div>
      </div>

      <!-- RIGHT: Rules & Visual Direction -->
      <div>
        <div class="panel-card" style="margin:0 0 16px">
          <div class="panel-header">
            <span class="panel-title"><i class="fa-solid fa-scroll"></i> Narrative Rules</span>
          </div>
          <div class="panel-body">
            ${p.rules.map((r, i) => `
              <div style="display:flex;gap:8px;padding:5px 0;border-bottom:1px solid var(--border-subtle);font-size:11.5px;line-height:1.45">
                <span style="font-family:var(--font-mono);color:var(--text-dim);min-width:16px">${i+1}.</span>
                <span style="color:var(--text-secondary)">${r}</span>
              </div>
            `).join('')}
            <button class="btn btn-ghost btn-xs" style="margin-top:8px"><i class="fa-solid fa-plus"></i> Add Rule</button>
          </div>
        </div>

        <div class="panel-card" style="margin:0 0 16px">
          <div class="panel-header">
            <span class="panel-title"><i class="fa-solid fa-palette"></i> Visual Style Direction</span>
          </div>
          <div class="panel-body">
            <div class="form-group">
              <label class="form-label">Visual Style Reference</label>
              <input class="form-input" value="Moody chiaroscuro — Fran Miller, noir woodcut aesthetic" />
            </div>
            <div class="form-group">
              <label class="form-label">Art Tone</label>
              <input class="form-input" value="Dark, atmospheric, selective color pops on key moments" />
            </div>
            <div style="margin-bottom:8px">
              <div class="form-label" style="margin-bottom:6px">Color Mood Palette</div>
              <div style="display:flex;gap:6px">
                <div style="width:30px;height:30px;background:#0d0f14;border:1px solid var(--border-base);border-radius:3px" title="Base dark"></div>
                <div style="width:30px;height:30px;background:#2a1f10;border:1px solid var(--border-base);border-radius:3px" title="Stone warm"></div>
                <div style="width:30px;height:30px;background:#e8a84c;border:1px solid var(--border-base);border-radius:3px" title="Torchlight gold"></div>
                <div style="width:30px;height:30px;background:#3a2060;border:1px solid var(--border-base);border-radius:3px" title="Void purple"></div>
                <div style="width:30px;height:30px;background:#8a2a2a;border:1px solid var(--border-base);border-radius:3px" title="Blood/danger red"></div>
                <button class="btn btn-ghost btn-xs"><i class="fa-solid fa-plus"></i></button>
              </div>
            </div>
            <div class="form-group">
              <label class="form-label">Forbidden Visual Elements</label>
              <textarea class="form-textarea" style="min-height:50px">Bright primary colors. Cartoony expressions. Direct depiction of the Void (until Volume 3+). Any scene showing the full exterior of the Sealed Chamber.</textarea>
            </div>
          </div>
        </div>

        <div class="panel-card" style="margin:0">
          <div class="panel-header">
            <span class="panel-title"><i class="fa-solid fa-triangle-exclamation"></i> World Rules</span>
          </div>
          <div class="panel-body">
            <div class="inline-alert warn">
              <i class="fa-solid fa-circle-exclamation"></i>
              <span>Magic has visible physical cost. Always show the toll. Never portray magic as clean or effortless.</span>
            </div>
            <div class="form-group" style="margin-bottom:0">
              <label class="form-label">Naming Conventions</label>
              <textarea class="form-textarea" style="min-height:50px">Cult names: Old English roots, harsh consonants (Nox, Voss, Fell). Order names: softer, Celtic-adjacent (Arla, Dorin). Druid terms: spiral-related, pre-Latin roots.</textarea>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}

/* ════════════════════════════════════════ CHARACTERS ════════ */
function renderCharacters() {
  const el = document.getElementById('characters-content');
  const chars = JP_DATA.characters;

  el.innerHTML = `
    <div style="margin-bottom:16px">
      <div class="filter-chips">
        <button class="filter-chip active">All (${chars.length})</button>
        <button class="filter-chip">Protagonist</button>
        <button class="filter-chip">Antagonist</button>
        <button class="filter-chip">Supporting</button>
        <button class="filter-chip">Active</button>
        <button class="filter-chip">Hidden</button>
      </div>
    </div>

    <!-- Stats Row -->
    <div style="display:grid;grid-template-columns:repeat(5,1fr);gap:12px;margin-bottom:20px">
      <div class="stat-box"><div class="stat-value">${chars.length}</div><div class="stat-label">Total Characters</div></div>
      <div class="stat-box"><div class="stat-value">2</div><div class="stat-label">Protagonists</div></div>
      <div class="stat-box"><div class="stat-value">2</div><div class="stat-label">Antagonists</div></div>
      <div class="stat-box"><div class="stat-value">1</div><div class="stat-label">Supporting</div></div>
      <div class="stat-box"><div class="stat-value">4</div><div class="stat-label">Issues Active</div></div>
    </div>

    <!-- Character Cards Grid -->
    <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:16px;margin-bottom:24px">
      ${chars.map(c => `
        <div class="char-card" onclick="openCharDetail('${c.id}')">
          <div class="char-card-header">
            <div class="char-card-avatar" style="${getCharAvatarStyle(c.role)}">${c.name.split(' ').map(w=>w[0]).join('').slice(0,2)}</div>
            <div>
              <div class="char-card-name">${c.name}</div>
              <div class="char-card-role">${c.alias ? `"${c.alias}" · ` : ''}${c.role}</div>
            </div>
            <div style="margin-left:auto">
              <span class="scene-status-tag ${getStatusClass(c.status)}" style="font-size:9px">${c.status}</span>
            </div>
          </div>
          <div class="char-card-body">
            <div style="margin-bottom:6px;color:var(--text-secondary);line-height:1.45">${c.bio ? c.bio.slice(0,120) + '…' : ''}</div>
            ${c.wound ? `<div style="font-size:10.5px;color:var(--text-muted)"><span style="color:var(--accent-gold)">Wound:</span> ${c.wound}</div>` : ''}
          </div>
          <div class="char-card-tags">
            <span class="tag-pill faction">${c.faction || 'Independent'}</span>
            ${c.arc ? `<span class="tag-pill arc">${c.arc.split('→')[0].trim()} arc</span>` : ''}
            ${(c.issueAppearances||[]).map(i=>`<span class="tag-pill">Iss ${i}</span>`).join('')}
          </div>
        </div>
      `).join('')}
    </div>

    <!-- Relationship Graph Placeholder -->
    <div class="panel-card" style="margin:0">
      <div class="panel-header">
        <span class="panel-title"><i class="fa-solid fa-diagram-project"></i> Relationship Graph</span>
        <div class="panel-actions">
          <button class="btn btn-ghost btn-xs">Expand View</button>
        </div>
      </div>
      <div class="panel-body" style="height:200px;display:flex;align-items:center;justify-content:center">
        ${renderRelationshipGraph()}
      </div>
    </div>
  `;
}

function getCharAvatarStyle(role) {
  const styles = {
    'Protagonist': 'background:linear-gradient(135deg,#2a3a6a,#4a5a9a)',
    'Antagonist': 'background:linear-gradient(135deg,#5a1a1a,#8a2a2a)',
    'Supporting': 'background:linear-gradient(135deg,#1a3a2a,#2a5a3a)',
    'Protagonist / Relic Ally': 'background:linear-gradient(135deg,#4a2a3a,#7a3a5a)',
    'Antagonist / Enforcer': 'background:linear-gradient(135deg,#2a1a2a,#4a2a4a)'
  };
  return (styles[role] || 'background:var(--bg-panel-alt)') + ';color:white';
}

function getStatusClass(status) {
  if (!status) return 'tag-planned';
  const s = status.toLowerCase();
  if (s.includes('active')) return 'tag-complete';
  if (s.includes('hidden')) return 'tag-review';
  if (s.includes('hunt')) return 'tag-drafting';
  return 'tag-planned';
}

function renderRelationshipGraph() {
  return `
    <svg viewBox="0 0 600 180" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:600px">
      <!-- Connection lines -->
      <line x1="120" y1="90" x2="240" y2="90" stroke="#3a4a6a" stroke-width="2" stroke-dasharray="4,3"/>
      <line x1="360" y1="90" x2="480" y2="90" stroke="#6a2a2a" stroke-width="2" stroke-dasharray="4,3"/>
      <line x1="120" y1="90" x2="300" y2="130" stroke="#3a5a3a" stroke-width="1" stroke-dasharray="2,4" opacity="0.6"/>
      <line x1="480" y1="90" x2="300" y2="50" stroke="#5a3a5a" stroke-width="1" stroke-dasharray="2,4" opacity="0.6"/>
      <line x1="240" y1="90" x2="360" y2="90" stroke="#5a5a2a" stroke-width="1.5" opacity="0.5"/>
      <!-- John -->
      <circle cx="120" cy="90" r="32" fill="#1a2a4a" stroke="#3a5a8a" stroke-width="2"/>
      <text x="120" y="87" text-anchor="middle" fill="white" font-size="11" font-weight="700" font-family="Inter,sans-serif">JW</text>
      <text x="120" y="100" text-anchor="middle" fill="#7090c0" font-size="9" font-family="Inter,sans-serif">John</text>
      <!-- Maya -->
      <circle cx="240" cy="90" r="30" fill="#3a1a2a" stroke="#7a3a5a" stroke-width="2"/>
      <text x="240" y="87" text-anchor="middle" fill="white" font-size="11" font-weight="700" font-family="Inter,sans-serif">MR</text>
      <text x="240" y="100" text-anchor="middle" fill="#b06080" font-size="9" font-family="Inter,sans-serif">Maya</text>
      <!-- Dorin -->
      <circle cx="300" cy="140" r="22" fill="#1a2a1a" stroke="#2a5a2a" stroke-width="1.5"/>
      <text x="300" y="137" text-anchor="middle" fill="white" font-size="10" font-weight="700" font-family="Inter,sans-serif">DF</text>
      <text x="300" y="148" text-anchor="middle" fill="#4a8a4a" font-size="8" font-family="Inter,sans-serif">Dorin</text>
      <!-- Nox -->
      <circle cx="360" cy="90" r="26" fill="#2a1a2a" stroke="#5a2a5a" stroke-width="2"/>
      <text x="360" y="87" text-anchor="middle" fill="white" font-size="11" font-weight="700" font-family="Inter,sans-serif">SN</text>
      <text x="360" y="100" text-anchor="middle" fill="#8a4a8a" font-size="9" font-family="Inter,sans-serif">Seraph</text>
      <!-- Voss -->
      <circle cx="480" cy="90" r="34" fill="#3a1a1a" stroke="#8a2a2a" stroke-width="2"/>
      <text x="480" y="87" text-anchor="middle" fill="white" font-size="11" font-weight="700" font-family="Inter,sans-serif">EV</text>
      <text x="480" y="100" text-anchor="middle" fill="#c04040" font-size="9" font-family="Inter,sans-serif">Voss</text>
      <!-- Legend labels -->
      <text x="170" y="78" text-anchor="middle" fill="#5a6a4a" font-size="8" font-family="Inter,sans-serif">allies</text>
      <text x="420" y="78" text-anchor="middle" fill="#6a3a3a" font-size="8" font-family="Inter,sans-serif">hunts</text>
      <text x="305" y="75" text-anchor="middle" fill="#5a5a3a" font-size="8" font-family="Inter,sans-serif">controls</text>
    </svg>
  `;
}

function openCharDetail(id) {
  const char = JP_DATA.characters.find(c => c.id === id);
  if (!char) return;
  alert(`Character: ${char.name}\nRole: ${char.role}\nStatus: ${char.status}\n\nBio: ${char.bio || 'No biography.'}\n\nUse the full character editor in the expanded view.`);
}

/* ════════════════════════════════════════ WORLD ════════════ */
function renderWorld() {
  const el = document.getElementById('world-content');
  const locs = JP_DATA.locations;

  el.innerHTML = `
    <div style="margin-bottom:16px">
      <div class="filter-chips">
        <button class="filter-chip active">All Locations</button>
        <button class="filter-chip">Underground</button>
        <button class="filter-chip">Interior</button>
        <button class="filter-chip">Ritual Spaces</button>
        <button class="filter-chip">Public</button>
      </div>
    </div>

    <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:16px;margin-bottom:24px">
      ${locs.map(loc => `
        <div class="location-card">
          <div class="location-card-img">
            ${getLocationIcon(loc.type)}
          </div>
          <div class="location-card-body">
            <div class="location-name">${loc.name}</div>
            <div class="location-type">${loc.type}</div>
            <div class="location-desc">${loc.summary}</div>
            ${loc.atmosphere ? `<div style="margin-top:6px;font-size:10px;color:var(--text-dim);font-style:italic">${loc.atmosphere.slice(0,80)}…</div>` : ''}
            <div style="display:flex;gap:6px;margin-top:8px;flex-wrap:wrap">
              <span class="tag-pill" style="${loc.status && loc.status.includes('Active') ? 'color:var(--status-active);background:rgba(76,175,125,0.1)' : ''}">${loc.status || 'Unknown'}</span>
              ${(loc.linkedScenes||[]).map(s => `<span class="tag-pill">Scene ${s}</span>`).join('')}
            </div>
          </div>
        </div>
      `).join('')}
    </div>

    <!-- World Rules Panel -->
    <div class="two-col-grid" style="margin-bottom:24px">
      <div class="panel-card" style="margin:0">
        <div class="panel-header">
          <span class="panel-title"><i class="fa-solid fa-city"></i> World Metadata</span>
        </div>
        <div class="panel-body">
          <div class="form-group">
            <label class="form-label">Setting Summary</label>
            <textarea class="form-textarea">A unnamed contemporary city built on centuries of hidden history. Surface: modern, industrial, institutional. Below: stone passages, forgotten rituals, and living mythology.</textarea>
          </div>
          <div class="form-group">
            <label class="form-label">Technology Level</label>
            <input class="form-input" value="Contemporary. Magic operates outside normal tech detection." />
          </div>
          <div class="form-group">
            <label class="form-label">Class Structure</label>
            <input class="form-input" value="Standard contemporary — academic, civic, working class visible. Shadow class (Cult) operates across all layers." />
          </div>
        </div>
      </div>
      <div class="panel-card" style="margin:0">
        <div class="panel-header">
          <span class="panel-title"><i class="fa-solid fa-map"></i> Zone Control Map</span>
        </div>
        <div class="panel-body">
          ${renderSimpleMap()}
        </div>
      </div>
    </div>
  `;
}

function getLocationIcon(type) {
  if (!type) return '<i class="fa-solid fa-location-dot"></i>';
  if (type.includes('Underground')) return '<i class="fa-solid fa-dungeon" style="font-size:28px;color:var(--text-dim)"></i>';
  if (type.includes('Interior')) return '<i class="fa-solid fa-building-columns" style="font-size:28px;color:var(--text-dim)"></i>';
  if (type.includes('Ritual')) return '<i class="fa-solid fa-hand-sparkles" style="font-size:28px;color:var(--text-dim)"></i>';
  return '<i class="fa-solid fa-map-pin" style="font-size:28px;color:var(--text-dim)"></i>';
}

function renderSimpleMap() {
  return `
    <svg viewBox="0 0 380 200" xmlns="http://www.w3.org/2000/svg" style="width:100%;border-radius:4px;background:#0d1018">
      <!-- City blocks -->
      <rect x="20" y="20" width="80" height="50" fill="#1a2030" stroke="#252b3a" stroke-width="1" rx="2"/>
      <text x="60" y="48" text-anchor="middle" fill="#5a6280" font-size="8" font-family="Inter,sans-serif">City District</text>
      <rect x="140" y="20" width="100" height="50" fill="#1a2030" stroke="#252b3a" stroke-width="1" rx="2"/>
      <text x="190" y="48" text-anchor="middle" fill="#5a6280" font-size="8" font-family="Inter,sans-serif">Archive Quarter</text>
      <rect x="280" y="20" width="80" height="50" fill="#1a2030" stroke="#252b3a" stroke-width="1" rx="2"/>
      <text x="320" y="48" text-anchor="middle" fill="#5a6280" font-size="8" font-family="Inter,sans-serif">Old Quarter</text>
      <!-- Underground layer -->
      <rect x="20" y="120" width="340" height="60" fill="#0d0a08" stroke="#3a2a1a" stroke-width="1" rx="2"/>
      <text x="190" y="145" text-anchor="middle" fill="#4a3520" font-size="9" font-family="Inter,sans-serif" font-weight="600">UNDERGROUND — THORNWALL CATACOMBS</text>
      <!-- Connecting tunnel line -->
      <line x1="320" y1="70" x2="280" y2="120" stroke="#3a2a1a" stroke-width="2" stroke-dasharray="4,3"/>
      <!-- Location markers -->
      <circle cx="190" cy="45" r="6" fill="#3a5a8a"/>
      <text x="190" y="48" text-anchor="middle" fill="white" font-size="8" font-weight="700" font-family="Inter,sans-serif">A</text>
      <circle cx="320" cy="45" r="6" fill="#5a3a3a"/>
      <text x="320" y="48" text-anchor="middle" fill="white" font-size="8" font-weight="700" font-family="Inter,sans-serif">V</text>
      <circle cx="190" cy="150" r="6" fill="#2a4a2a"/>
      <text x="190" y="153" text-anchor="middle" fill="white" font-size="8" font-weight="700" font-family="Inter,sans-serif">C</text>
      <circle cx="280" cy="150" r="6" fill="#4a1a1a"/>
      <text x="280" y="153" text-anchor="middle" fill="white" font-size="8" font-weight="700" font-family="Inter,sans-serif">S</text>
      <!-- Labels -->
      <text x="10" y="110" fill="#3a4a5a" font-size="7" font-family="Inter,sans-serif">A = Archive  V = Voss  C = Catacombs  S = Sealed Chamber</text>
    </svg>
  `;
}

/* ════════════════════════════════════════ FACTIONS ═════════ */
function renderFactions() {
  const el = document.getElementById('factions-content');
  const factions = JP_DATA.factions;

  el.innerHTML = `
    <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:16px;margin-bottom:24px">
      ${factions.map(f => `
        <div class="faction-card">
          <div class="faction-card-top">
            <div class="faction-emblem ${getFactionClass(f.type)}">
              <i class="${getFactionIcon(f.type)}"></i>
            </div>
            <div style="flex:1;min-width:0">
              <div style="font-size:13px;font-weight:700;color:var(--text-primary)">${f.name}</div>
              <div style="font-size:10px;color:var(--accent-gold);margin-top:1px">${f.publicName !== f.name ? f.publicName : ''}</div>
              <div style="font-size:10px;color:var(--text-muted)">${f.type}</div>
            </div>
          </div>
          <div style="padding:10px">
            <div style="font-size:11.5px;color:var(--text-secondary);line-height:1.5;margin-bottom:8px">${f.ideology || f.note || ''}</div>
            ${f.leadership ? `<div style="font-size:10.5px;color:var(--text-muted)"><span style="color:var(--accent-teal)">Leadership:</span> ${f.leadership}</div>` : ''}
            ${f.method ? `<div style="font-size:10.5px;color:var(--text-muted);margin-top:3px"><span style="color:var(--accent-teal)">Method:</span> ${f.method}</div>` : ''}
            ${f.hiddenAgenda ? `
              <div class="inline-alert warn" style="margin-top:8px;padding:5px 8px;font-size:10px">
                <i class="fa-solid fa-eye-slash"></i>
                <span>${f.hiddenAgenda}</span>
              </div>
            ` : ''}
            <div style="display:flex;gap:6px;margin-top:8px;flex-wrap:wrap">
              ${(f.linkedChars||[]).map(cid => {
                const c = JP_DATA.characters.find(x=>x.id===cid);
                return c ? `<span class="tag-pill faction">${c.name.split(' ')[0]}</span>` : '';
              }).join('')}
              ${(f.linkedLocations||[]).map(lid => {
                const l = JP_DATA.locations.find(x=>x.id===lid);
                return l ? `<span class="tag-pill">${l.name.split(' ').slice(0,2).join(' ')}</span>` : '';
              }).join('')}
            </div>
          </div>
        </div>
      `).join('')}
    </div>

    <!-- Power Map -->
    <div class="panel-card" style="margin:0">
      <div class="panel-header">
        <span class="panel-title"><i class="fa-solid fa-chess"></i> Faction Power Map</span>
      </div>
      <div class="panel-body" style="height:180px;display:flex;align-items:center;justify-content:center">
        ${renderFactionPowerMap()}
      </div>
    </div>
  `;
}

function getFactionClass(type) {
  if (!type) return 'guild';
  if (type.toLowerCase().includes('cult')) return 'cult';
  if (type.toLowerCase().includes('order') || type.toLowerCase().includes('protect')) return 'order';
  if (type.toLowerCase().includes('gov') || type.toLowerCase().includes('military')) return 'gov';
  if (type.toLowerCase().includes('guild') || type.toLowerCase().includes('archive')) return 'guild';
  return 'rebel';
}

function getFactionIcon(type) {
  if (!type) return 'fa-solid fa-shield';
  if (type.includes('Cult')) return 'fa-solid fa-eye';
  if (type.includes('Order') || type.includes('Protect')) return 'fa-solid fa-circle-notch';
  if (type.includes('Military')) return 'fa-solid fa-medal';
  return 'fa-solid fa-scroll';
}

function renderFactionPowerMap() {
  return `
    <svg viewBox="0 0 500 160" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:500px">
      <!-- Lines -->
      <line x1="180" y1="80" x2="280" y2="80" stroke="#4a2a2a" stroke-width="2" stroke-dasharray="6,3"/>
      <line x1="100" y1="80" x2="180" y2="80" stroke="#2a3a5a" stroke-width="1.5" stroke-dasharray="3,4" opacity="0.7"/>
      <text x="230" y="72" text-anchor="middle" fill="#6a2a2a" font-size="8" font-family="Inter,sans-serif">opposition</text>
      <!-- Cult -->
      <ellipse cx="330" cy="80" rx="70" ry="45" fill="rgba(90,10,10,0.2)" stroke="#6a1a1a" stroke-width="1.5"/>
      <text x="330" y="76" text-anchor="middle" fill="#c03030" font-size="10" font-weight="700" font-family="Inter,sans-serif">CULT OF THE</text>
      <text x="330" y="90" text-anchor="middle" fill="#c03030" font-size="10" font-weight="700" font-family="Inter,sans-serif">SEALED EYE</text>
      <text x="330" y="105" text-anchor="middle" fill="#7a3030" font-size="8" font-family="Inter,sans-serif">Voss · Nox · 7 Inner Council</text>
      <!-- Order -->
      <ellipse cx="130" cy="80" rx="60" ry="38" fill="rgba(10,40,80,0.2)" stroke="#1a3a6a" stroke-width="1.5"/>
      <text x="130" y="76" text-anchor="middle" fill="#4a7ab0" font-size="10" font-weight="700" font-family="Inter,sans-serif">ORDER OF THE</text>
      <text x="130" y="90" text-anchor="middle" fill="#4a7ab0" font-size="10" font-weight="700" font-family="Inter,sans-serif">SEALED CIRCLE</text>
      <text x="130" y="104" text-anchor="middle" fill="#3a5a80" font-size="8" font-family="Inter,sans-serif">Maya (unwitting) · Bloodline Net</text>
      <!-- SF9 -->
      <rect x="395" y="50" width="90" height="50" fill="rgba(30,40,20,0.3)" stroke="#2a4a2a" stroke-width="1" rx="4"/>
      <text x="440" y="73" text-anchor="middle" fill="#4a7a4a" font-size="10" font-weight="700" font-family="Inter,sans-serif">SF-9</text>
      <text x="440" y="87" text-anchor="middle" fill="#3a5a3a" font-size="8" font-family="Inter,sans-serif">Defunct · Compromised</text>
    </svg>
  `;
}

/* ════════════════════════════════════════ TIMELINE ═════════ */
function renderTimeline() {
  const el = document.getElementById('timeline-content');
  const events = JP_DATA.timeline;

  el.innerHTML = `
    <div style="display:grid;grid-template-columns:2fr 1fr;gap:16px">

      <!-- Timeline Track -->
      <div>
        <div class="timeline-track">
          ${events.map(e => `
            <div class="timeline-event ${getEventClass(e.type)}">
              <div class="event-date">${e.date} · ${e.era}</div>
              <div class="event-title">${e.title}</div>
              <div class="event-summary">${e.summary}</div>
              ${e.hiddenTruth ? `
                <div style="margin-top:6px;padding:5px 8px;background:rgba(139,111,212,0.1);border-left:2px solid var(--accent-purple);border-radius:0 3px 3px 0;font-size:10.5px;color:var(--accent-purple)">
                  <i class="fa-solid fa-eye-slash" style="font-size:9px;margin-right:4px"></i><strong>Hidden:</strong> ${e.hiddenTruth}
                </div>
              ` : ''}
              <div class="event-tags" style="margin-top:6px">
                <span class="scene-status-tag ${getRevealClass(e.revealStatus)}" style="font-size:9px">${e.revealStatus || 'Unknown'}</span>
                ${(e.linkedChars||[]).map(cid => {
                  const c = JP_DATA.characters.find(x=>x.id===cid);
                  return c ? `<span class="tag-pill">${c.name.split(' ')[0]}</span>` : '';
                }).join('')}
                <span class="tag-pill">${e.type}</span>
              </div>
            </div>
          `).join('')}
        </div>
      </div>

      <!-- Sidebar: Stats & Controls -->
      <div>
        <div class="panel-card" style="margin:0 0 16px">
          <div class="panel-header">
            <span class="panel-title"><i class="fa-solid fa-chart-bar"></i> Timeline Stats</span>
          </div>
          <div class="panel-body">
            <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px">
              <div class="stat-box"><div class="stat-value">${events.length}</div><div class="stat-label">Total Events</div></div>
              <div class="stat-box"><div class="stat-value">${events.filter(e=>e.revealStatus && e.revealStatus.includes('revealed')).length}</div><div class="stat-label">Revealed</div></div>
              <div class="stat-box"><div class="stat-value">${events.filter(e=>e.hiddenTruth).length}</div><div class="stat-label">Hidden Truth</div></div>
              <div class="stat-box"><div class="stat-value">${events.filter(e=>e.revealStatus && e.revealStatus.includes('Not yet')).length}</div><div class="stat-label">Unrevealed</div></div>
            </div>
          </div>
        </div>

        <div class="panel-card" style="margin:0 0 16px">
          <div class="panel-header">
            <span class="panel-title"><i class="fa-solid fa-key"></i> Reveal Logic Gates</span>
          </div>
          <div class="panel-body">
            <div class="inline-alert warn" style="font-size:10.5px">
              <i class="fa-solid fa-triangle-exclamation"></i>
              <span>John cannot know about Maya's wrist mark until Issue 6+</span>
            </div>
            <div class="inline-alert info" style="font-size:10.5px">
              <i class="fa-solid fa-lock"></i>
              <span>Sealed Chamber interior: Locked until Issue 5</span>
            </div>
            <div class="inline-alert info" style="font-size:10.5px">
              <i class="fa-solid fa-lock"></i>
              <span>Voss's personal motivation: Locked until Issue 7</span>
            </div>
          </div>
        </div>

        <div class="panel-card" style="margin:0">
          <div class="panel-header">
            <span class="panel-title"><i class="fa-solid fa-magnifying-glass"></i> Event Quick Add</span>
          </div>
          <div class="panel-body">
            <div class="form-group">
              <label class="form-label">Event Title</label>
              <input class="form-input" placeholder="Name this event…" />
            </div>
            <div class="form-group">
              <label class="form-label">Date / Period</label>
              <input class="form-input" placeholder="e.g. Issue 4 · Page 16" />
            </div>
            <div class="form-group">
              <label class="form-label">Type</label>
              <select class="form-select">
                <option>World Event</option>
                <option>Personal Event</option>
                <option>Key Reveal</option>
                <option>Hidden History</option>
                <option>Story Event</option>
              </select>
            </div>
            <button class="btn btn-primary btn-sm" style="width:100%"><i class="fa-solid fa-plus"></i> Add to Timeline</button>
          </div>
        </div>
      </div>
    </div>
  `;
}

function getEventClass(type) {
  if (!type) return '';
  if (type.includes('Reveal') || type.includes('Key')) return 'reveal';
  if (type.includes('Hidden') || type.includes('Personal')) return 'hidden';
  return 'key';
}

function getRevealClass(status) {
  if (!status) return 'tag-planned';
  if (status.includes('Established') || status.includes('canon')) return 'tag-complete';
  if (status.includes('Not yet')) return 'tag-drafting';
  if (status.includes('Partial')) return 'tag-review';
  return 'tag-planned';
}

/* ════════════════════════════════════════ CANON WIKI ════════ */
function renderWiki() {
  const el = document.getElementById('wiki-content');
  const entries = JP_DATA.wiki;

  el.innerHTML = `
    <div style="margin-bottom:16px">
      <div class="filter-chips">
        <button class="filter-chip active">All</button>
        <button class="filter-chip">Characters</button>
        <button class="filter-chip">Objects</button>
        <button class="filter-chip">Lore</button>
        <button class="filter-chip">Symbols</button>
        <button class="filter-chip">Locations</button>
        <button class="filter-chip">Draft</button>
        <button class="filter-chip" style="color:var(--accent-green)">Approved</button>
      </div>
    </div>

    <div style="display:grid;grid-template-columns:2fr 1fr;gap:16px">
      <div>
        ${entries.map(e => `
          <div class="wiki-entry">
            <div class="wiki-entry-header">
              <div class="wiki-entry-title">${e.title}</div>
              <div style="display:flex;align-items:center;gap:6px">
                <span class="wiki-entry-type wiki-type-${getWikiTypeClass(e.type)}">${e.type}</span>
                <span class="scene-status-tag ${e.status === 'Approved' ? 'tag-complete' : 'tag-drafting'}" style="font-size:9px">${e.status}</span>
              </div>
            </div>
            <div class="wiki-entry-text">${e.summary}</div>
            ${e.continuityNote ? `
              <div style="margin-top:6px;padding:5px 8px;background:rgba(58,176,196,0.08);border-left:2px solid var(--accent-teal);border-radius:0 3px 3px 0;font-size:10px;color:var(--accent-teal)">
                <i class="fa-solid fa-shield-halved" style="font-size:9px;margin-right:4px"></i>${e.continuityNote}
              </div>
            ` : ''}
            <div style="display:flex;gap:6px;margin-top:8px;align-items:center">
              ${(e.linkedChars||[]).map(cid => {
                const c = JP_DATA.characters.find(x=>x.id===cid);
                return c ? `<span class="tag-pill faction">${c.name.split(' ')[0]}</span>` : '';
              }).join('')}
              ${(e.linkedFactions||[]).map(fid => {
                const f = JP_DATA.factions.find(x=>x.id===fid);
                return f ? `<span class="tag-pill">${f.name.split(' ')[0]}</span>` : '';
              }).join('')}
              <button class="btn btn-ghost btn-xs" style="margin-left:auto">Edit</button>
            </div>
          </div>
        `).join('')}
      </div>

      <!-- Right sidebar -->
      <div>
        <div class="panel-card" style="margin:0 0 16px">
          <div class="panel-header">
            <span class="panel-title"><i class="fa-solid fa-chart-pie"></i> Wiki Status</span>
          </div>
          <div class="panel-body">
            <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:12px">
              <div class="stat-box"><div class="stat-value">${entries.length}</div><div class="stat-label">Entries</div></div>
              <div class="stat-box"><div class="stat-value">${entries.filter(e=>e.status==='Approved').length}</div><div class="stat-label">Approved</div></div>
            </div>
            <div style="font-size:11px;color:var(--text-muted);margin-bottom:6px">Entries by type:</div>
            ${['Object','Lore','Symbol','Character / Public Record'].map(type => {
              const count = entries.filter(e => e.type === type || e.type.includes(type.split(' ')[0])).length;
              return count > 0 ? `
                <div style="display:flex;align-items:center;justify-content:space-between;font-size:11px;margin-bottom:4px">
                  <span style="color:var(--text-secondary)">${type}</span>
                  <span style="font-family:var(--font-mono);color:var(--accent-blue)">${count}</span>
                </div>
              ` : '';
            }).join('')}
          </div>
        </div>

        <div class="panel-card" style="margin:0 0 16px">
          <div class="panel-header">
            <span class="panel-title"><i class="fa-solid fa-circle-question"></i> Unresolved Questions</span>
          </div>
          <div class="panel-body">
            <div class="lore-item"><span class="lore-dot" style="background:var(--accent-red)"></span><span>What happened to Dorin's 1990s reports after filing?</span></div>
            <div class="lore-item"><span class="lore-dot" style="background:var(--accent-gold)"></span><span>How did Voss learn the Sealed Chamber location?</span></div>
            <div class="lore-item"><span class="lore-dot" style="background:var(--accent-purple)"></span><span>What is Nox's birth name?</span></div>
          </div>
        </div>

        <div class="panel-card" style="margin:0">
          <div class="panel-header">
            <span class="panel-title"><i class="fa-solid fa-link-slash"></i> Broken Canon Links</span>
          </div>
          <div class="panel-body">
            <div class="inline-alert warn" style="font-size:10.5px">
              <i class="fa-solid fa-triangle-exclamation"></i>
              <span>Entity "First Keeper" referenced in Event #1 — no character record found</span>
            </div>
            <div class="inline-alert error" style="font-size:10.5px">
              <i class="fa-solid fa-xmark-circle"></i>
              <span>Prop "Spiral Key" referenced in Scene 3b — no prop record</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}

function getWikiTypeClass(type) {
  if (!type) return 'lore';
  if (type.includes('Object')) return 'object';
  if (type.includes('Location')) return 'location';
  if (type.includes('Character')) return 'char';
  if (type.includes('Symbol') || type.includes('Lore')) return 'lore';
  if (type.includes('Faction')) return 'faction';
  return 'lore';
}

/* ════════════════════════════════════════ STORY PLANNING ════ */
function renderPlanning() {
  const el = document.getElementById('planning-content');
  const issues = JP_DATA.issues;

  el.innerHTML = `
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:16px;margin-bottom:20px">

      <!-- Issues List -->
      <div>
        <div style="font-size:12px;font-weight:700;color:var(--text-secondary);text-transform:uppercase;letter-spacing:0.6px;margin-bottom:12px">Issue Map — Book 1</div>
        ${issues.map(iss => `
          <div class="issue-card ${iss.status === 'Active (Drafting)' ? 'active' : ''}" style="margin-bottom:10px">
            <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:6px">
              <span class="issue-num">Issue ${iss.number}</span>
              <span class="scene-status-tag ${iss.status.includes('Complete') ? 'tag-complete' : iss.status.includes('Active') ? 'tag-drafting' : 'tag-planned'}" style="font-size:9px">${iss.status}</span>
            </div>
            <div class="issue-title">"${iss.title}"</div>
            <div class="issue-summary">${iss.purpose}</div>
            ${iss.keyReveal ? `<div style="margin-top:6px;font-size:10.5px;color:var(--accent-gold)"><i class="fa-solid fa-key" style="font-size:9px"></i> Key Reveal: ${iss.keyReveal}</div>` : ''}
            ${iss.cliffhanger ? `<div style="font-size:10.5px;color:var(--accent-red);margin-top:2px"><i class="fa-solid fa-arrow-right" style="font-size:9px"></i> Cliffhanger: ${iss.cliffhanger}</div>` : ''}
            <div class="issue-meta">
              <span><i class="fa-solid fa-file"></i> ${iss.pageCount || '?'} pages</span>
              <span><i class="fa-solid fa-list"></i> ${iss.sequences || '?'} seqs</span>
            </div>
          </div>
        `).join('')}
        <div class="issue-card" style="border-style:dashed;border-color:var(--border-bright);background:transparent;opacity:0.5;cursor:pointer;text-align:center;padding:16px">
          <i class="fa-solid fa-plus" style="color:var(--text-dim);margin-right:6px"></i>
          <span style="color:var(--text-dim);font-size:12px">Plan Issue 6</span>
        </div>
      </div>

      <!-- Right: Arc Tracker & Threads -->
      <div>
        <div class="panel-card" style="margin:0 0 16px">
          <div class="panel-header">
            <span class="panel-title"><i class="fa-solid fa-chart-line"></i> Character Arc Tracker</span>
          </div>
          <div class="panel-body">
            ${JP_DATA.characters.slice(0,4).map(c => `
              <div style="margin-bottom:10px">
                <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:4px">
                  <span style="font-size:11.5px;font-weight:600;color:var(--text-primary)">${c.name}</span>
                  <span style="font-size:9.5px;color:var(--text-muted)">${c.arc ? c.arc.split('→').map(s=>s.trim())[0] : 'TBD'} →</span>
                </div>
                <div class="progress-bar">
                  <div class="progress-bar-fill ${getArcProgressStyle(c.role)}" style="width:${getArcProgress(c.role)}%"></div>
                </div>
              </div>
            `).join('')}
          </div>
        </div>

        <div class="panel-card" style="margin:0 0 16px">
          <div class="panel-header">
            <span class="panel-title"><i class="fa-solid fa-puzzle-piece"></i> Setup / Payoff Tracker</span>
          </div>
          <div class="panel-body">
            <div class="warn-item">
              <span class="warn-dot blue"></span>
              <div>
                <div style="font-size:11px;font-weight:600;color:var(--text-primary)">John's burned evidence — Issue 1</div>
                <div style="font-size:10px;color:var(--text-muted)">Setup: ✓ Planted (Issue 1, Pg 22) · Payoff: Issue 4 reveal planned</div>
              </div>
            </div>
            <div class="warn-item">
              <span class="warn-dot orange"></span>
              <div>
                <div style="font-size:11px;font-weight:600;color:var(--text-primary)">Maya's wrist spiral mark</div>
                <div style="font-size:10px;color:var(--text-muted)">Setup: ✓ Planted (Issue 2, Pg 8) · Payoff: Not yet paid off</div>
              </div>
            </div>
            <div class="warn-item">
              <span class="warn-dot red"></span>
              <div>
                <div style="font-size:11px;font-weight:600;color:var(--text-primary)">Nox letting Maya escape — Issue 2</div>
                <div style="font-size:10px;color:var(--text-muted)">Setup: ✓ Shown · Payoff: Requires Issue 5 scene confirmation</div>
              </div>
            </div>
          </div>
        </div>

        <div class="panel-card" style="margin:0">
          <div class="panel-header">
            <span class="panel-title"><i class="fa-solid fa-question"></i> Open Mystery Map</span>
          </div>
          <div class="panel-body">
            <div class="thread-item"><i class="fa-solid fa-circle-play thread-icon"></i><span>What is in the Sealed Chamber beyond the door?</span><span class="thread-badge">Layer 1</span></div>
            <div class="thread-item"><i class="fa-solid fa-circle-dot thread-icon"></i><span>Why does the Relic know Maya's bloodline?</span><span class="thread-badge">Layer 2</span></div>
            <div class="thread-item"><i class="fa-solid fa-circle-dot thread-icon"></i><span>What did Voss lose to the Void?</span><span class="thread-badge">Layer 3</span></div>
            <div class="thread-item"><i class="fa-solid fa-circle-half-stroke thread-icon"></i><span>Is one of John's SF-9 unit members in the Cult?</span><span class="thread-badge">Hidden</span></div>
          </div>
        </div>
      </div>
    </div>
  `;
}

function getArcProgress(role) {
  const map = { 'Protagonist': 38, 'Protagonist / Relic Ally': 32, 'Primary Antagonist': 45, 'Antagonist / Enforcer': 28 };
  return map[role] || 20;
}

function getArcProgressStyle(role) {
  if (role.includes('Protagonist')) return '';
  if (role.includes('Antagonist')) return 'gold';
  return 'green';
}

/* ════════════════════════════════════════ SCENE/PAGE/PANEL ══ */
function renderBuilder() {
  const el = document.getElementById('builder-content');

  el.innerHTML = `
    <div style="display:grid;grid-template-columns:220px 1fr;gap:0;height:100%;border-top:1px solid var(--border-base);margin:-16px;overflow:hidden">

      <!-- Left: Scene List -->
      <div style="border-right:1px solid var(--border-base);background:var(--bg-panel);overflow-y:auto;padding:var(--sp-md)">
        <div style="font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:0.6px;color:var(--text-dim);margin-bottom:8px;padding:0 4px">Issue 4 Scenes</div>
        ${[
          {num:'4.1', title:'City Archive Visit', status:'complete', pages:'1–5'},
          {num:'4.2', title:'Dorin\'s Warning', status:'complete', pages:'6–9'},
          {num:'4.3', title:'The Entrance Found', status:'complete', pages:'10–13'},
          {num:'4.4', title:'Threshold Decision', status:'locked', pages:'14'},
          {num:'4.5a', title:'Into the Catacombs', status:'drafting', pages:'15–18'},
          {num:'4.5b', title:'The First Symbol', status:'planned', pages:'19–22'},
          {num:'4.6', title:'Cult Pursuit Begins', status:'planned', pages:'23–26'},
          {num:'4.7', title:'The Family Name', status:'planned', pages:'27–30'},
        ].map(s => `
          <div class="scene-item ${s.status === '4.5a' ? 'active' : ''} ${s.status}">
            <span class="scene-num" style="font-size:10px;min-width:26px">${s.num}</span>
            <div class="scene-info">
              <div class="scene-name" style="font-size:11.5px">${s.title}</div>
              <div class="scene-sub">Pg ${s.pages}</div>
            </div>
            <span class="scene-status-tag tag-${s.status}" style="font-size:8px">${s.status}</span>
          </div>
        `).join('')}
        <div style="margin-top:12px;padding:0 4px">
          <button class="btn btn-ghost btn-sm" style="width:100%"><i class="fa-solid fa-plus"></i> New Scene</button>
        </div>
      </div>

      <!-- Right: Scene Detail / Page / Panel Editor -->
      <div style="overflow-y:auto;padding:var(--sp-lg)">

        <!-- Mode Switcher -->
        <div style="display:flex;gap:0;margin-bottom:16px;border:1px solid var(--border-base);border-radius:var(--r-sm);overflow:hidden;width:fit-content">
          <button class="btn btn-secondary btn-sm builder-mode-btn active-mode" data-mode="scene" style="border-radius:0;border:none;background:var(--bg-active);color:var(--text-primary)">Scene Mode</button>
          <button class="btn btn-ghost btn-sm builder-mode-btn" data-mode="page" style="border-radius:0;border:none;border-left:1px solid var(--border-base)">Page Mode</button>
          <button class="btn btn-ghost btn-sm builder-mode-btn" data-mode="panel" style="border-radius:0;border:none;border-left:1px solid var(--border-base)">Panel Mode</button>
        </div>

        <!-- Scene Mode Content -->
        <div id="builder-scene-mode">
          <div style="font-size:14px;font-weight:700;color:var(--text-white);margin-bottom:16px">Scene 4.5a — Into the Catacombs</div>

          <div style="display:grid;grid-template-columns:1fr 1fr;gap:16px">
            <div>
              <div class="panel-card" style="margin:0 0 12px">
                <div class="panel-header"><span class="panel-title">Scene Identity</span></div>
                <div class="panel-body">
                  <div class="form-group"><label class="form-label">Scene Title</label><input class="form-input" value="Into the Catacombs"/></div>
                  <div class="form-group"><label class="form-label">Sequence</label><input class="form-input" value="Sequence 3 — The Descent"/></div>
                  <div class="form-group"><label class="form-label">Scene Objective</label><textarea class="form-textarea">John and Maya enter the Catacombs. Tension escalates. Symbols intensify. End on Maya's touch of the wall and the torch flicker.</textarea></div>
                  <div class="form-group"><label class="form-label">What Changes?</label><input class="form-input" value="Maya makes physical contact with Druid stonework. Relic passive signal strengthens."/></div>
                </div>
              </div>
              <div class="panel-card" style="margin:0 0 12px">
                <div class="panel-header"><span class="panel-title">Action Beats</span></div>
                <div class="panel-body">
                  ${['Enter the archway. Torchlight only.','Progress through the tunnel — symbols visible.','John checks for pursuit. Nothing. Yet.','Maya reaches out and touches the spiral carving.','Torch flickers. Both freeze.'].map((b,i) => `
                    <div class="check-item"><i class="fa-solid fa-circle-dot" style="color:var(--accent-blue);font-size:8px;margin-top:3px"></i><span style="font-size:11px">${b}</span></div>
                  `).join('')}
                </div>
              </div>
            </div>
            <div>
              <div class="panel-card" style="margin:0 0 12px">
                <div class="panel-header"><span class="panel-title">Characters & Location</span></div>
                <div class="panel-body">
                  <div class="form-group"><label class="form-label">Characters Present</label><input class="form-input" value="John Walker, Maya Reed"/></div>
                  <div class="form-group"><label class="form-label">Location</label><input class="form-input" value="Thornwall Catacombs — Entrance Passage"/></div>
                  <div class="form-group"><label class="form-label">Conflict Level</label>
                    <select class="form-select"><option>High — Environmental tension, Cult approaching</option></select>
                  </div>
                  <div class="form-group"><label class="form-label">Emotional Tone</label><input class="form-input" value="Dread, determination, dawning realization"/></div>
                </div>
              </div>
              <div class="panel-card" style="margin:0 0 12px">
                <div class="panel-header"><span class="panel-title">Page & Panel Estimates</span></div>
                <div class="panel-body">
                  <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px">
                    <div class="stat-box"><div class="stat-value">4</div><div class="stat-label">Est. Pages</div></div>
                    <div class="stat-box"><div class="stat-value">12</div><div class="stat-label">Est. Panels</div></div>
                    <div class="stat-box"><div class="stat-value">3</div><div class="stat-label">Key Beats</div></div>
                  </div>
                </div>
              </div>
              <div class="panel-card" style="margin:0">
                <div class="panel-header"><span class="panel-title">Continuity Flags</span></div>
                <div class="panel-body">
                  <div class="warn-item"><span class="warn-dot red"></span><span class="warn-text">Torch must be new — prior one extinguished (Sc 3, Pg 9)</span></div>
                  <div class="warn-item"><span class="warn-dot orange"></span><span class="warn-text">Maya's satchel should be on her left shoulder per canon ref</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  `;

  // Mode switcher interaction
  el.querySelectorAll('.builder-mode-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      el.querySelectorAll('.builder-mode-btn').forEach(b => {
        b.style.background = '';
        b.style.color = '';
      });
      btn.style.background = 'var(--bg-active)';
      btn.style.color = 'var(--text-primary)';
    });
  });
}

/* ════════════════════════════════════════ VISUAL CONTINUITY ═ */
function renderVisuals() {
  const el = document.getElementById('visuals-content');
  const refs = JP_DATA.visualRefs;

  const icons = ['🏛', '🧔', '👩', '🌀', '🧓', '👁'];

  el.innerHTML = `
    <div style="margin-bottom:16px">
      <div class="filter-chips">
        <button class="filter-chip active">All (${refs.length})</button>
        <button class="filter-chip">Scenes</button>
        <button class="filter-chip">Characters</button>
        <button class="filter-chip">Symbols</button>
        <button class="filter-chip">Props</button>
        <button class="filter-chip">Locations</button>
        <button class="filter-chip" style="color:var(--accent-teal)">Approved Only</button>
      </div>
    </div>

    <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:12px;margin-bottom:24px">
      ${refs.map((ref, i) => `
        <div class="vis-cont-card">
          <div class="vis-cont-img" style="height:110px;font-size:36px">${icons[i] || '🖼'}</div>
          <div class="vis-cont-info">
            <div class="vis-cont-label">${ref.label}</div>
            <div class="vis-cont-meta">${ref.type} · ${ref.scene ? 'Scene '+ref.scene : ref.char ? 'Char Ref' : ref.faction ? 'Faction' : 'Canon'}</div>
            <div style="font-size:10px;color:var(--text-muted);margin-top:3px;line-height:1.4">${ref.notes}</div>
            <div style="display:flex;align-items:center;gap:6px;margin-top:6px">
              <span class="scene-status-tag ${ref.approved ? 'tag-complete' : 'tag-review'}" style="font-size:9px">${ref.approved ? 'Approved' : 'Draft'}</span>
              <button class="btn btn-ghost btn-xs" style="margin-left:auto">Use</button>
            </div>
          </div>
        </div>
      `).join('')}
    </div>

    <!-- Consistency Alerts -->
    <div class="two-col-grid">
      <div class="panel-card" style="margin:0">
        <div class="panel-header">
          <span class="panel-title"><i class="fa-solid fa-code-compare"></i> Visual Drift Alerts</span>
        </div>
        <div class="panel-body">
          <div class="inline-alert warn">
            <i class="fa-solid fa-triangle-exclamation"></i>
            <span>John's coat appears lighter in Issue 3, Pg 4 panel 2 than approved reference. Review before Issue 4.</span>
          </div>
          <div class="inline-alert warn">
            <i class="fa-solid fa-triangle-exclamation"></i>
            <span>Druid symbol variant on Issue 2 Pg 17 does not match Canon Spiral Script v2 — counter-clockwise orientation error.</span>
          </div>
          <div class="inline-alert info">
            <i class="fa-solid fa-circle-info"></i>
            <span>Maya's journal cover color undefined beyond "aged brown." Recommend canon entry for prop.</span>
          </div>
        </div>
      </div>
      <div class="panel-card" style="margin:0">
        <div class="panel-header">
          <span class="panel-title"><i class="fa-solid fa-palette"></i> Color Mood Continuity</span>
        </div>
        <div class="panel-body">
          <div style="font-size:11px;color:var(--text-muted);margin-bottom:10px">Scene-by-scene dominant color temperature</div>
          ${[
            {scene:'4.1 · Archive', warm:30, cool:70},
            {scene:'4.2 · Dorin', warm:55, cool:45},
            {scene:'4.3 · Entrance', warm:40, cool:60},
            {scene:'4.5a · Catacombs', warm:65, cool:35},
          ].map(s => `
            <div style="margin-bottom:8px">
              <div style="display:flex;justify-content:space-between;font-size:10px;margin-bottom:3px">
                <span style="color:var(--text-secondary)">${s.scene}</span>
                <span style="color:var(--text-muted)">${s.warm}% warm · ${s.cool}% cool</span>
              </div>
              <div style="height:6px;border-radius:3px;overflow:hidden;display:flex">
                <div style="width:${s.warm}%;background:var(--accent-gold);opacity:0.7"></div>
                <div style="width:${s.cool}%;background:var(--accent-blue);opacity:0.4"></div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </div>
  `;
}

/* ════════════════════════════════════════ PAGE COMPOSITION ══ */
function renderComposition() {
  const el = document.getElementById('composition-content');

  el.innerHTML = `
    <div class="page-comp-layout">

      <!-- Left Sidebar -->
      <div class="page-comp-sidebar-left">
        <div style="padding:10px 10px 0;font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:0.6px;color:var(--text-dim)">Issue 4 · Pages</div>
        <div style="padding:8px">
          ${Array.from({length:12}, (_,i) => i+15).map(pg => `
            <div class="scene-item ${pg === 16 ? 'active' : ''}" style="padding:5px 8px">
              <span class="scene-num" style="font-size:9px;min-width:20px">P${pg}</span>
              <div class="scene-info">
                <div class="scene-name" style="font-size:11px">Page ${pg}</div>
                <div class="scene-sub">${pg <= 17 ? 'Catacombs · 3 panels' : 'TBD'}</div>
              </div>
              <span style="width:6px;height:6px;border-radius:50%;background:${pg <= 15 ? 'var(--status-active)' : pg === 16 ? 'var(--accent-gold)' : 'var(--border-bright)'};flex-shrink:0;margin-top:4px"></span>
            </div>
          `).join('')}
        </div>

        <div style="padding:10px;border-top:1px solid var(--border-base)">
          <div style="font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:0.6px;color:var(--text-dim);margin-bottom:8px">Page 16 Notes</div>
          <div class="form-group"><label class="form-label">Page Purpose</label>
            <textarea class="form-textarea" style="min-height:55px">Descend into catacombs. Establish threat through environment. End with Maya's touch.</textarea>
          </div>
          <div class="form-group"><label class="form-label">Pacing</label>
            <select class="form-select"><option>Atmospheric / Slow build</option></select>
          </div>
          <div class="form-group"><label class="form-label">Page Turn Impact</label>
            <select class="form-select"><option>High — cliffhanger ending</option></select>
          </div>
          <div class="form-group"><label class="form-label">Panel Count</label>
            <div style="display:flex;gap:4px">
              <button class="btn btn-ghost btn-xs" style="width:28px">−</button>
              <input class="form-input" value="3" style="text-align:center;width:40px;font-family:var(--font-mono)"/>
              <button class="btn btn-ghost btn-xs" style="width:28px">+</button>
            </div>
          </div>
        </div>
      </div>

      <!-- Center Canvas -->
      <div class="page-comp-canvas">
        <div style="font-size:11px;color:var(--text-muted);margin-bottom:12px;text-align:center">Page 16 · Scene 4.5a: Into the Catacombs</div>

        <!-- Comic Page Canvas -->
        <div class="comic-page-canvas" style="width:380px;min-height:520px">

          <!-- Panel 1: Large establishing shot (top) -->
          <div class="comic-panel-slot selected" style="left:8px;top:8px;right:8px;height:200px">
            <div class="panel-num">1</div>
            <div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center">
              <svg viewBox="0 0 364 184" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:100%">
                <rect width="364" height="184" fill="#0a0805"/>
                <path d="M80 184 L80 80 Q182 20 284 80 L284 184" fill="none" stroke="#2a1f0f" stroke-width="24"/>
                <path d="M100 184 L100 90 Q182 38 264 90 L264 184" fill="#130d06"/>
                <radialGradient id="tg2" cx="50%" cy="50%" r="35%">
                  <stop offset="0%" stop-color="#e8a84c" stop-opacity="0.45"/>
                  <stop offset="100%" stop-color="transparent" stop-opacity="0"/>
                </radialGradient>
                <ellipse cx="182" cy="100" rx="100" ry="70" fill="url(#tg2)"/>
                <circle cx="170" cy="95" r="12" fill="#1a1a2e"/>
                <circle cx="200" cy="95" r="10" fill="#1a0a0a"/>
                <line x1="178" y1="95" x2="192" y2="78" stroke="#2a1a0a" stroke-width="3"/>
                <ellipse cx="192" cy="73" rx="5" ry="7" fill="#e8a84c" opacity="0.8"/>
                <text x="182" y="175" text-anchor="middle" fill="#3a2a10" font-size="8" font-family="Inter,sans-serif">PANEL 1 — ESTABLISHING</text>
              </svg>
            </div>
          </div>

          <!-- Panel 2: Character close-up (bottom left) -->
          <div class="comic-panel-slot" style="left:8px;top:216px;width:176px;bottom:8px">
            <div class="panel-num">2</div>
            <div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:11px;color:#444;text-align:center;padding:8px">
              PANEL 2<br/>John — close<br/>looking back
            </div>
          </div>

          <!-- Panel 3: Symbol + touch (bottom right) -->
          <div class="comic-panel-slot" style="right:8px;top:216px;left:192px;bottom:8px">
            <div class="panel-num">3</div>
            <div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:11px;color:#444;text-align:center;padding:8px">
              PANEL 3<br/>Maya's hand<br/>on carved wall
            </div>
          </div>
        </div>

        <div style="display:flex;gap:8px;margin-top:12px;justify-content:center">
          <button class="btn btn-ghost btn-sm"><i class="fa-solid fa-grid-2"></i> Layout Options</button>
          <button class="btn btn-secondary btn-sm"><i class="fa-solid fa-code-compare"></i> Compare</button>
          <button class="btn btn-gold btn-sm"><i class="fa-solid fa-lock"></i> Lock Layout</button>
        </div>
      </div>

      <!-- Right Sidebar: Selected Panel Detail -->
      <div class="page-comp-sidebar-right">
        <div style="padding:10px 10px 0;font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:0.6px;color:var(--accent-blue)">
          Panel 1 — Selected
        </div>
        <div style="padding:10px">
          <div class="form-group"><label class="form-label">Shot Type</label>
            <select class="form-select"><option>Wide establishing shot</option></select>
          </div>
          <div class="form-group"><label class="form-label">Camera Angle</label>
            <select class="form-select"><option>Eye level — mid-depth</option></select>
          </div>
          <div class="form-group"><label class="form-label">Framing Notes</label>
            <textarea class="form-textarea" style="min-height:55px">Arch framing foreground, two figures silhouetted, torch as the only warm light source. Heavy shadow on periphery.</textarea>
          </div>
          <div class="form-group"><label class="form-label">Dialogue</label>
            <textarea class="form-textarea" style="min-height:40px">MAYA: (whisper) "We need to find the chamber before they do."</textarea>
          </div>
          <div class="form-group"><label class="form-label">Caption</label>
            <input class="form-input" placeholder="No caption for this panel" />
          </div>
          <div class="form-group"><label class="form-label">SFX</label>
            <input class="form-input" value="*drip* — distant echo" />
          </div>
          <div class="form-group"><label class="form-label">Continuity Reminder</label>
            <div class="inline-alert warn" style="font-size:10px;margin-bottom:0">
              <i class="fa-solid fa-triangle-exclamation"></i>
              <span>New torch — not from Scene 3</span>
            </div>
          </div>
          <div class="form-group"><label class="form-label">Visual Variants</label>
            <div class="panel-drop-zone">+ Assign visual reference</div>
          </div>
          <button class="btn btn-primary btn-sm" style="width:100%"><i class="fa-solid fa-lock"></i> Lock Panel</button>
        </div>
      </div>

      <!-- Bottom Strip -->
      <div class="page-comp-bottom" style="grid-column:1/4">
        <div style="font-size:10px;color:var(--text-dim);margin-right:8px;white-space:nowrap">Issue 4 pages:</div>
        ${Array.from({length:30}, (_,i) => i+1).map(pg => `
          <div class="page-thumb-mini ${pg === 16 ? 'active' : ''}">${pg}</div>
        `).join('')}
        <div style="margin-left:auto;display:flex;gap:6px;flex-shrink:0">
          <button class="btn btn-ghost btn-sm"><i class="fa-solid fa-file-export"></i> Export Page</button>
          <button class="btn btn-secondary btn-sm"><i class="fa-solid fa-copy"></i> Duplicate</button>
        </div>
      </div>

    </div>
  `;
}

/* ════════════════════════════════════════ AGENT CONSOLE ═════ */
function renderAgents() {
  const el = document.getElementById('agents-content');
  const agents = JP_DATA.agents;

  const avatarClasses = { 'a001': 'director', 'a002': 'keeper', 'a003': 'writer', 'a004': 'editor' };
  const avatarIcons = { 'a001': 'fa-compass-drafting', 'a002': 'fa-scroll', 'a003': 'fa-pen-nib', 'a004': 'fa-shield-check' };
  const statusClasses = { 'active': 'status-active', 'reviewing': 'status-reviewing', 'drafting': 'status-drafting', 'needs-input': 'status-input' };
  const statusLabels = { 'active': 'Active', 'reviewing': 'Reviewing', 'drafting': 'Drafting', 'needs-input': 'Needs Input' };

  el.innerHTML = `
    <!-- Stats Row -->
    <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:12px;margin-bottom:20px">
      <div class="stat-box"><div class="stat-value" style="color:var(--status-active)">3</div><div class="stat-label">Active Agents</div></div>
      <div class="stat-box"><div class="stat-value" style="color:var(--accent-gold)">1</div><div class="stat-label">Need Input</div></div>
      <div class="stat-box"><div class="stat-value" style="color:var(--accent-red)">3</div><div class="stat-label">Total Warnings</div></div>
      <div class="stat-box"><div class="stat-value">18</div><div class="stat-label">Tasks Today</div></div>
    </div>

    <!-- Agent Cards -->
    <div style="display:grid;grid-template-columns:repeat(2,1fr);gap:16px;margin-bottom:24px">
      ${agents.map(a => `
        <div class="panel-card" style="margin:0">
          <div class="panel-header" style="background:var(--bg-panel-alt)">
            <span class="panel-title">
              <i class="fa-solid ${avatarIcons[a.id]}"></i>
              ${a.name}
            </span>
            <div style="display:flex;align-items:center;gap:6px">
              <span class="agent-status-badge ${statusClasses[a.status]}">${statusLabels[a.status]}</span>
              ${a.warnings > 0 ? `<span class="tab-badge danger">${a.warnings}</span>` : ''}
            </div>
          </div>
          <div class="panel-body">
            <div style="font-size:11px;color:var(--text-muted);margin-bottom:10px;font-style:italic">${a.role}</div>
            <div style="margin-bottom:8px">
              <div class="form-label" style="margin-bottom:4px">Current Task</div>
              <div style="font-size:11.5px;color:var(--text-secondary)">${a.currentTask}</div>
            </div>
            <div>
              <div class="form-label" style="margin-bottom:4px">Last Output</div>
              <div style="font-size:11.5px;color:var(--text-secondary);line-height:1.5;background:var(--bg-input);padding:8px;border-radius:var(--r-sm);border:1px solid var(--border-subtle)">${a.lastOutput}</div>
            </div>
            <div style="display:flex;gap:6px;margin-top:10px">
              <button class="btn btn-secondary btn-sm">Open Chat</button>
              <button class="btn btn-ghost btn-sm"><i class="fa-solid fa-rotate"></i> Rerun</button>
              ${a.warnings > 0 ? `<button class="btn btn-danger btn-sm"><i class="fa-solid fa-triangle-exclamation"></i> Review Warnings</button>` : `<button class="btn btn-ghost btn-sm"><i class="fa-solid fa-check"></i> Accept Output</button>`}
            </div>
          </div>
        </div>
      `).join('')}
    </div>

    <!-- Add Future Agents -->
    <div class="panel-card" style="margin:0 0 16px">
      <div class="panel-header">
        <span class="panel-title"><i class="fa-solid fa-robot"></i> Agent Expansion Slots</span>
      </div>
      <div class="panel-body">
        <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:12px">
          ${['Recap Engine', 'Thread Tracker', 'Dialogue Polisher', 'Page Rhythm Advisor', 'Lore Archivist', 'Visual Continuity Analyst', 'Cliffhanger Consultant', 'Prop Tracker'].map(name => `
            <div style="background:var(--bg-panel-alt);border:1px dashed var(--border-bright);border-radius:var(--r-md);padding:12px;text-align:center;cursor:pointer;transition:all 0.15s;opacity:0.6"
              onmouseover="this.style.opacity='0.9';this.style.borderColor='var(--accent-blue)'"
              onmouseout="this.style.opacity='0.6';this.style.borderColor='var(--border-bright)'">
              <i class="fa-solid fa-plus" style="font-size:16px;color:var(--text-dim);margin-bottom:6px;display:block"></i>
              <div style="font-size:11px;font-weight:600;color:var(--text-muted)">${name}</div>
              <div style="font-size:10px;color:var(--text-dim);margin-top:2px">Not yet active</div>
            </div>
          `).join('')}
        </div>
      </div>
    </div>

    <!-- Shared Chat -->
    <div class="panel-card" style="margin:0">
      <div class="panel-header">
        <span class="panel-title"><i class="fa-solid fa-comments"></i> Agent Communication</span>
        <select style="background:var(--bg-input);border:1px solid var(--border-base);border-radius:var(--r-sm);color:var(--text-muted);padding:3px 8px;font-size:11px;outline:none;font-family:var(--font-sans)">
          <option>→ Canon Keeper</option>
          <option>→ Story Director</option>
          <option>→ Scene Writer</option>
          <option>→ Continuity Editor</option>
        </select>
      </div>
      <div class="panel-body">
        <div style="background:var(--bg-input);border:1px solid var(--border-subtle);border-radius:var(--r-sm);padding:10px;margin-bottom:8px;height:100px;overflow-y:auto">
          <div class="chat-msg"><span class="chat-msg-time">11:05</span><span class="chat-msg-who">Canon Keeper:</span><span class="chat-msg-text">Stone relic origin confirmed: Druid-built 400 yrs prior. Symbol carving canon matches Issue 1 visual ref.</span></div>
          <div class="chat-msg"><span class="chat-msg-time">11:07</span><span class="chat-msg-who user">You:</span><span class="chat-msg-text">Has the stone relic been described as glowing in any prior issue?</span></div>
          <div class="chat-msg"><span class="chat-msg-time">11:08</span><span class="chat-msg-who">Canon Keeper:</span><span class="chat-msg-text">No. The relic has not been described as luminous. It has been described as resonant (sound), warm to specific touch, and generating a hum. Never glowing. Recommend avoiding light-emission language for visual consistency.</span></div>
        </div>
        <div style="display:flex;gap:8px">
          <input class="chat-input" placeholder="Ask an agent about your story…" id="agentChatInput"/>
          <button class="chat-send-btn" onclick="sendAgentMessage()"><i class="fa-solid fa-paper-plane"></i></button>
        </div>
      </div>
    </div>
  `;
}

/* ── Utility: Chat send ────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  const chatInput = document.getElementById('chatInput');
  const chatSendBtn = document.getElementById('chatSendBtn');
  const chatLog = document.querySelector('.chat-log');

  if (chatSendBtn && chatInput) {
    chatSendBtn.addEventListener('click', () => sendChatMsg());
    chatInput.addEventListener('keydown', e => { if (e.key === 'Enter') sendChatMsg(); });
  }

  function sendChatMsg() {
    const val = chatInput.value.trim();
    if (!val) return;
    const time = new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false });
    const msg = document.createElement('div');
    msg.className = 'chat-msg';
    msg.innerHTML = `<span class="chat-msg-time">${time}</span><span class="chat-msg-who user">You:</span><span class="chat-msg-text">${val}</span>`;
    chatLog.appendChild(msg);
    chatLog.scrollTop = chatLog.scrollHeight;
    chatInput.value = '';

    // Simulate response
    setTimeout(() => {
      const resp = document.createElement('div');
      resp.className = 'chat-msg';
      const agentResp = getAgentResponse(val);
      resp.innerHTML = `<span class="chat-msg-time">${time}</span><span class="chat-msg-who">Canon Keeper:</span><span class="chat-msg-text">${agentResp}</span>`;
      chatLog.appendChild(resp);
      chatLog.scrollTop = chatLog.scrollHeight;
    }, 900);
  }
});

function sendAgentMessage() {
  const input = document.getElementById('agentChatInput');
  if (!input || !input.value.trim()) return;
  alert('Agent response: ' + getAgentResponse(input.value));
  input.value = '';
}

function getAgentResponse(query) {
  const q = query.toLowerCase();
  if (q.includes('relic') && q.includes('glow')) return 'No. The relic has not been described as luminous in any prior canon. It resonates (sound), produces warmth on contact, and generates a subtle hum. Recommend avoiding light-emission language.';
  if (q.includes('torch')) return 'Torch continuity flag is active. John\'s torch from Scene 3 was extinguished on Page 9. The current torch must be a different one. Recommend adding a brief acknowledgment panel.';
  if (q.includes('maya') && q.includes('wrist')) return 'Maya\'s wrist mark is established canon (Issue 2, Pg 8). John has not noticed it. No other character has referenced it on-page. The reveal is locked until Issue 6+.';
  if (q.includes('voss') || q.includes('elder')) return 'Elder Voss\'s public identity must remain clean until Issue 6. No scene should place him in the Catacombs before that reveal. His private study appearance is canon from Issue 3.';
  return 'Noted. Cross-referencing against established canon. No contradiction found in current checked entries. Recommend confirming with Timeline record before proceeding.';
}

/* ── Filter Chips Interactive ──────────────────────────────── */
document.addEventListener('click', e => {
  if (e.target.classList.contains('filter-chip')) {
    const group = e.target.closest('.filter-chips');
    if (group) {
      group.querySelectorAll('.filter-chip').forEach(c => c.classList.remove('active'));
      e.target.classList.add('active');
    }
  }
});

/* ── Rail Buttons ──────────────────────────────────────────── */
document.querySelectorAll('.rail-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.rail-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
  });
});
