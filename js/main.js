const mySwiper = new Swiper('.swiper-container', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  speed: 400,
  slidesPerView: 2,
  // loopedSlides: 2,

  // Navigation arrows
  navigation: {
    nextEl: '.arrow',
  },
})