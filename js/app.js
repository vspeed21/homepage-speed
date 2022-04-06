// Variables
const btnToggle = document.querySelector('#navegacion__btn-toggle');
const nav = document.querySelector('#navegacion__menu-toggle');

btnToggle.addEventListener('click', () => {
  nav.classList.toggle('navegacion__visible');
});