import './index.html';
import './styles/global.css';

const mobileMenu = document.querySelector('.header__menu');
const header = document.querySelector('.header');

mobileMenu.addEventListener('click', () => {
  mobileMenu.classList.toggle('header__menu_changed');
  header.classList.toggle('header_mobile-active')
});
