const mySwiper = new Swiper('.swiper-container', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  speed: 400,
  slidesPerView: 1,
  breakpoints: {
    541: {
      slidesPerView: 2
    }
  },
  // Navigation arrows
  navigation: {
    nextEl: '.arrow',
  },
})

const menuButton = document.querySelector('.menu-button'),
  menu = document.querySelector('.header');

menuButton.addEventListener('click', () => {
  menu.classList.toggle('header-active');
  menuButton.classList.toggle('menu-button-active');
})