:root {
  --color-primary: #2F5233;
  --color-secondary: #8B5E3C;
  --color-accent: #E8B94A;
  --color-success: #7FB069;
  --color-dark: #1F2A20;
  --color-bg: #FAF7F2;
  --color-surface: #FFFFFF;
  --color-muted: #8A9088;
  --color-border: #E4DFD4;
  --shadow-soft: 0 8px 24px rgba(47, 82, 51, 0.08);
  --radius-card: 18px;
  --radius-button: 10px;
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 24px;
  --space-6: 32px;
  --space-7: 48px;
  --space-8: 64px;
}

* { box-sizing: border-box; }

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  font-family: 'Inter', 'Poppins', sans-serif;
  background: var(--color-bg);
  color: var(--color-dark);
  line-height: 1.6;
}

img { max-width: 100%; display: block; }
a { color: inherit; text-decoration: none; }
button, input, select, textarea { font: inherit; }

h1, h2, h3, h4 { font-family: 'Poppins', 'Noto Sans SC', sans-serif; margin: 0 0 var(--space-4); }

h1 { font-size: clamp(2rem, 3vw, 3rem); line-height: 1.1; }
h2 { font-size: clamp(1.5rem, 2.2vw, 2rem); }
h3 { font-size: 1.25rem; }

p { margin: 0 0 var(--space-4); }

.container {
  width: min(1120px, calc(100% - 32px));
  margin: 0 auto;
}

.section-sm { padding: var(--space-8) 0; }
.page-shell { padding: var(--space-8) 0; }

.site-header {
  position: sticky;
  top: 0;
  z-index: 40;
  background: rgba(250, 247, 242, 0.92);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid var(--color-border);
  padding-top: env(safe-area-inset-top, 0px);
}

.nav-wrap {
  height: 72px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-4);
}

.brand {
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
}

.brand-mark {
  width: 36px;
  height: 36px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  background: var(--color-primary);
  color: white;
  font-weight: 700;
}

.brand-text {
  display: flex;
  flex-direction: column;
  line-height: 1.1;
}

.brand-text strong { font-size: 1.1rem; }
.brand-text small { color: var(--color-muted); }

.nav {
  display: flex;
  align-items: center;
  gap: var(--space-5);
  font-weight: 500;
}

.nav a {
  color: var(--color-dark);
  opacity: 0.8;
  transition: color 150ms ease;
}

.nav a:hover, .nav a.active { color: var(--color-primary); }

.nav-actions {
  display: flex;
  align-items: center;
  gap: var(--space-3);
}

.language-switcher {
  display: inline-flex;
  border: 1px solid var(--color-border);
  border-radius: 999px;
  background: var(--color-surface);
  padding: 4px;
}

.lang-btn {
  border: none;
  background: transparent;
  padding: 6px 10px;
  border-radius: 999px;
  cursor: pointer;
  color: var(--color-muted);
}

.lang-btn.active {
  background: var(--color-primary);
  color: white;
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--radius-button);
  padding: 12px 18px;
  border: 1px solid transparent;
  font-weight: 600;
  transition: all 150ms ease;
  cursor: pointer;
}

.btn-primary {
  background: var(--color-primary);
  color: #fff;
}

.btn-primary:hover {
  background: #264328;
}

.btn-outline {
  background: transparent;
  border-color: var(--color-primary);
  color: var(--color-primary);
}

.btn-outline:hover {
  background: rgba(47, 82, 51, 0.08);
}

.btn-light {
  background: white;
  color: var(--color-primary);
}

.wide-btn { width: 100%; }

.menu-toggle {
  display: none;
  width: 40px;
  height: 40px;
  border: 1px solid var(--color-border);
  background: var(--color-surface);
  border-radius: 10px;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  cursor: pointer;
}

.menu-toggle span {
  display: block;
  width: 18px;
  height: 2px;
  background: var(--color-dark);
  margin: 0 auto;
}

.hero-grid {
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: var(--space-8);
  align-items: center;
}

.eyebrow {
  font-size: 0.8rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--color-primary);
  font-weight: 700;
}

.lead {
  font-size: 1.05rem;
  max-width: 42rem;
  color: var(--color-muted);
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-3);
  margin: var(--space-5) 0;
}

.meta-row {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-3);
}

.pill {
  display: inline-flex;
  align-items: center;
  gap: var(--space-1);
  border-radius: 999px;
  padding: 8px 12px;
  background: rgba(47, 82, 51, 0.06);
  color: var(--color-primary);
  font-weight: 600;
}

