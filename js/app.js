// Variables
const btnToggle = document.querySelector('#navegacion__btn-toggle');
const nav = document.querySelector('#navegacion__menu-toggle');
const iconX = document.querySelector('.navegacion__btn-icon')

// Variables para validacion
const inputEmail = document.querySelector('#email');
const button = document.querySelector('#button');
const contenedorInputs = document.querySelector('.contact__inputs');
const er = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

document.addEventListener('DOMContentLoaded', () => {
  iniciarApp();
});

function iniciarApp() {
  validarEmail();
  headerFijo();
  navResponsive();
  scrollNav();
}
function navResponsive() {
  btnToggle.addEventListener('click', () => {
    nav.classList.toggle('navegacion__visible');

    if(nav.classList.contains('navegacion__visible')){
      iconX.classList.remove('fas', 'fa-bars');
      iconX.classList.add('fa-solid', 'fa-x');
    }else{
      iconX.classList.add('fas', 'fa-bars');
      iconX.classList.remove('fa-solid', 'fa-x');
    }
  });
}

function validarEmail() {
  button.addEventListener('click', (e) => {
    e.preventDefault();
    if(!er.test(inputEmail.value)){
      mensajeAlerta('Email no valido', 'error')
    }else{
      mensajeAlerta('Email valido', 'exito')
      setTimeout(() => {
        inputEmail.value = ''
      }, 3000);
    }
  });
}

function mensajeAlerta(mensaje, clase) {
  const parrafo = document.createElement('P')
  parrafo.textContent = mensaje;
  parrafo.classList.add(clase);
  button.style.top = '7.5rem';

  setTimeout(() => {
    parrafo.remove();
    button.style.top = '1.2rem';
  }, 3000);

  contenedorInputs.insertBefore(parrafo, inputEmail)
}

function scrollNav() {
  const enlaces = document.querySelectorAll('.navegacion__menu li a');
  
  enlaces.forEach(enlace => {
    enlace.addEventListener('click', (e) => {
      e.preventDefault();
      const hrefEnlaces = e.target.attributes.href.value;
      const seccion = document.querySelector(hrefEnlaces);
      
      seccion.scrollIntoView({behavior: 'smooth'});

      nav.classList.remove('navegacion__visible');
    });
  })
}

function headerFijo() {
  const header = document.querySelector('.header'); 
  const contact = document.querySelector('.contact__titulo');
  const body = document.querySelector('body')

  window.addEventListener('scroll', () => {
    // console.log(contact.getBoundingClientRect());

    if(contact.getBoundingClientRect().top < 0){
      header.classList.add('header__fijo');
      body.classList.add('body-scroll');

    }else{
      header.classList.remove('header__fijo');
      body.classList.remove('body-scroll');
    }
  });
}