(() => {
  const header = document.querySelector('.site-header');
  const nav = document.querySelector('.nav');
  const toggle = document.querySelector('.menu-toggle');
  const toTop = document.querySelector('.to-top');
  const form = document.querySelector('#contact-form');
  toggle?.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
  });
  document.querySelectorAll('a[href^="#"]').forEach(a => a.addEventListener('click', e => {
    const id = a.getAttribute('href');
    if (id && id !== '#') {
      const t = document.querySelector(id);
      if (t) { e.preventDefault(); t.scrollIntoView({behavior:'smooth', block:'start'}); nav?.classList.remove('open'); }
    }
  }));
  const onScroll = () => {
    header?.classList.toggle('scrolled', window.scrollY > 12);
    toTop?.classList.toggle('show', window.scrollY > 260);
  };
  window.addEventListener('scroll', onScroll); onScroll();
  toTop?.addEventListener('click', () => window.scrollTo({top:0, behavior:'smooth'}));
  form?.addEventListener('submit', e => {
    const msg = document.getElementById('form-message');
    if (!form.checkValidity()) {
      e.preventDefault();
      msg.textContent = '未入力または入力形式に誤りがある項目をご確認ください。';
      msg.style.color = '#c62828';
    }
  });
})();