.visual-card {
  min-height: 420px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, rgba(47, 82, 51, 0.06), rgba(232, 185, 74, 0.14));
  border: 1px solid var(--color-border);
  box-shadow: var(--shadow-soft);
}

.mini-grid {
  display: grid;
  grid-template-columns: repeat(2, 120px);
  gap: 24px;
}

.mini-box {
  width: 120px;
  height: 120px;
  border-radius: 20px;
}

.mini-box.green { background: var(--color-primary); }
.mini-box.amber { background: var(--color-accent); }
.mini-box.dark { background: var(--color-dark); }
.mini-box.light { background: #dde6dc; }

.impact-glow {
  position: absolute;
  bottom: 32px;
  right: 32px;
  background: rgba(255,255,255,0.9);
  border-radius: 18px;
  padding: 16px 18px;
  box-shadow: var(--shadow-soft);
  display: flex;
  flex-direction: column;
}

.impact-text { font-size: 1.5rem; font-weight: 700; }

.card {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-card);
  box-shadow: var(--shadow-soft);
}

.section-heading {
  margin-bottom: var(--space-6);
}

.section-heading.center { text-align: center; }

.stats-grid, .testimonial-grid, .three-column, .four-column, .team-grid, .product-grid, .summary-grid { display: grid; gap: var(--space-5); }

.stats-grid { grid-template-columns: repeat(3, minmax(0, 1fr)); }
.testimonial-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
.three-column { grid-template-columns: repeat(3, minmax(0, 1fr)); }
.four-column { grid-template-columns: repeat(4, minmax(0, 1fr)); }
.team-grid { grid-template-columns: repeat(4, minmax(0, 1fr)); }
.product-grid { grid-template-columns: repeat(3, minmax(0, 1fr)); }
.summary-grid { grid-template-columns: repeat(4, minmax(0, 1fr)); }

.stat-card {
  padding: var(--space-5);
}

.stat-icon {
  width: 48px;
  height: 48px;
  border-radius: 14px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: rgba(47, 82, 51, 0.08);
  color: var(--color-primary);
  font-size: 1.4rem;
  margin-bottom: var(--space-3);
}

.stat-value {
  font-size: clamp(2rem, 2vw, 2.5rem);
  font-weight: 800;
  font-variant-numeric: tabular-nums;
}

.stat-label { color: var(--color-muted); }

.steps-grid {
  display: flex;
  align-items: stretch;
  justify-content: center;
  gap: var(--space-3);
  flex-wrap: wrap;
}

.step-card {
  flex: 1 1 180px;
  padding: var(--space-5);
  max-width: 220px;
  position: relative;
}

.step-icon {
  width: 42px;
  height: 42px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  background: rgba(232, 185, 74, 0.14);
  color: var(--color-primary);
  font-weight: 700;
  margin-bottom: var(--space-3);
}

.step-arrow {
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-primary);
  font-size: 2rem;
  font-weight: 700;
}

.testimonial-card {
  padding: var(--space-5);
}

.quote { font-style: italic; color: var(--color-dark); }

.person { display: flex; flex-direction: column; color: var(--color-muted); }

.cta-panel {
  background: var(--color-primary);
  color: white;
  border-radius: 20px;
  padding: var(--space-6);
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: var(--space-5);
}

.eyebrow.light { color: rgba(255,255,255,0.8); }

.site-footer {
  background: #EFF5EE;
  border-top: 1px solid var(--color-border);
  margin-top: var(--space-8);
}

.footer-grid {
  display: grid;
  grid-template-columns: 1.4fr 1fr 1.2fr;
  gap: var(--space-6);
  padding: var(--space-6) 0;
}

.footer-grid ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
  color: var(--color-muted);
}

.partner-badges {
  display: flex;
  gap: 8px;
  margin-top: 12px;
}

.partner-badges span {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 999px;
  background: rgba(47, 82, 51, 0.08);
  color: var(--color-primary);
  padding: 6px 10px;
}

.footer-bottom {
  border-top: 1px solid var(--color-border);
  padding: 16px 0 32px;
}

.footer-bottom .container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: var(--space-3);
  color: var(--color-muted);
}

.page-header {
  display: flex;
  justify-content: space-between;
  gap: var(--space-5);
  align-items: end;
  margin-bottom: var(--space-5);
}

.toolbar-row {
  display: flex;
  align-items: center;
  gap: var(--space-4);
  flex-wrap: wrap;
}

.segmented-control {
  display: inline-flex;
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: 999px;
  padding: 4px;
  gap: 4px;
}

