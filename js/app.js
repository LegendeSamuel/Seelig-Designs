// app.js

// Projektbereich für Parallax-Scrolling
const projekt = document.querySelector('.projekt');
const ease = 0.1; // Sanfte Verzögerung
let currentScroll = 0;
let targetScroll = 0;

// Scroll-Event-Listener hinzufügen
window.addEventListener('scroll', () => {
  targetScroll = window.scrollY;
});

// Smooth-Scroll Animation mit Lerp
function parallaxEffect() {
  currentScroll += (targetScroll - currentScroll) * ease;
  projekt.style.transform = `translateY(${currentScroll * 0.05}px)`; // Sanfter Effekt

  requestAnimationFrame(parallaxEffect);
}

// Starte die Animation
parallaxEffect();
