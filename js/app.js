document.addEventListener('DOMContentLoaded', function() {
  // Überprüfen, ob der Slider auf der aktuellen Seite existiert
  const slider = document.querySelector('.testimonial-slider');
  if (!slider) {
    return; // Wenn kein Slider da ist, wird der Code nicht ausgeführt
  }

  const slides = document.querySelectorAll('.testimonial-slide');
  const prevBtn = document.querySelector('.prev-btn');
  const nextBtn = document.querySelector('.next-btn');
  let currentSlide = 0;

  function showSlide(index) {
    // Alle Slides ausblenden
    slides.forEach((slide, i) => {
      slide.classList.remove('active');
    });

    // Den richtigen Slide anzeigen
    slides[index].classList.add('active');
  }

  function nextSlide() {
    currentSlide++;
    if (currentSlide >= slides.length) {
      currentSlide = 0; // Springt zum ersten Slide zurück
    }
    showSlide(currentSlide);
  }

  function prevSlide() {
    currentSlide--;
    if (currentSlide < 0) {
      currentSlide = slides.length - 1; // Springt zum letzten Slide
    }
    showSlide(currentSlide);
  }

  // Event Listeners für die Buttons
  nextBtn.addEventListener('click', nextSlide);
  prevBtn.addEventListener('click', prevSlide);

  // Initial den ersten Slide anzeigen
  showSlide(currentSlide);
});