.segment {
  border: none;
  background: transparent;
  border-radius: 999px;
  padding: 10px 16px;
  cursor: pointer;
  color: var(--color-muted);
}

.segment.active {
  background: var(--color-primary);
  color: white;
}

.updated-label {
  color: var(--color-muted);
  font-size: 0.9rem;
}

.dashboard-layout {
  display: grid;
  grid-template-columns: 1.4fr 0.6fr;
  gap: var(--space-5);
  margin-bottom: var(--space-5);
}

.panel {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-card);
  box-shadow: var(--shadow-soft);
  padding: var(--space-5);
}

.calendar-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: var(--space-4);
}

.calendar-header h2 { margin: 0; }

.calendar-nav {
  width: 40px;
  height: 40px;
  border-radius: 10px;
  border: 1px solid var(--color-border);
  background: transparent;
  font-size: 1.5rem;
  cursor: pointer;
}

.calendar-weekdays, .calendar-grid {
  display: grid;
  grid-template-columns: repeat(7, minmax(0, 1fr));
  gap: 8px;
}

.calendar-weekdays { margin-bottom: 10px; }
.calendar-weekdays span {
  text-align: center; font-weight: 600; color: var(--color-muted); font-size: 0.8rem;
}

.day {
  position: relative;
  min-height: 88px;
  border-radius: 12px;
  border: 1px solid transparent;
  background: var(--color-bg);
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  cursor: pointer;
  transition: all 150ms ease;
}

.day.is-selected {
  background: var(--color-primary);
  color: #fff;
}

.day-empty { background: transparent; border-color: transparent; cursor: default; }

.dot {
  position: absolute;
  width: 8px;
  height: 8px;
  background: var(--color-accent);
  border-radius: 50%;
  bottom: 10px;
}

.details-panel h3 { margin-bottom: var(--space-4); }

.detail-row {
  display: flex;
  justify-content: space-between;
  gap: var(--space-3);
  color: var(--color-muted);
  padding: 10px 0;
  border-bottom: 1px solid var(--color-border);
}

.detail-row strong { color: var(--color-dark); }

.empty-state {
  color: var(--color-muted);
}

.metric-card {
  padding: var(--space-5);
}

.metric-label {
  display: block;
  color: var(--color-muted);
  margin-bottom: var(--space-2);
}

.metric-card strong {
  font-size: clamp(1.5rem, 2vw, 2rem);
  font-weight: 800;
}

.charts-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: var(--space-5);
  margin-top: var(--space-5);
}

.panel-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-3);
  margin-bottom: var(--space-4);
}

.tag {
  background: rgba(47, 82, 51, 0.08);
  color: var(--color-primary);
  border-radius: 999px;
  padding: 6px 10px;
  font-size: 0.8rem;
  font-weight: 600;
}

.chart-line {
  height: 220px;
  background: linear-gradient(180deg, rgba(127,176,105,0.18), rgba(127,176,105,0.04));
  border-radius: 14px;
  position: relative;
  overflow: hidden;
}

.line-plot {
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, rgba(127,176,105,0.8), rgba(127,176,105,0.15));
  clip-path: polygon(0 72%, 12% 66%, 25% 58%, 38% 52%, 52% 60%, 68% 47%, 82% 38%, 100% 30%, 100% 100%, 0 100%);
}

.bars {
  display: flex;
  align-items: end;
  justify-content: space-between;
  gap: 24px;
  height: 220px;
}

.bar-group {
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: center;
  gap: 8px;
  width: 100%;
}

.bar {
  width: 100%;
  border-radius: 14px 14px 0 0;
  background: linear-gradient(180deg, var(--color-accent), var(--color-primary));
  min-height: 30px;
}

.bar-label { color: var(--color-muted); font-size: 0.8rem; }
.bar-value { font-weight: 600; color: var(--color-dark); }

.export-row { display: flex; justify-content: flex-end; margin-top: var(--space-5); }

.search-panel { margin: var(--space-5) auto; }

.search-box {
  display: flex;
  flex-direction: column;
  gap: 8px;
  max-width: 400px;
}

.search-box input, .field-group input, .field-group select, .field-group textarea {
  width: 100%;
  border: 1px solid var(--color-border);
  padding: 12px 14px;
  border-radius: 10px;
  background: white;
}

.search-box input:focus, .field-group input:focus, .field-group select:focus, .field-group textarea:focus {
  border-color: var(--color-primary);
  outline: none;
}

.table-wrap {
  overflow-x: auto;
  border-radius: 18px;
  border: 1px solid var(--color-border);
  background: var(--color-surface);
}

