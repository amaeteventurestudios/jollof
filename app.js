const workspaces = [
  'Series Setup',
  'Characters',
  'World',
  'Factions',
  'Timeline',
  'Canon Wiki',
  'Story Planning',
  'Scene / Page / Panel Builder',
  'Story Dashboard',
  'Visual Continuity',
  'Page Composition',
  'Agent Console',
  'Exports / Tooling / Project Utilities'
];

const tabsEl = document.getElementById('workspaceTabs');
const container = document.getElementById('workspaceContainer');

function shell(title, content) {
  return `<section class="workspace-screen" data-screen="${title}"><div class="panel"><h2>${title}</h2><p>${subtitle(title)}</p></div>${content}</section>`;
}

function subtitle(title) {
  const map = {
    'Series Setup': 'Project initialization, naming, structural framework, narrative rules, and visual direction.',
    Characters: 'Character command center with linked roles, arcs, knowledge states, and visual specs.',
    World: 'Worldbuilding matrix for locations, systems, culture, atmosphere, and environmental continuity.',
    Factions: 'Organizations, institutions, power structures, and conflict webs tied into scenes and canon.',
    Timeline: 'Chronology engine for reveal logic, contradiction checks, and event dependency control.',
    'Canon Wiki': 'Structured lore index, source-of-truth entries, broken-link checks, and revision tracking.',
    'Story Planning': 'Series > volume > issue > sequence strategy and setup/payoff intelligence.',
    'Scene / Page / Panel Builder': 'Execution planner connecting scene goals to page pacing and panel framing.',
    'Story Dashboard': 'Mission-control drafting workspace for continuity-aware story execution.',
    'Visual Continuity': 'Visual memory system for approved references, color rhythm, motifs, and costume tracking.',
    'Page Composition': 'Page assembly studio for panel layout, image assignment, and reading-flow validation.',
    'Agent Console': 'Modular specialist agents for direction, canon, writing, and continuity review.',
    'Exports / Tooling / Project Utilities': 'Operational toolkit for exports, sync packets, audits, and project administration.'
  };
  return map[title];
}

function genericCards(title) {
  return `<div class="screen-grid three-col" style="margin-top:12px">
    <section class="panel"><h3>Linked Story System</h3><p>All records in ${title} are linked to shared entities: characters, locations, factions, events, scenes, pages, panels, and canon state.</p></section>
    <section class="panel"><h3>Active Filters</h3><p>Role, issue presence, arc stage, reveal status, continuity risk, and linked thread filters available.</p></section>
    <section class="panel"><h3>Connected Workflow</h3><p>Updates here flow into recap memory, forward memory, continuity checks, and page composition.</p></section>
  </div>`;
}

