const $listaTareas = document.querySelector('#tasks-list');
const $listaTareasTerminadas = document.querySelector('#finished-tasks-list');
const $Input = document.querySelector('#input-task');
const $iconoAgregarTarea = document.querySelector('#icon-add-task');
const $iconoBorrarLista = document.querySelector('#delete-list');
const $parrafo = document.querySelector('.warning-text');
let $iconoCheck;
let indiceId = 0;

$iconoAgregarTarea.onclick = function () {
  const valorInput = $Input.value;
  if (valorInput === '') {
    advertencia();
  } else {
    $parrafo.classList.add('hidden');
    insertarElementos(valorInput, indiceId);
    $Input.value = ''; //PONE EL VALOR DEL INPUT VACIO NUEVAMENTE DSP DE AGREGAR UNA TAREA
    indiceId++; //SUMA 1 AL INDICE PARA PODER ASIGNAR VALORES DIFERENTES A LAS TAREAS
    $iconoCheck = document.querySelectorAll('.fa-check');
    console.log($iconoCheck);
    document.querySelector('#tasks-list'); //ACTUALIZO LA LISTA AL MOMENTO DE AGREGAR UNA TAREA
    /*   tareaTerminada($iconoCheck, indiceId); ARREGLAR*/
  }
};

function asd() {
  for (let i = 0; i < $listaTareas.length; i++) {
    console.log($listaTareas[i]);
  }
}

$Input.addEventListener('keypress', function (e) {
  const valorInput = $Input.value;

  if (e.key === 'Enter') {
    if (e.currentTarget.value !== '') {
      $parrafo.classList.add('hidden'); //IMPLEMENTAR EL TOGGLE
      insertarElementos(valorInput, indiceId);
      e.currentTarget.value = '';
      indiceId++;
    } else {
      advertencia();
    }
  } else {
    return '';
  }
  e.preventDefault();
});

$iconoBorrarLista.onclick = function () {
  const $tareas = document.querySelectorAll('.task-list');
  borrarListaCompleta($tareas);
};

function insertarElementos(valorInput, indice) {
  $listaTareas.insertAdjacentHTML(
    'beforeend',
    `<div class="task-list" id="task${indice + 1}">
        <li class="ml-3 mb-1">${valorInput}</li>
            <div>
                <i class="fas fa-check mr-1" id="check${indice + 1}"></i>
                <i class="fas fa-times mr-1"></i>
            </div>
    </div>`
  );
}

function borrarListaCompleta(tareas) {
  for (let i = 0; i < tareas.length; i++) {
    $listaTareas.removeChild(tareas[i]);
  }
}

function tareaTerminada(iconosCheck, indiceId) {
  for (let counter = 0; counter < iconosCheck.length; counter++) {
    iconosCheck[counter].addEventListener('click', function () {
      for (tarea of $listaTareas) {
        $listaTareasTerminadas.append(tarea);
      }
      /* console.log(`mi id es ${iconosCheck[counter].id}`); */
      // const $tarea =
      // $listaTareasTerminadas.append(document.querySelector('#task' + indiceId));

      /*  const $icono = document.querySelector('.fa-check');
      $icono.classList.remove('fa-check'); */
      /*  document.querySelector('#finished-tasks-list'); */
      tareas = document.querySelector('#task' + indiceId);
    });
  }
}

function advertencia() {
  $$parrafo.classList.remove('hidden');
}
