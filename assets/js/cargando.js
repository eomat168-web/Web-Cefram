(() => {
  const root = document.documentElement;
  const hideSkeleton = () => {
    window.setTimeout(() => {
      root.classList.remove('js-loading');
      document.querySelector('.page-skeleton')?.setAttribute('hidden', '');
    }, 240);
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', hideSkeleton, { once: true });
  } else {
    hideSkeleton();
  }
})();
