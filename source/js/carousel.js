import Swiper from 'swiper/bundle';

const swp = new Swiper('.swiper', {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

export {swp};
