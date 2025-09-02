document.addEventListener('DOMContentLoaded', function() {

  // --- LOGIK FÜR TESTIMONIAL SLIDER ---
  const slider = document.querySelector('.testimonial-slider');
  if (slider) {
    const slides = document.querySelectorAll('.testimonial-slide');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    let currentSlide = 0;

    function showSlide(index) {
      slides.forEach((slide) => {
        slide.classList.remove('active');
      });
      slides[index].classList.add('active');
    }

    function nextSlide() {
      currentSlide = (currentSlide + 1) % slides.length;
      showSlide(currentSlide);
    }

    function prevSlide() {
      currentSlide = (currentSlide - 1 + slides.length) % slides.length;
      showSlide(currentSlide);
    }

    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);

    showSlide(currentSlide); // Initialen Slide anzeigen
  }


  // --- LOGIK FÜR MOBILES MENÜ ---
  const mobileMenuButton = document.querySelector('.mobile-menu-button');
  const navLeft = document.querySelector('.nav-left');
  const body = document.querySelector('body');

  if (mobileMenuButton && navLeft) {
    mobileMenuButton.addEventListener('click', () => {
      navLeft.classList.toggle('mobile-menu-open');
      body.classList.toggle('mobile-menu-open'); // Diese Zeile hinzufügen
      body.style.overflow = navLeft.classList.contains('mobile-menu-open') ? 'hidden' : '';
    });

    // Menü schließen
    navLeft.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLeft.classList.remove('mobile-menu-open');
        body.classList.remove('mobile-menu-open'); // Diese Zeile hinzufügen
        body.style.overflow = '';
      });
    });
  }

  // --- LOGIK FÜR HEADER-SCROLL-EFFEKT ---
  const header = document.querySelector('header');
  if(header) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        header.classList.add('header-scrolled');
      } else {
        header.classList.remove('header-scrolled');
      }
    });
  }

});

