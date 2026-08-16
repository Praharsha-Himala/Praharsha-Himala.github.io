document.addEventListener('DOMContentLoaded', () => {
  
  // 1. Mobile nav toggle
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

  // 2. Hero video
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

  // 3. Gallery Slider
  const slider = document.getElementById('gallerySlider');
  const sliderPrev = document.getElementById('sliderPrev');
  const sliderNext = document.getElementById('sliderNext');

  if (slider && sliderPrev && sliderNext) {
    sliderNext.addEventListener('click', () => {
      // Scroll right by the exact width of the container
      slider.scrollBy({ left: slider.clientWidth, behavior: 'smooth' });
    });

    sliderPrev.addEventListener('click', () => {
      // Scroll left by the exact width of the container
      slider.scrollBy({ left: -slider.clientWidth, behavior: 'smooth' });
    });
  }

});