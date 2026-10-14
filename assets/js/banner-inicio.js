(() => {
  const slides = [...document.querySelectorAll('.home-promo-slide')];
  if (slides.length < 2) return;

  let current = 0;
  window.setInterval(() => {
    if (document.hidden) return;
    slides[current].hidden = true;
    current = (current + 1) % slides.length;
    slides[current].hidden = false;
  }, 6000);
})();
