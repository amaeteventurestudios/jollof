# Jollof Pages — Graphic Novel Story OS

> A creator-first, graphic-novel-native, continuity-aware, visual-aware, panel-aware operating system for building and executing a complex graphic novel universe without losing the thread.

---

## Product Overview

**Jollof Pages** is a premium, full-width, desktop-first web application that functions as a complete Graphic Novel Story Operating System. It supports the entire workflow from initial concept and framework design, through character creation, worldbuilding, factions, timeline, lore wiki, issue planning, sequence planning, scene drafting, page planning, panel planning, visual continuity, agent support, and page composition.

**Author:** Amaete Umanah  
**Version:** 1.0  
**Tech Stack:** Pure HTML5 + CSS3 + Vanilla JavaScript (no frameworks, no dependencies beyond CDN fonts/icons)

---

## Completed Features

### ✅ Story Dashboard (Default View)
- Full-width, multi-column operational layout
- Top global context bar with series → book → issue → sequence → scene → page breadcrumb
- Left planning column with Sequence Overview, Objective Lore, Director's Notes, Scene Draft Setup, Activity Log
- Center execution column with large Scene Draft editor and Scene Visualization panel (SVG-rendered catacomb scene)
- Right continuity column with Continuity Warnings, Active Threads, Characters in Scene, Visual Continuity thumbnails, Costume Consistency, Prop Consistency
- Agents Console with 4 active agents (Story Director, Canon Keeper, Scene Writer, Continuity Editor) — each with status, task, last output, and action buttons
- Live agent chat strip with selector and simulated response engine

### ✅ Series Setup Tab
- 3-column layout: Project Identity / Story Architecture / Visual Rules
- All fields: title, subtitle, tagline, code, genre, tone, audience, structure, framework, premise, core conflict, themes, rules
- Volume/issue planning stats
- Color mood palette preview
- Narrative rules and visual direction panels

### ✅ Characters Tab
- Filter chips by role and status
- Stats row (total, protagonists, antagonists, supporting)
- Character card grid with avatar, bio excerpt, wound, arc, faction tags, issue appearances
- SVG Relationship Graph showing John, Maya, Dorin, Seraph Nox, Elder Voss with relationship lines

### ✅ World Tab
- Location cards with icon, type, atmosphere, status, linked scenes
- World metadata fields (setting summary, technology, class structure)
- SVG Zone Control Map showing city layout vs. underground catacomb layer

### ✅ Factions Tab
- Faction cards with emblem, public/private identity, ideology, leadership, method
- Hidden agenda alerts (orange inline warning)
- Linked characters and locations shown as tags
- SVG Faction Power Map showing Cult vs. Order vs. SF-9 opposition lines

### ✅ Timeline Tab
- Chronological event track with visual timeline markers
- Color-coded events: key (gold dot), reveal (red dot), hidden (purple dot)
- Hidden truth panels with purple highlighted callout
- Reveal status tags
- Timeline stats, reveal logic gates panel
- Quick event add form

### ✅ Canon Wiki Tab
- Wiki entry cards with title, type badge, status badge, summary, continuity note
- Cross-linked characters and factions shown as tags
- Wiki stats panel (entries by type)
- Unresolved questions panel
- Broken canon links error panel (missing character/prop records)

### ✅ Story Planning Tab
- Full issue map with status, key reveal, cliffhanger for each issue
- Character Arc Tracker with progress bars
- Setup/Payoff tracker with color-coded items
- Open Mystery Map with layered reveals

### ✅ Scene / Page / Panel Builder Tab
- Left scene list with status indicators for all Issue 4 scenes
- Scene Mode: full detail form including objective, changes, action beats, characters, location, conflict, emotion, estimates, continuity flags
- Page Mode + Panel Mode switcher buttons
- Panel count and page pacing controls

### ✅ Visual Continuity Tab
- Reference card grid with emoji-icon previews
- Approved/draft status on each card
- Visual Drift Alerts with specific issue/page/panel callouts
- Color Mood Continuity chart (warm vs. cool temperature per scene)

