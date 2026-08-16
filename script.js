// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const navSheet = document.getElementById('navSheet');
if (navToggle && navSheet) {
  navToggle.addEventListener('click', () => {
    const open = navSheet.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(open));
  });
  navSheet.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      navSheet.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

// Hero video: explicitly call play() as a nudge in case the autoplay
// attribute alone doesn't trigger playback in this browser/setting.
// If playback is blocked, poster="assets/tissue-hero.jpg" stays visible
// instead of an empty black circle, and the reason is logged to the
// console (open DevTools > Console to see it).
const tissueVideo = document.getElementById('tissueVideo');
if (tissueVideo) {
  const tryPlay = () => {
    const playPromise = tissueVideo.play();
    if (playPromise !== undefined) {
      playPromise.catch((err) => {
        console.warn('Hero video did not autoplay:', err.name, err.message);
      });
    }
  };
  if (tissueVideo.readyState >= 2) {
    tryPlay();
  } else {
    tissueVideo.addEventListener('loadeddata', tryPlay, { once: true });
  }
}

// Gallery Slider
const slider = document.getElementById('gallerySlider');
const sliderPrev = document.getElementById('sliderPrev');
const sliderNext = document.getElementById('sliderNext');

if (slider && sliderPrev && sliderNext) {
  sliderNext.addEventListener('click', () => {
    // Scroll right by the width of one image slide
    slider.scrollBy({ left: slider.clientWidth, behavior: 'smooth' });
  });

  sliderPrev.addEventListener('click', () => {
    // Scroll left by the width of one image slide
    slider.scrollBy({ left: -slider.clientWidth, behavior: 'smooth' });
  });
}