/* ═══════════════════════════════════════════════════
   MAIN.JS — Entry point
   Imports and initialises all modules
════════════════════════════════════════════════════ */

import { initCursor }             from './cursor.js';
import { initNav, initScrollSpy } from './nav.js';
import { initScrollReveal }       from './reveal.js';
import { initTypewriter }         from './typewriter.js';

/* ── Footer year ── */
function initFooterYear() {
  const el = document.getElementById('footerYear');
  if (el) el.textContent = new Date().getFullYear();
}

/* ── Boot everything on DOM ready ── */
document.addEventListener('DOMContentLoaded', () => {
  initCursor();
  initNav();
  initScrollSpy();
  initTypewriter();
  initScrollReveal();
  initFooterYear();
});