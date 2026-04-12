/* ═══════════════════════════════════════════════════
   TYPEWRITER.JS — Cycling typewriter effect
════════════════════════════════════════════════════ */

export function initTypewriter() {
  const target = document.getElementById('typewriterTarget');
  if (!target) return;

  const phrases = [
    'fast, clean interfaces.',
    'things that work for people.',
    'with HTML, CSS & JS.',
    'in public — learning daily.',
    'accessible, readable code.',
  ];

  const TYPING_SPEED   = 75;    // ms per character while typing
  const DELETING_SPEED = 40;    // ms per character while deleting
  const PAUSE_AFTER    = 1800;  // ms to hold the completed phrase
  const PAUSE_BEFORE   = 400;   // ms to pause before typing next phrase

  let phraseIndex = 0;
  let charIndex   = 0;
  let isDeleting  = false;
  let isPaused    = false;
  let lastTime    = 0;

  function tick() {
    if (isPaused) return;

    const phrase = phrases[phraseIndex];

    if (!isDeleting) {
      // Type next character
      charIndex++;
      target.textContent = phrase.slice(0, charIndex);

      if (charIndex === phrase.length) {
        // Done typing — pause, then start deleting
        isPaused = true;
        setTimeout(() => {
          isPaused   = false;
          isDeleting = true;
          requestAnimationFrame(loop);
        }, PAUSE_AFTER);
        return;
      }
    } else {
      // Delete last character
      charIndex--;
      target.textContent = phrase.slice(0, charIndex);

      if (charIndex === 0) {
        // Done deleting — move to next phrase, then pause
        isDeleting  = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        isPaused    = true;
        setTimeout(() => {
          isPaused = false;
          requestAnimationFrame(loop);
        }, PAUSE_BEFORE);
        return;
      }
    }

    requestAnimationFrame(loop);
  }

  function loop(timestamp = 0) {
    const speed = isDeleting ? DELETING_SPEED : TYPING_SPEED;
    if (timestamp - lastTime >= speed) {
      lastTime = timestamp;
      tick();
    } else {
      requestAnimationFrame(loop);
    }
  }

  requestAnimationFrame(loop);
}