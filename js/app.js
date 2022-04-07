// Variables
const btnToggle = document.querySelector('#navegacion__btn-toggle');
const nav = document.querySelector('#navegacion__menu-toggle');

// Variables para validacion
const inputEmail = document.querySelector('#email');
const button = document.querySelector('#button');
const contenedorInputs = document.querySelector('.contact__inputs');
const er = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

btnToggle.addEventListener('click', () => {
  nav.classList.toggle('navegacion__visible');
});

button.addEventListener('click', (e) => {
  e.preventDefault();
  if(!er.test(inputEmail.value)){
    mensajeAlerta('Email no valido', 'error')
  }else{
    mensajeAlerta('Email valido', 'exito')
  }
});

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