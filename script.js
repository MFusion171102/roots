/**
 * script.js — GreenChem Website
 * Handles:
 *   1. Sidebar toggle (mobile)
 *   2. Image carousel (next/prev, dot nav, autoplay)
 */

/* ============================================================
   1. SIDEBAR TOGGLE
   ============================================================ */

const sidebar       = document.getElementById('sidebar');
const sidebarToggle = document.getElementById('sidebarToggle');
const overlay       = document.getElementById('overlay');

/**
 * Opens the sidebar by adding `.is-open` to the sidebar element,
 * making the overlay visible, and marking the toggle button as open.
 */
function openSidebar() {
  sidebar.classList.add('is-open');
  overlay.classList.add('is-visible');
  sidebarToggle.classList.add('is-open');
  sidebarToggle.setAttribute('aria-expanded', 'true');
  // Trap focus inside sidebar (basic: move focus to first link)
  const firstLink = sidebar.querySelector('.sidebar__link');
  if (firstLink) firstLink.focus();
}

/**
 * Closes the sidebar.
 */
function closeSidebar() {
  sidebar.classList.remove('is-open');
  overlay.classList.remove('is-visible');
  sidebarToggle.classList.remove('is-open');
  sidebarToggle.setAttribute('aria-expanded', 'false');
}

// Toggle on burger click
sidebarToggle.addEventListener('click', () => {
  const isOpen = sidebar.classList.contains('is-open');
  isOpen ? closeSidebar() : openSidebar();
});

// Close when overlay is clicked (tap outside)
overlay.addEventListener('click', closeSidebar);

// Close on Escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && sidebar.classList.contains('is-open')) {
    closeSidebar();
    sidebarToggle.focus();
  }
});

// Close sidebar on nav link click (mobile UX)
sidebar.querySelectorAll('.sidebar__link').forEach(link => {
  link.addEventListener('click', () => {
    if (window.innerWidth <= 900) closeSidebar();
  });
});


/* ============================================================
   2. IMAGE CAROUSEL
   ============================================================ */

const track    = document.getElementById('carouselTrack');
const slides   = track ? track.querySelectorAll('.carousel__slide') : [];
const prevBtn  = document.getElementById('prevBtn');
const nextBtn  = document.getElementById('nextBtn');
const dots     = document.querySelectorAll('.carousel__dot');

let currentIndex  = 0;               // active slide index
const totalSlides = slides.length;   // 5

// Autoplay config
const AUTOPLAY_INTERVAL = 4500;      // ms between auto-advances
let autoplayTimer = null;

/**
 * Move the carousel to a specific slide index.
 * @param {number} index - Target slide (0-based)
 */
function goToSlide(index) {
  // Wrap around
  currentIndex = (index + totalSlides) % totalSlides;

  // Translate the track
  track.style.transform = `translateX(-${currentIndex * 100}%)`;

  // Update dots
  dots.forEach((dot, i) => {
    const isActive = i === currentIndex;
    dot.classList.toggle('carousel__dot--active', isActive);
    dot.setAttribute('aria-selected', String(isActive));
  });
}

/** Advance one slide forward. */
function nextSlide() {
  goToSlide(currentIndex + 1);
}

/** Go back one slide. */
function prevSlide() {
  goToSlide(currentIndex - 1);
}

/** Start autoplay timer. */
function startAutoplay() {
  stopAutoplay(); // clear any existing timer first
  autoplayTimer = setInterval(nextSlide, AUTOPLAY_INTERVAL);
}

/** Stop autoplay timer. */
function stopAutoplay() {
  if (autoplayTimer) {
    clearInterval(autoplayTimer);
    autoplayTimer = null;
  }
}

// Only initialise if carousel elements exist on page
if (track && totalSlides > 0) {

  // Button listeners
  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      nextSlide();
      // Restart autoplay countdown on manual interaction
      startAutoplay();
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      prevSlide();
      startAutoplay();
    });
  }

  // Dot listeners
  dots.forEach(dot => {
    dot.addEventListener('click', () => {
      const idx = parseInt(dot.dataset.index, 10);
      goToSlide(idx);
      startAutoplay();
    });
  });

  // Keyboard navigation when carousel is focused
  track.closest('.carousel').addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') { nextSlide(); startAutoplay(); }
    if (e.key === 'ArrowLeft')  { prevSlide(); startAutoplay(); }
  });

  // Pause autoplay on hover (better UX)
  track.closest('.carousel').addEventListener('mouseenter', stopAutoplay);
  track.closest('.carousel').addEventListener('mouseleave', startAutoplay);

  // Touch / swipe support
  let touchStartX = 0;

  track.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].clientX;
  }, { passive: true });

  track.addEventListener('touchend', (e) => {
    const delta = e.changedTouches[0].clientX - touchStartX;
    const SWIPE_THRESHOLD = 50; // px
    if (delta < -SWIPE_THRESHOLD) nextSlide();
    else if (delta > SWIPE_THRESHOLD) prevSlide();
    startAutoplay();
  }, { passive: true });

  // Kick off autoplay
  startAutoplay();
}
