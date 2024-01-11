document.addEventListener('DOMContentLoaded', function () {
  const flipbook = document.querySelector('.flipbook-container');
  let currentPage = 1;

  flipbook.addEventListener('click', function () {
    currentPage = (currentPage % 4) + 1;
    updateFlip();
  });

  function updateFlip() {
    const pages = document.querySelectorAll('.page');
    pages.forEach((page, index) => {
      page.style.transform = `rotateY(${(index + 1 - currentPage) * 180}deg)`;
    });
  }
});
