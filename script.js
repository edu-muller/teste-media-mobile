const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    entry.target.classList.toggle('viewport-animation', entry.isIntersecting);
  });
});
document
  .querySelectorAll('.card')
  .forEach((card) => observer.observe(card, {}));