.leaderboard-table {
  width: 100%;
  border-collapse: collapse;
}

.leaderboard-table th, .leaderboard-table td {
  padding: 14px 18px;
  text-align: left;
  border-bottom: 1px solid var(--color-border);
}

.leaderboard-table tbody tr:nth-child(even) {
  background: rgba(47,82,51,0.02);
}

.rank-badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 6px 10px;
  border-radius: 999px;
  font-weight: 700;
  color: white;
}

.rank-badge.platinum { background: #5B8AA6; }
.rank-badge.gold { background: var(--color-accent); color: var(--color-dark); }
.rank-badge.silver { background: #A8A8A8; }
.rank-badge.bronze { background: #B08D57; }

.mini-progress {
  width: 120px;
  height: 8px;
  background: rgba(47,82,51,0.08);
  border-radius: 999px; overflow: hidden;
}

.mini-progress span {
  display: block;
  height: 100%;
  background: var(--color-accent);
}

.pagination-wrap {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-3);
  margin-top: var(--space-5);
}

.top3-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: var(--space-5);
  margin-bottom: var(--space-5);
}

.podium-card {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: 18px;
  box-shadow: var(--shadow-soft);
  padding: var(--space-5);
  text-align: center;
}

.podium-card.is-featured {
  transform: scale(1.04);
  border-color: rgba(232,185,74,0.5);
}

.medal {
  display: inline-flex;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: rgba(232,185,74,0.18);
  align-items: center;
  justify-content: center;
  font-weight: 800;
  color: var(--color-primary);
  margin-bottom: var(--space-3);
}

.form-wrap {
  max-width: 680px;
  margin: 0 auto;
}

.form-panel {
  padding: var(--space-6);
}

.field-group {
  margin-bottom: var(--space-4);
}

.field-group label {
  display: inline-block;
  margin-bottom: var(--space-2);
  font-weight: 600;
}

.error-message, .field-error {
  display: block;
  color: #c53838;
  font-size: 0.8rem;
  margin-top: 6px;
}

.checkbox-label {
  display: flex;
  align-items: flex-start;
  gap: 10px;
}

.checkbox-label input { margin-top: 4px; }

.honeypot-field {
  position: absolute;
  left: -9999px;
  opacity: 0;
  pointer-events: none;
}

.hidden { display: none !important; }

.success-box {
  margin-top: var(--space-5);
  display: flex;
  align-items: center;
  gap: 12px;
  border-radius: 12px;
  background: rgba(127, 176, 105, 0.12);
  color: var(--color-primary);
  padding: 14px 16px;
}

.success-icon {
  width: 26px;
  height: 26px;
  border-radius: 50%;
  background: var(--color-success);
  color: white;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
}

.auth-shell {
  max-width: 720px;
  margin: 0 auto;
}

.auth-panel, .input-panel {
  padding: var(--space-6);
}

.auth-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: var(--space-3);
}

.history-box {
  margin-top: var(--space-6);
}

.history-list {
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
}

.history-item {
  display: flex;
  justify-content: space-between;
  gap: var(--space-3);
  align-items: center;
  padding: 14px 16px;
  border: 1px solid var(--color-border);
  border-radius: 12px;
  background: rgba(47,82,51,0.02);
}

.history-item strong, .history-item span { display: block; }
.history-item span { color: var(--color-muted); }

.history-actions {
  display: flex;
  gap: var(--space-2);
}

.small {
  padding: 8px 12px;
  font-size: 0.8rem;
}

.danger { border-color: #c53838; color: #c53838; }

.profile-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: var(--space-5);
}

.profile-meta {
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: flex-end;
}

.profile-grid {
  display: grid;
  grid-template-columns: 1.4fr 1fr;
  gap: var(--space-5);
  margin-bottom: var(--space-5);
}

.mini-line-chart {
  height: 200px;
  display: flex;
  align-items: end;
  gap: 12px;
  margin-top: var(--space-5);
}

.mini-line-chart span {
  flex: 1;
  border-radius: 12px 12px 0 0;
  background: linear-gradient(180deg, var(--color-accent), var(--color-primary));
  min-height: 20px;
}

.badge-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 14px;
  margin-top: var(--space-4);
}

.badge-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  background: rgba(47,82,51,0.04);
  border-radius: 12px;
  padding: 18px 12px;
  border: 1px solid var(--color-border);
}

.badge-item span {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: var(--color-accent);
  color: var(--color-dark);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
}

.badge-item.is-muted { opacity: 0.35; filter: grayscale(1); }

