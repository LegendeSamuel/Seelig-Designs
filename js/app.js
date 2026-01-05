
// --- GLASS SURFACE CLASS (Moved to top level) ---
class GlassSurface {
  constructor(element, options = {}) {
    this.element = element;
    this.options = {
      borderWidth: 0.07,
      borderRadius: 0,
      brightness: 50,
      opacity: 0.93,
      blur: 11,
      mixBlendMode: 'difference',
      distortionScale: -180,
      redOffset: 0,
      greenOffset: 10,
      blueOffset: 20,
      xChannel: 'R',
      yChannel: 'G',
      ...options
    };

    // Generate unique IDs
    const uniqueId = Math.random().toString(36).substr(2, 9);
    this.ids = {
      filter: `glass-filter-${uniqueId}`,
      image: `glass-image-${uniqueId}`,
      redGrad: `red-grad-${uniqueId}`,
      blueGrad: `blue-grad-${uniqueId}`,
      redChannel: `red-channel-${uniqueId}`,
      greenChannel: `green-channel-${uniqueId}`,
      blueChannel: `blue-channel-${uniqueId}`
    };

    this.init();
  }

  init() {
    // 1. Create SVG structure
    this.svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    this.svg.classList.add('glass-surface__filter');
    this.svg.style.position = 'absolute';
    this.svg.style.width = '0';
    this.svg.style.height = '0';
    this.svg.style.overflow = 'hidden';

    this.svg.innerHTML = `
      <defs>
        <filter id="${this.ids.filter}" color-interpolation-filters="sRGB" x="0%" y="0%" width="100%" height="100%">
          <feImage id="${this.ids.image}" x="0" y="0" width="100%" height="100%" preserveAspectRatio="none" result="map" href="" />
          
          <feDisplacementMap id="${this.ids.redChannel}" in="SourceGraphic" in2="map" result="dispRed" scale="${this.options.distortionScale + this.options.redOffset}" xChannelSelector="${this.options.xChannel}" yChannelSelector="${this.options.yChannel}"></feDisplacementMap>
          <feColorMatrix in="dispRed" type="matrix" values="1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0" result="red"></feColorMatrix>
          
          <feDisplacementMap id="${this.ids.greenChannel}" in="SourceGraphic" in2="map" result="dispGreen" scale="${this.options.distortionScale + this.options.greenOffset}" xChannelSelector="${this.options.xChannel}" yChannelSelector="${this.options.yChannel}"></feDisplacementMap>
          <feColorMatrix in="dispGreen" type="matrix" values="0 0 0 0 0 0 1 0 0 0 0 0 0 0 0 0 0 0 1 0" result="green"></feColorMatrix>
          
          <feDisplacementMap id="${this.ids.blueChannel}" in="SourceGraphic" in2="map" result="dispBlue" scale="${this.options.distortionScale + this.options.blueOffset}" xChannelSelector="${this.options.xChannel}" yChannelSelector="${this.options.yChannel}"></feDisplacementMap>
          <feColorMatrix in="dispBlue" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 1 0 0 0 0 0 1 0" result="blue"></feColorMatrix>
          
          <feBlend in="red" in2="green" mode="screen" result="rg"></feBlend>
          <feBlend in="rg" in2="blue" mode="screen" result="output"></feBlend>
          <feGaussianBlur in="output" stdDeviation="0.7"></feGaussianBlur>
        </filter>
      </defs>
    `;

    document.body.appendChild(this.svg);

    // 2. Apply classes and styles to the target element
    this.element.classList.add('glass-surface');
    // Detect SVG support (basic check, assume true for modern browsers)
    this.element.classList.add('glass-surface--svg');

    // Set CSS variable to point to our specific filter ID
    this.element.style.setProperty('--filter-id', `url(#${this.ids.filter})`);

    // 3. Initial generation and listeners
    this.updateDisplacementMap();

    let resizeTimeout;
    window.addEventListener('resize', () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => this.updateDisplacementMap(), 100);
    });
  }

  generateDisplacementMap() {
    // Use documentElement.clientWidth to exclude scrollbar width, ensuring
    // the map dimensions match the visible viewport exactly.
    const width = document.documentElement.clientWidth;
    const height = document.documentElement.clientHeight;

    // Edge size calculation
    const edgeSize = Math.min(width, height) * (this.options.borderWidth * 0.5);

    const svgContent = `
      <svg viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="${this.ids.redGrad}" x1="100%" y1="0%" x2="0%" y2="0%">
            <stop offset="0%" stop-color="#0000"/>
            <stop offset="100%" stop-color="red"/>
          </linearGradient>
          <linearGradient id="${this.ids.blueGrad}" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stop-color="#0000"/>
            <stop offset="100%" stop-color="blue"/>
          </linearGradient>
        </defs>
        <rect x="0" y="0" width="${width}" height="${height}" fill="black"></rect>
        <rect x="0" y="0" width="${width}" height="${height}" rx="${this.options.borderRadius}" fill="url(#${this.ids.redGrad})" />
        <rect x="0" y="0" width="${width}" height="${height}" rx="${this.options.borderRadius}" fill="url(#${this.ids.blueGrad})" style="mix-blend-mode: ${this.options.mixBlendMode}" />
        <rect x="${edgeSize}" y="${edgeSize}" width="${width - edgeSize * 2}" height="${height - edgeSize * 2}" rx="${this.options.borderRadius}" fill="hsl(0 0% ${this.options.brightness}% / ${this.options.opacity})" style="filter:blur(${this.options.blur}px)" />
      </svg>
    `;

    return `data:image/svg+xml,${encodeURIComponent(svgContent)}`;
  }

  updateDisplacementMap() {
    const feImage = document.getElementById(this.ids.image);
    if (feImage) {
      feImage.setAttribute('href', this.generateDisplacementMap());
    }
  }
}