### ✅ Page Composition Tab
- Left sidebar: issue page list with status dots
- Center canvas: actual comic page layout with panel slots (SVG catacomb scene in Panel 1)
- Right sidebar: selected panel detail (shot type, angle, framing, dialogue, caption, SFX, continuity reminder)
- Bottom strip: full page thumbnail row for Issue 4 (pages 1–30)
- Lock layout, export, compare layout buttons

### ✅ Agent Console Tab
- Full expanded view of all 4 agents with last output in code-block style
- Agent expansion slots (8 future agents shown as dashed-border placeholders)
- Shared agent chat with simulated response engine
- Warning count badges per agent

---

## Sample Story Data

The application is fully populated with the sample story: **The Shadow Chronicles**

- **5 characters** (John Walker, Maya Reed, Elder Voss, Seraph Nox, Dorin Fell)
- **4 locations** (Thornwall Catacombs, City Archive, Sealed Chamber, Voss's Study)
- **3 factions** (Cult of the Sealed Eye, Order of the Sealed Circle, SF-9)
- **6 timeline events** spanning ancient history to story present
- **5 canon wiki entries**
- **5 planned/complete issues** (Issues 1–5)
- **6 visual reference records**
- **4 active agents**

---

## Navigation Entry Points

| URL / Tab | Description |
|---|---|
| `index.html` | Loads Story Dashboard by default |
| Tab: **Story Dashboard** | Central operational view — scene drafting, visualization, agents, continuity |
| Tab: **Series Setup** | Project identity, story architecture, visual rules |
| Tab: **Characters** | All characters, bios, arcs, relationship graph |
| Tab: **World** | Locations, geography, world map |
| Tab: **Factions** | Organizations, power map |
| Tab: **Timeline** | Chronological event engine |
| Tab: **Canon Wiki** | Lore index, approved facts |
| Tab: **Story Planning** | Issue map, arc tracker, setup/payoff tracker |
| Tab: **Scene · Page · Panel** | Sequential art planning environment |
| Tab: **Visual Continuity** | Reference gallery, drift alerts, color mood |
| Tab: **Page Composition** | Comic page canvas assembly |
| Tab: **Agent Console** | Full agent management and communication |

---

## Features Not Yet Implemented (Recommended Next Steps)

### Data Persistence
- Wire all forms to the RESTful Table API to save characters, factions, timeline events, wiki entries, and scene drafts
- Implement project state saving with auto-save on form changes

### Character Detail Drawer
- Clicking a character card should open a slide-in drawer with the full character sheet (all fields: knowledge state, visual design, appearance history)

### Real Agent Integration
- Connect the 4 agents to an AI backend for real creative assistance
- Implement the Recap Engine and Thread Tracker as additional agents

### Panel Image Assignment
- Allow dragging visual reference images into comic panel slots in the Page Composition view

### Export System
- Scene script export to PDF/TXT
- Page composition export to image
- Full project export as structured JSON packet

### Visual Generation
- Hook "Generate Visual" buttons to an image generation API

### Live Continuity Engine
- Build the continuity checker as a real-time system that analyzes the scene draft textarea and flags issues automatically

### Search & Cross-linking
- Implement the Canon Wiki universal search across all entity types
- Entity auto-linking when character/location names appear in scene drafts

### Multi-project Support
- Project switcher to manage multiple graphic novel universes from one workspace

---

## Design System

The application uses a custom dark design system built entirely in CSS custom properties:

- **Primary background:** `#0d0f14`
- **Panel background:** `#161921`
- **Card background:** `#1e2230`
- **Accent blue:** `#527cff`
- **Accent gold:** `#e8a84c` (torchlight — primary accent for warnings and canon)
- **Accent red:** `#e05555` (continuity errors, danger)
- **Accent teal:** `#3ab0c4` (threads, linked entities)
- **Typography:** Inter (UI) + JetBrains Mono (code/timestamps)
