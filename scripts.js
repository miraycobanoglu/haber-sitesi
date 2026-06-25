const btn = document.querySelector('.menu-toggle');
const navbar = document.querySelector('.header-overlay');
const icon = document.querySelector('.menu-icon');

btn.addEventListener('click', () => {
  const isOpen = navbar.classList.toggle('active');

  btn.setAttribute('aria-expanded', isOpen);
  btn.setAttribute(
    'aria-label',
    isOpen ? 'Close menu' : 'Open menu'
  );

  icon.src = isOpen
    ? './assets/images/icon-menu-close.svg'
    : './assets/images/icon-menu.svg';

  navbar.setAttribute('aria-hidden', !isOpen);
});