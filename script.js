document.addEventListener('DOMContentLoaded', function () {
  const flipbook = document.querySelector('.flipbook-container');
  let flip = false;

  flipbook.addEventListener('click', function () {
    flip = !flip;
    updateFlip();
  });

  function updateFlip() {
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => {
      page.style.transform = flip ? 'rotateY(180deg)' : 'rotateY(0)';
    });
  }
});
