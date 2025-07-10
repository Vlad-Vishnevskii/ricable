document.addEventListener('DOMContentLoaded', function () {
  const swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    loop: true,
    autoplay: {
      delay: 1400,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });
  const toggleButtons = document.querySelectorAll('.toggle-button');

  toggleButtons.forEach((button) => {
    button.addEventListener('click', function () {
      const textSection = button.parentNode.querySelector('.description-text');
      const buttonText = button.querySelector('.toggle-button_text');
      const container = button.parentNode.parentNode.querySelector(
        '.products_hidden-text'
      );
      if (container) container.classList.toggle('expanded');
      const isExpanded = textSection.classList.toggle('expanded');
      button.classList.toggle('expanded');
      buttonText.textContent = isExpanded ? 'Свернуть' : 'Подробнее';
    });
  });

  const productButtons = document.querySelectorAll('.toggle-button-product');

  productButtons.forEach((button) => {
    button.addEventListener('click', function () {
      const textSection =
        button.parentNode.parentNode.querySelector('.description-text');

      const buttonText = button.querySelector('.toggle-button-product_text');
      const container = button.parentNode.parentNode.querySelector(
        '.products_hidden-text'
      );
      if (container) container.classList.toggle('expanded');
      const isExpanded = textSection.classList.toggle('expanded');
      button.classList.toggle('expanded');
      buttonText.textContent = isExpanded ? 'Свернуть' : 'Подробнее';
    });
  });

  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();

      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
    });
  });

  const burgerBtn = document.getElementById('burgerBtn');
  const menuOverlay = document.getElementById('menuOverlay');

  burgerBtn.addEventListener('click', () => {
    menuOverlay.classList.toggle('active');
    burgerBtn.classList.toggle('active');
  });

  document.addEventListener('click', (event) => {
    if (
      event.target.closest('.menu_link') ||
      !event.target.closest('.burger-menu')
    ) {
      menuOverlay.classList.remove('active');
      burgerBtn.classList.remove('active');
    }
  });
});
