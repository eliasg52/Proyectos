document.addEventListener('DOMContentLoaded', function () {
  espaniol.disabled = true;
});

const botonModoOscuro = document.querySelector('.btn-dark-mode');
const tareasParaHacer = document.querySelector('#title-to-do');
const tareasTerminadas = document.querySelector('#title-finished');
const programadoPor = document.querySelector('#coded-by');

const espaniol = document.getElementById('spanish-language');
const ingles = document.getElementById('english-language');

espaniol.onclick = function () {
  this.disabled = true;
  ingles.disabled = false;
  let titulo = document.querySelector('#app-title');
  titulo.textContent = 'Aplicación de Tareas';
  $Input.placeholder = 'Ingresar tarea';
  tareasParaHacer.textContent = 'Tareas a hacer';
  tareasTerminadas.textContent = 'Tareas terminadas';
  programadoPor.textContent = 'Codeado por: ';
};

ingles.onclick = function () {
  espaniol.disabled = false;
  this.disabled = true;
  let titulo = document.querySelector('#app-title');
  titulo.textContent = 'To-Do-App';
  $Input.placeholder = 'Enter Task';
  tareasParaHacer.textContent = 'Tasks to do';
  tareasTerminadas.textContent = 'Finished tasks';
  programadoPor.textContent = 'Coded by: ';
};
