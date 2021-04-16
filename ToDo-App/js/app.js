const $listaTareas = document.querySelector('#tasks-list');
const $listaTareasTerminadas = document.querySelector('#finished-tasks-list');
const $Input = document.querySelector('#input-task');
const $iconoAgregarTarea = document.querySelector('#icon-add-task');
const $iconoBorrarLista = document.querySelectorAll('.fa-trash-alt');
const $iconoBorrarListaTerminadas = document.querySelector(
  '#delete-list-finished'
);
const $parrafo = document.querySelector('.warning-text');
let indiceId = 0;

$iconoAgregarTarea.addEventListener('click', function () {
  const valorInput = $Input.value;
  if (valorInput === '') {
    advertencia();
  } else {
    $parrafo.classList.add('hidden');
    insertarElementos(valorInput, indiceId);
    $Input.value = ''; //PONE EL VALOR DEL INPUT VACIO NUEVAMENTE DSP DE AGREGAR UNA TAREA
    indiceId++; //SUMA 1 AL INDICE PARA PODER ASIGNAR VALORES DIFERENTES A LAS TAREAS
    document.querySelector('#tasks-list'); //ACTUALIZO LA LISTA AL MOMENTO DE AGREGAR UNA TAREA
    document.querySelector('#finished-tasks-list'); //ACTUALIZO LA LISTA AL MOMENTO DE AGREGAR UNA TAREA
    tareaTerminada();
    borrarTarea();
    borrarListas($iconoBorrarLista);
  }
});

$Input.addEventListener('keypress', function (e) {
  const valorInput = $Input.value;

  if (e.key === 'Enter') {
    if (e.currentTarget.value !== '') {
      $parrafo.classList.add('hidden'); //IMPLEMENTAR EL TOGGLE
      insertarElementos(valorInput, indiceId);
      e.currentTarget.value = '';
      indiceId++;
      tareaTerminada();
      borrarTarea();
      borrarListas($iconoBorrarLista);
    } else {
      advertencia();
    }
  } else {
    return '';
  }
  e.preventDefault();
});

function tareaTerminada() {
  let $iconosCheck = document.querySelectorAll('.fa-check');
  $iconosCheck.forEach((icono) => {
    icono.addEventListener('click', function (e) {
      let $nodoParaMover = e.target.parentNode.parentNode;
      $listaTareasTerminadas.insertAdjacentElement(
        //MUEVE EL ELEMENTO A LA LISTA TAREAS TERMINADAS
        'afterbegin',
        $nodoParaMover
      );
      $nodoParaMover.classList.add('task-list-finished');
      $nodoParaMover.classList.remove('task-list');
      e.target.remove(); //SACA EL ICONO DEL TILDE DE LA LISTA TAREAS TERMINADAS
    });
  });
}

function borrarTarea() {
  let $iconosEliminar = document.querySelectorAll('.fa-times');
  $iconosEliminar.forEach((icono) => {
    icono.addEventListener('click', function (e) {
      let $nodoParaMover = e.target.parentNode.parentNode;
      $nodoParaMover.remove(); //ELIMINA LA TAREA
    });
  });
}

function borrarListas(iconos) {
  iconos.forEach((icono) => {
    icono.addEventListener('click', function (e) {
      let tareas = document.querySelectorAll('.task-list');
      let tareasTerminadas = document.querySelectorAll('.task-list-finished');

      if (e.target.id === 'delete-list') {
        borrarElementosLista(tareas);
      } else {
        borrarElementosLista(tareasTerminadas);
      }
    });
  });
}

function borrarElementosLista($lista) {
  for (tarea of $lista) {
    tarea.remove();
  }
}

function insertarElementos(valorInput, indice) {
  $listaTareas.insertAdjacentHTML(
    'beforeend',
    `<div class="task-list task-style" id="task${indice + 1}">
        <li class="ml-3 mb-1">${valorInput}</li>
            <div>
                <i class="fas fa-check mr-1" id="check${indice + 1}"></i>
                <i class="fas fa-times mr-1"></i>
            </div>
    </div>`
  );
}

function advertencia() {
  $parrafo.classList.remove('hidden');
}

function horaActual() {
  const fecha = new Date();
  const horaActual = fecha.toLocaleTimeString();
  const parrafoHora = document.querySelector('#date');
  parrafoHora.textContent = horaActual;
}

document.addEventListener('DOMContentLoaded', function () {
  setInterval(horaActual, 1000);
});