// --- TEXT SPLITTER & ANIMATION CLASS (New) ---
class SplitTextAnimation {
  constructor(element, options = {}) {
    this.element = element;
    this.options = {
      splitType: 'chars', // 'chars' or 'words'
      delay: 50,
      duration: 3.5,
      ease: 'power3.out',
      from: { opacity: 0, y: 40 },
      to: { opacity: 1, y: 0 },
      threshold: 0.1,
      start: 'top 90%', // Default ScrollTrigger start
      ...options
    };

    // Ensure GSAP is loaded
    if (typeof gsap === 'undefined') {
      console.warn('GSAP not loaded.');
      return;
    }

    this.splitText();
    this.animate();
  }

  splitText() {
    this.element.classList.add('split-parent');

    // Store original child nodes
    const childNodes = Array.from(this.element.childNodes);
    this.element.innerHTML = ''; // Clear content

    // Helper to create span
    const createSpan = (content, className) => {
      const span = document.createElement('span');
      span.className = className;
      span.style.display = 'inline-block';
      span.innerText = content;
      return span;
    };

    // Helper to process text nodes
    const processTextNode = (text) => {
      const fragment = document.createDocumentFragment();

      if (this.options.splitType === 'chars') {
        const words = text.split(' ');
        words.forEach((word, wordIndex) => {
          // If empty string (e.g. double space), just add space
          if (word === '') {
            if (wordIndex < words.length - 1) fragment.appendChild(document.createTextNode(' '));
            return;
          }

          const wordSpan = document.createElement('span');
          wordSpan.className = 'split-word';
          wordSpan.style.display = 'inline-block';
          wordSpan.style.whiteSpace = 'nowrap';

          [...word].forEach(char => {
            wordSpan.appendChild(createSpan(char, 'split-char'));
          });

          fragment.appendChild(wordSpan);
          // Add space after word (except last)
          if (wordIndex < words.length - 1) {
            fragment.appendChild(document.createTextNode(' '));
          }
        });
      } else {
        // Simple words split
        const words = text.split(' ');
        words.forEach((word, i) => {
          if (word) fragment.appendChild(createSpan(word, 'split-word'));
          if (i < words.length - 1) fragment.appendChild(document.createTextNode(' '));
        });
      }
      return fragment;
    };

    childNodes.forEach(node => {
      if (node.nodeType === Node.TEXT_NODE) {
        this.element.appendChild(processTextNode(node.textContent));
      } else {
        // Preserve element nodes like <br>, <strong>, etc.
        this.element.appendChild(node.cloneNode(true));
      }
    });
  }

  animate() {
    const targets = this.element.querySelectorAll('.split-char');

    gsap.fromTo(targets,
      { ...this.options.from },
      {
        ...this.options.to,
        duration: this.options.duration,
        ease: this.options.ease,
        stagger: this.options.delay / 1000,
        scrollTrigger: {
          trigger: this.element,
          start: this.options.start,
          once: true
        }
      }
    );
  }
}


document.addEventListener('DOMContentLoaded', function () {

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
      body.classList.toggle('mobile-menu-open');
      body.style.overflow = navLeft.classList.contains('mobile-menu-open') ? 'hidden' : '';
    });

    // Menü schließen
    navLeft.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLeft.classList.remove('mobile-menu-open');
        body.classList.remove('mobile-menu-open');
        body.style.overflow = '';
      });
    });
  }

  // --- INITIALIZE GLASS EFFECT ---
  const globalOverlay = document.getElementById('global-glass-overlay');
  if (globalOverlay) {
    new GlassSurface(globalOverlay, {
      borderRadius: 0,
      opacity: 0.93
    });
  }

  const headerElement = document.querySelector('header');
  if (headerElement) {
    new GlassSurface(headerElement, {
      borderRadius: 0,
      opacity: 0.95,
      blur: 15 // Distinct blur for the header
    });
  }

  // --- LOGIK FÜR HEADER-SCROLL-EFFEKT ---
  const header = document.querySelector('header');
  if (header) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        header.classList.add('header-scrolled');
      } else {
        header.classList.remove('header-scrolled');
      }
    });
  }

  // --- INITIALIZE HERO TEXT ANIMATION ---
  const heroTitle = document.querySelector('.hero-content h1');
  if (heroTitle) {
    // Wait for fonts to load for better splitting accuracy
    document.fonts.ready.then(() => {
      new SplitTextAnimation(heroTitle, {
        splitType: 'chars',
        delay: 50, // Stagger delay in ms
        duration: 1.25,
        from: { opacity: 0, y: 40 },
        to: { opacity: 1, y: 0 }
      });
    });
  }


  // --- COOKIE BANNER LOGIC ---
  const cookieBanner = document.getElementById('cookie-banner');
  const acceptButton = document.getElementById('accept-cookies');

  if (cookieBanner && acceptButton) {
    // Check localStorage
    if (!localStorage.getItem('cookiesAccepted')) {
      cookieBanner.style.display = 'block';

      // Initialize Glass Effect for the banner
      new GlassSurface(cookieBanner, {
        borderRadius: 15,
        opacity: 0.95,
        blur: 15
      });
    }

    acceptButton.addEventListener('click', () => {
      localStorage.setItem('cookiesAccepted', 'true');

      // Optional: Fade out animation
      gsap.to(cookieBanner, {
        opacity: 0,
        y: 20,
        duration: 0.5,
        onComplete: () => {
          cookieBanner.style.display = 'none';
        }
      });
    });
  }


  // --- DYNAMIC YEAR ---
  const yearSpan = document.getElementById('current-year');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

});
