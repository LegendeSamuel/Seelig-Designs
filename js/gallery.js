/* =========================================================================
   Gallery: category filtering + accessible lightbox
   ========================================================================= */
(function () {
  'use strict';

  document.addEventListener('DOMContentLoaded', function () {
    const grid = document.getElementById('gallery-grid');
    if (!grid) return;

    const items = Array.from(grid.querySelectorAll('.gallery-item'));
    const filterBtns = Array.from(document.querySelectorAll('.filter-btn'));
    const emptyMsg = document.getElementById('gallery-empty');

    // Filter labels are folder-driven (data-de / data-en), not from the i18n
    // dictionary — keep them in sync with the current language.
    function updateFilterLabels(lang) {
      filterBtns.forEach(function (b) {
        const de = b.getAttribute('data-de');
        const en = b.getAttribute('data-en');
        if (de || en) b.textContent = (lang === 'en') ? (en || de) : (de || en);
      });
    }
    updateFilterLabels((window.SDi18n && window.SDi18n.get) ? window.SDi18n.get() : 'de');
    document.addEventListener('langchange', function (e) {
      updateFilterLabels(e.detail && e.detail.lang);
    });

    // --- Filtering ---
    function applyFilter(filter) {
      let visibleCount = 0;
      items.forEach(function (item) {
        const match = filter === 'all' || item.getAttribute('data-cat') === filter;
        item.classList.toggle('is-hidden', !match);
        if (match) visibleCount++;
      });
      if (emptyMsg) emptyMsg.hidden = visibleCount !== 0;
      buildVisibleList();
    }

    filterBtns.forEach(function (btn) {
      btn.addEventListener('click', function () {
        filterBtns.forEach(function (b) {
          b.classList.remove('active');
          b.setAttribute('aria-pressed', 'false');
        });
        btn.classList.add('active');
        btn.setAttribute('aria-pressed', 'true');
        applyFilter(btn.getAttribute('data-filter'));
      });
    });

    // --- Lightbox ---
    const lightbox = document.getElementById('lightbox');
    const lbImage = lightbox.querySelector('.lb-image');
    const lbCurrent = lightbox.querySelector('.lb-current');
    const lbTotal = lightbox.querySelector('.lb-total');
    const btnClose = lightbox.querySelector('.lb-close');
    const btnPrev = lightbox.querySelector('.lb-prev');
    const btnNext = lightbox.querySelector('.lb-next');

    let visible = [];        // currently visible items (respects filter)
    let index = 0;
    let lastFocused = null;

    function buildVisibleList() {
      visible = items.filter(function (it) { return !it.classList.contains('is-hidden'); });
    }
    buildVisibleList();

    function showImage(i) {
      if (!visible.length) return;
      index = (i + visible.length) % visible.length;
      const img = visible[index].querySelector('img');
      lbImage.setAttribute('src', img.getAttribute('src'));
      lbImage.setAttribute('alt', img.getAttribute('alt') || '');
      lbCurrent.textContent = String(index + 1);
      lbTotal.textContent = String(visible.length);
    }

    function openLightbox(item) {
      buildVisibleList();
      const i = visible.indexOf(item);
      if (i === -1) return;
      lastFocused = document.activeElement;
      showImage(i);
      lightbox.hidden = false;
      document.body.style.overflow = 'hidden';
      btnClose.focus();
    }

    function closeLightbox() {
      lightbox.hidden = true;
      document.body.style.overflow = '';
      lbImage.setAttribute('src', '');
      if (lastFocused && typeof lastFocused.focus === 'function') lastFocused.focus();
    }

    items.forEach(function (item) {
      const img = item.querySelector('img');
      item.setAttribute('tabindex', '0');
      item.setAttribute('role', 'button');
      item.addEventListener('click', function () { openLightbox(item); });
      item.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          openLightbox(item);
        }
      });
    });

    btnClose.addEventListener('click', closeLightbox);
    btnPrev.addEventListener('click', function () { showImage(index - 1); });
    btnNext.addEventListener('click', function () { showImage(index + 1); });

    lightbox.addEventListener('click', function (e) {
      if (e.target === lightbox) closeLightbox();
    });

    document.addEventListener('keydown', function (e) {
      if (lightbox.hidden) return;
      if (e.key === 'Escape') closeLightbox();
      else if (e.key === 'ArrowLeft') showImage(index - 1);
      else if (e.key === 'ArrowRight') showImage(index + 1);
      else if (e.key === 'Tab') {
        // simple focus trap within the lightbox
        const focusable = [btnClose, btnPrev, btnNext];
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault(); last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault(); first.focus();
        }
      }
    });

    // Basic swipe support on touch devices
    let touchStartX = 0;
    lightbox.addEventListener('touchstart', function (e) {
      touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });
    lightbox.addEventListener('touchend', function (e) {
      const dx = e.changedTouches[0].screenX - touchStartX;
      if (Math.abs(dx) > 50) showImage(index + (dx < 0 ? 1 : -1));
    }, { passive: true });
  });
})();
