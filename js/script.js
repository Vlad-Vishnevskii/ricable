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

  const modal = document.getElementById('policyModal');
  const openBtn = document.querySelector('.footer_policyBtn');
  const closeBtn = document.querySelector('.modal_close');

  openBtn.addEventListener('click', () => {
    modal.classList.add('show');
    document.body.style.overflow = 'hidden';
  });

  closeBtn.addEventListener('click', () => {
    modal.classList.remove('show');
    document.body.style.overflow = 'unset';
  });

  window.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.classList.remove('show');
      document.body.style.overflow = 'unset';
    } else {
    }
  });

  const boxes = document.querySelectorAll('.box');

  window.addEventListener('scroll', checkBoxes);
  window.addEventListener('resize', checkBoxes);
  checkBoxes();

  function checkBoxes() {
    const triggerBottom = window.innerHeight * 0.85;

    boxes.forEach((box, index) => {
      const boxTop = box.getBoundingClientRect().top;

      if (boxTop < triggerBottom) {
        box.style.transitionDelay = `${index * 0.1}s`;
        box.classList.add('show');
      } else {
        box.style.transitionDelay = `0s`;
        box.classList.remove('show');
      }
    });
  }
});
