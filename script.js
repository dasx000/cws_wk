const links = document.querySelectorAll('.link-item');

links.forEach((link, index) => {
  link.style.transitionDelay = `${80 + index * 60}ms`;
  requestAnimationFrame(() => {
    link.classList.add('visible');
  });
});