const content = {
  'Series Setup': shell('Series Setup', `
    <div class="screen-grid three-col" style="margin-top:12px">
      <section class="panel"><h3>Project Identity</h3><div class="field">Series Title: The Shadow Chronicles</div><div class="field">Volume: Book 1 — Echoes Beneath</div><div class="field">Issue: #4 Into the Catacombs</div><div class="field">Project Code: JP-SC-B1-I4</div><div class="field">Genre: Supernatural Mystery Thriller</div></section>
      <section class="panel"><h3>Narrative Framework</h3><div class="field">Story Structure: 5-issue arc with reveal ladders</div><div class="field">Perspective: Dual focus (John / Maya)</div><div class="field">Story Promise: Myth + conspiracy + emotional fracture</div><div class="field">Core Conflict: Humanity vs the Veil breach</div><div class="field">Pacing model: escalation with hard page-turn hooks</div></section>
      <section class="panel"><h3>Visual & Rule System</h3><div class="field">Visual rules: low-light, ritual symbols, no direct Veil depiction</div><div class="field">Narrative rules: no lore revelation without scene consequence</div><div class="field">Forbidden elements: comedic undercut in ritual scenes</div><div class="field">Naming conventions: archaic artifacts + contemporary aliases</div><div class="field">Issue target: 30 pages / issue</div></section>
    </div>
    ${genericCards('Series Setup')}
  `),
  Characters: shell('Characters', `
    <div class="screen-grid two-col" style="margin-top:12px">
      <section class="panel"><h3>Character Registry</h3><div class="card-list">
        <article class="card"><strong>John Walker</strong> — Protagonist | Wound: mission failure | Desire: survive truth | Knowledge: suspects cult symbol recurrence.</article>
        <article class="card"><strong>Maya Reed</strong> — Protagonist / Relic Ally | Secret bloodline | Gesture motif: thumb rub on satchel strap.</article>
        <article class="card"><strong>Elder Voss</strong> — Antagonist | Public identity vs private cult role.</article>
      </div></section>
      <section class="panel"><h3>Relationship Graph + Knowledge State</h3><p>Allies, enemies, lies, truths, hidden motives, and public/secret identities mapped to timeline and scene exposure gates.</p><ul><li>John ↔ Maya: trust under pressure</li><li>Maya ↔ Voss: hidden bloodline tie</li><li>John ↔ Voss: unknown prior mission overlap</li></ul></section>
    </div>
    ${genericCards('Characters')}
  `),
  World: shell('World', `
    <div class="screen-grid two-col" style="margin-top:12px">
      <section class="panel"><h3>Location Matrix</h3><ul><li>Thornwall Catacombs (Underground / Ritual Space)</li><li>City Archive — Sub-Basement B (Institutional)</li><li>Voss Study (Private / Hidden Operations)</li></ul><p>Each location includes atmosphere, sensory profile, architecture, control, hazards, recurring motifs, and linked scene/page usage.</p></section>
      <section class="panel"><h3>Macro Rules</h3><ul><li>Class structure: civic order above, occult conflict below.</li><li>Tech level: contemporary with ritual interference.</li><li>Cultural law: sacred symbols illegal in public zones.</li></ul></section>
    </div>
    ${genericCards('World')}
  `),
  Factions: shell('Factions', `
    <div class="screen-grid three-col" style="margin-top:12px">
      <section class="panel"><h3>Cult of the Sealed Eye</h3><p>Mission: preserve veil breach leverage. Public front: academic society.</p></section>
      <section class="panel"><h3>Order of the Sealed Circle</h3><p>Mission: contain relic, protect bloodline, defer revelation until viable succession.</p></section>
      <section class="panel"><h3>Special Forces Unit 9</h3><p>Defunct black-unit with hidden links to John and early relic encounters.</p></section>
    </div>
    ${genericCards('Factions')}
  `),
  Timeline: shell('Timeline', `
    <div class="screen-grid two-col" style="margin-top:12px">
      <section class="panel"><h3>Chronology</h3><div class="card-list">
        <article class="card">-620 CE: First Circle seals relic in chamber (hidden truth).</article>
        <article class="card">1687: Catacomb collapse blocks direct access.</article>
        <article class="card">Issue 1: John + Maya first encounter.</article>
        <article class="card">Issue 4: Maya touches live symbol in catacombs.</article>
      </div></section>
      <section class="panel"><h3>Reveal Logic Gates</h3><ul><li>John cannot know Maya wrist-mark origin before Issue 6.</li><li>Sealed Chamber interior locked until Issue 5 page-turn.</li><li>Voss motive locked until Issue 7.</li></ul></section>
    </div>
    ${genericCards('Timeline')}
  `),
  'Canon Wiki': shell('Canon Wiki', `
    <div class="screen-grid two-col" style="margin-top:12px">
      <section class="panel"><h3>Approved Canon Entries</h3><ul><li>The Binding Relic (Object) — Approved</li><li>The Veil (Lore) — Approved</li><li>Druid Spiral Script (Symbol) — Approved</li><li>Elder Voss Public Record (Character/Public)</li></ul></section>
      <section class="panel"><h3>Canon Integrity</h3><ul><li>Broken link: "First Keeper" appears in Event #1 without character record.</li><li>Prop mismatch: Spiral Key referenced Scene 3b without object entry.</li><li>Unresolved: What happened to Dorin's hidden reports?</li></ul></section>
    </div>
    ${genericCards('Canon Wiki')}
  `),
  'Story Planning': shell('Story Planning', `
    <div class="screen-grid two-col" style="margin-top:12px">
      <section class="panel"><h3>Issue Ladder</h3><div class="card-list">
        <article class="card">Issue 1 — mystery hook and cast setup</article>
        <article class="card">Issue 2 — archive descent + betrayal hints</article>
        <article class="card">Issue 3 — world reveal + antagonist face</article>
        <article class="card">Issue 4 — active draft, catacomb escalation</article>
      </div></section>
      <section class="panel"><h3>Tracker Stack</h3><ul><li>Setup/Payoff tracker</li><li>Character arc tracker</li><li>Mystery map</li><li>Cliffhanger planner</li><li>Thread status board</li></ul></section>
    </div>
    ${genericCards('Story Planning')}
  `),
  'Scene / Page / Panel Builder': shell('Scene / Page / Panel Builder', `
    <div class="screen-grid two-col" style="margin-top:12px">
      <section class="panel"><h3>Scene Mode</h3><ul><li>Objective: descend and trigger first active resonance.</li><li>Characters: John, Maya</li><li>Conflict: environmental + unseen pursuit</li><li>Linked props: torch, satchel, journal</li><li>Continuity risks: torch replacement, satchel side</li></ul></section>
      <section class="panel"><h3>Page / Panel Mode</h3><ul><li>Page 16: reveal-position page-turn importance high.</li><li>Panel rhythm: 5 panels, widening to narrow close-up.</li><li>Camera: overhead establish → shoulder track → symbol close.</li><li>Dialogue density: medium, caption density: low.</li></ul></section>
    </div>
    <div class="flow-line">Scenes lead to pages → pages lead to panels → approved panel visuals feed Page Composition and Visual Continuity.</div>
    ${genericCards('Scene / Page / Panel Builder')}
  `),
  'Story Dashboard': document.getElementById('storyDashboardTemplate').innerHTML,
  'Visual Continuity': shell('Visual Continuity', `
    <div class="screen-grid two-col" style="margin-top:12px">
      <section class="panel"><h3>Approved Visual Memory</h3><div class="card-list"><article class="card">Catacomb Passage Establishing — Approved</article><article class="card">John Full Costume Ref — Approved</article><article class="card">Maya Satchel and Journal — Approved</article><article class="card">Druid Spiral Script Canon v2 — Approved</article></div></section>
      <section class="panel"><h3>Drift Alerts + Color Continuity</h3><ul><li>John coat appears lighter in Issue 3 panel 4.</li><li>Spiral orientation mismatch in Issue 2 page 17.</li><li>Maya journal color not canonized after damage state update.</li></ul><p>Warm/cool ratios tracked per scene to preserve issue tone rhythm.</p></section>
    </div>
    ${genericCards('Visual Continuity')}
  `),
  'Page Composition': shell('Page Composition', `
    <div class="screen-grid" style="grid-template-columns:260px 1fr 300px; margin-top:12px">
      <section class="panel"><h3>Page Navigator</h3><ul><li>Issue 4 / Page 16 (active)</li><li>Purpose: suspense reveal gate</li><li>Panel count: 5</li><li>Pacing: escalating claustrophobia</li></ul></section>
      <section class="panel"><h3>Composition Canvas</h3><div class="page-canvas"><div class="panel-block p1">Panel 1 / Establishing</div><div class="panel-block p2">Panel 2 / Tunnel advance</div><div class="panel-block p3">Panel 3 / John's reaction</div><div class="panel-block p4">Panel 4 / Maya touches symbol</div><div class="panel-block p5">Panel 5 / Torch flicker hook</div></div><div class="action-row"><button>Add Panel</button><button>Rearrange</button><button>Assign Image</button><button>Compare Layouts</button><button>Preview Reading Flow</button></div></section>
      <section class="panel"><h3>Selected Panel Inspector</h3><ul><li>Shot: close-up</li><li>Angle: low, right-side torch key light</li><li>Dialogue: "It moved..."</li><li>SFX: tkkk</li><li>Continuity reminder: satchel left shoulder</li></ul></section>
    </div>
    <div class="flow-line">Approved scene visuals can be locked to panel slots. Final page composition feeds export packets and canon memory updates.</div>
  `),
  'Agent Console': shell('Agent Console', `
    <div class="screen-grid three-col" style="margin-top:12px">
      <section class="panel"><h3>Story Director</h3><p>Translates creator intent into structured issue/scene/page goals.</p></section>
      <section class="panel"><h3>Canon Keeper</h3><p>Protects established truth and cross-entity consistency.</p></section>
      <section class="panel"><h3>Scene Writer</h3><p>Generates draft language aligned to approved briefs.</p></section>
    </div>
    <div class="screen-grid two-col" style="margin-top:12px">
      <section class="panel"><h3>Continuity Editor</h3><p>Checks timeline, knowledge logic, setup/payoff, visual state drift.</p></section>
      <section class="panel"><h3>Expandability</h3><p>Future cards: Recap Engine, Thread Tracker, Visual Continuity Analyst, Dialogue Polisher, Page Rhythm Advisor.</p></section>
    </div>
    ${genericCards('Agent Console')}
  `),
  'Exports / Tooling / Project Utilities': shell('Exports / Tooling / Project Utilities', `
    <div class="screen-grid three-col" style="margin-top:12px">
      <section class="panel"><h3>Export Packets</h3><ul><li>Scene script export</li><li>Issue briefing export</li><li>Page composition export</li><li>Visual reference bundle</li></ul></section>
      <section class="panel"><h3>Continuity Audits</h3><ul><li>Narrative contradiction scan</li><li>Knowledge gate scan</li><li>Timeline dependency scan</li><li>Visual drift scan</li></ul></section>
      <section class="panel"><h3>Project Utilities</h3><ul><li>Archive issue</li><li>Duplicate project branch</li><li>Recap/forward memory rebuild</li><li>Import structured entity records</li></ul></section>
    </div>
    ${genericCards('Exports / Tooling / Project Utilities')}
  `)
};

container.innerHTML = workspaces.map((w) => content[w]).join('');
const screens = [...container.querySelectorAll('.workspace-screen')];

workspaces.forEach((name, index) => {
  const btn = document.createElement('button');
  btn.textContent = name;
  if (name === 'Story Dashboard') btn.classList.add('active');
  btn.addEventListener('click', () => {
    document.querySelectorAll('.top-tabs button').forEach((b) => b.classList.remove('active'));
    btn.classList.add('active');
    screens.forEach((screen) => screen.classList.toggle('active', screen.dataset.screen === name || (name === 'Story Dashboard' && !screen.dataset.screen)));
  });
  tabsEl.appendChild(btn);
  if (index === 8) {
    const screen = screens.find((s) => !s.dataset.screen);
    if (screen) screen.dataset.screen = 'Story Dashboard';
  }
});

screens.forEach((screen) => screen.classList.remove('active'));
const initial = screens.find((s) => s.dataset.screen === 'Story Dashboard');
if (initial) initial.classList.add('active');
