import Swiper from 'swiper/bundle';

const swp = new Swiper('.cart-slider', {
  slidesPerView: 'auto',
  spaceBetween: 4,
  scrollbar: {
    el: '.cart-scrollbar',
    hide: true,
  },
});

export {swp};