.reward-list {
  list-style: none; margin: 0; padding: 0;
  display: flex; flex-direction: column; gap: 12px;
}

.reward-list li {
  display: flex;
  justify-content: space-between;
  padding: 12px 0;
  border-bottom: 1px solid var(--color-border);
}

.catalog-filter { margin-bottom: var(--space-5); }

.product-card {
  padding: var(--space-5);
}

.product-thumb {
  height: 160px;
  border-radius: 14px;
  margin-bottom: var(--space-4);
  background: linear-gradient(135deg, rgba(47,82,51,0.12), rgba(232,185,74,0.18));
}

.product-thumb.pakan { background: linear-gradient(135deg, rgba(47,82,51,0.12), rgba(232,185,74,0.25)); }
.product-thumb.pupuk { background: linear-gradient(135deg, rgba(139,94,60,0.12), rgba(127,176,105,0.2)); }

.product-tag {
  display: inline-flex;
  padding: 6px 10px;
  border-radius: 999px;
  background: rgba(47,82,51,0.06);
  color: var(--color-primary);
  font-size: 0.8rem;
  font-weight: 700;
}

.product-description {
  color: var(--color-muted);
  min-height: 48px;
}

.product-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-3);
  margin-top: var(--space-4);
}

.section-block { margin-top: var(--space-6); }

.story-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: var(--space-5);
  margin-top: var(--space-4);
}

.value-card, .team-card {
  padding: var(--space-5);
}

.team-avatar {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: rgba(47,82,51,0.08);
  color: var(--color-primary);
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: var(--space-3);
}

.faq-list {
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
}

.faq-list details {
  border: 1px solid var(--color-border);
  border-radius: 12px;
  background: var(--color-surface);
  padding: 16px 18px;
}

.faq-list summary {
  cursor: pointer;
  font-weight: 600;
}

.hero-sponsor {
  padding: var(--space-8) 0 0;
}

.sponsor-page .stats-grid { margin-top: var(--space-5); }

.roadmap {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: var(--space-5);
  position: relative;
}

.roadmap::before {
  content: "";
  position: absolute;
  top: 20px;
  left: 0;
  right: 0;
  height: 2px;
  background: var(--color-border);
}

.roadmap-step {
  position: relative;
  padding-top: var(--space-5);
}

.roadmap-dot {
  width: 18px;
  height: 18px;
  display: block;
  border-radius: 50%;
  background: var(--color-accent);
  border: 4px solid var(--color-surface);
  box-shadow: 0 0 0 2px var(--color-accent);
  margin-bottom: var(--space-3);
}

.roadmap-step.muted .roadmap-dot {
  background: var(--color-muted);
  box-shadow: 0 0 0 2px var(--color-muted);
}

.error-page {
  min-height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.error-box {
  max-width: 540px;
  padding: var(--space-6);
  text-align: center;
}

.error-mark {
  font-size: 3rem;
  color: var(--color-primary);
}

.input-error {
  border-color: #c53838 !important;
}

@media (max-width: 768px) {
  .nav {
    position: absolute;
    top: 72px;
    left: 16px;
    right: 16px;
    background: var(--color-surface);
    border: 1px solid var(--color-border);
    border-radius: 18px;
    box-shadow: var(--shadow-soft);
    padding: 16px;
    display: none;
    flex-direction: column;
    align-items: flex-start;
  }

  .nav.open { display: flex; }
  .menu-toggle { display: flex; }
  .nav-actions { display: none; }
  .hero-grid, .dashboard-layout, .charts-grid, .profile-grid, .story-grid, .top3-grid, .roadmap, .three-column, .four-column, .team-grid, .product-grid, .stats-grid, .summary-grid, .footer-grid { grid-template-columns: 1fr; }
  .hero-grid, .dashboard-layout, .charts-grid, .profile-grid, .story-grid, .top3-grid, .roadmap, .three-column, .four-column, .team-grid, .product-grid, .stats-grid, .summary-grid, .footer-grid { display: grid; }
  .steps-grid { flex-direction: column; }
  .step-arrow { transform: rotate(90deg); }
  .cta-panel, .page-header, .profile-header, .auth-header, .footer-bottom .container { flex-direction: column; align-items: flex-start; }
  .day { min-height: 52px; }
  .calendar-weekdays, .calendar-grid { gap: 6px; }
  .table-wrap { overflow-x: auto; }
}

.reveal-up {
  animation: revealUp 0.5s ease-out;
}

@keyframes revealUp {
  from {
    opacity: 0;
    transform: translateY(16px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
