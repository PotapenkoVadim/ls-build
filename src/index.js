import Swiper from 'swiper';
import 'swiper/css';

import './index.html';
import './styles/global.css';

const mobileMenu = document.querySelector('.header__menu');
const header = document.querySelector('.header');

mobileMenu.addEventListener('click', () => {
  mobileMenu.classList.toggle('header__menu_changed');
  header.classList.toggle('header_mobile-active');
});

new Swiper('#cardsSwiper', {
  slidesPerView: 4,
  spaceBetween: 40,
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 40,
    },
    780: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
  },
});

new Swiper('#featuresSwiper', {
  slidesPerView: 4,
  spaceBetween: 10,
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 40,
    },
    780: {
      slidesPerView: 1,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 10,
    },
  },
});
