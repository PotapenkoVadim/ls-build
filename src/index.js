import Swiper from 'swiper';
import L from 'leaflet';

import 'swiper/css';
import '../node_modules/leaflet/dist/leaflet.css';

import './index.html';
import './styles/global.css';

import geoMarker from './static/images/geo.svg';
import geoShop from './static/images/geo-shop.svg';
import geoMedicine from './static/images/geo-medicine.svg';

// mobile menu
const mobileMenu = document.querySelector('.header__menu');
const header = document.querySelector('.header');

mobileMenu.addEventListener('click', () => {
  mobileMenu.classList.toggle('header__menu_changed');
  header.classList.toggle('header_mobile-active');
});


// sliders
new Swiper('#cardsSwiper', {
  slidesPerView: 4,
  spaceBetween: 70,
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
      spaceBetween: 70,
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

// map
const GEO_MARKERS = {
  default: [51.505, -0.09],
  shop: [51.495, -0.09],
  medicine: [51.505, -0.14]
}
const map = L.map('map').setView(GEO_MARKERS['default'], 13);

const defaultMarker = L.icon({ iconUrl: geoMarker });
const shopMarker = L.icon({ iconUrl: geoShop });
const medicineMarker = L.icon({ iconUrl: geoMedicine });

const markers = document.querySelectorAll('.map__sticker');

[...markers].map(item => (
  item.addEventListener('click', function() {
    map.flyTo(GEO_MARKERS[this.dataset.type]);
  })
));

L.marker(GEO_MARKERS['default'], { icon: defaultMarker }).addTo(map);
L.marker(GEO_MARKERS['shop'], { icon: shopMarker }).addTo(map);
L.marker(GEO_MARKERS['medicine'], { icon: medicineMarker }).addTo(map);


