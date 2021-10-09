import Swiper from 'swiper/bundle';

export const cartCarousel = new Swiper('.cart-slider', {
  slidesPerView: 'auto',
  spaceBetween: 4,
  scrollbar: {
    el: '.cart-scrollbar',
    dragClass: 'cart-scrollbar-drag',
    dragSize: 43,
    hide: false,
  },
});
