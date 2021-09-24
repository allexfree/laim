import Swiper from 'swiper/bundle';

const swp = new Swiper('.cart-slider', {
  slidesPerView: 'auto',
  spaceBetween: 4,
  scrollbar: {
    el: '.cart-scrollbar',
    dragClass: 'cart-scrollbar-drag',
    dragSize: 43,
    hide: false,
  },
});

export {swp};
