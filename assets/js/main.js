(() => {
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.nav');
  const toTop = document.querySelector('.to-top');

  toggle?.addEventListener('click', () => {
    const opened = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(opened));
  });

  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', (e) => {
      const id = anchor.getAttribute('href');
      if (!id || id === '#') return;
      const target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      nav?.classList.remove('open');
      toggle?.setAttribute('aria-expanded', 'false');
    });
  });

  const scrollHandler = () => {
    toTop?.classList.toggle('show', window.scrollY > 280);
  };

  window.addEventListener('scroll', scrollHandler);
  scrollHandler();

  toTop?.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
})();
