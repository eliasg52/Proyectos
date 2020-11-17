const $listaTareas = document.querySelector('#tasks-list');
const $Input = document.querySelector('#input-task');
const $iconoAgregarTarea = document.querySelector('#icon-add-task');
const $iconoBorrarLista = document.querySelector('#delete-list');

$iconoAgregarTarea.onclick = function () {
  const valorInput = $Input.value;
  if (valorInput === '') {
    advertencia(valorInput);
  } else {
    insertarElementos(valorInput);
    $Input.value = '';
  }
};

$iconoBorrarLista.onclick = function () {
  const $tareas = document.querySelectorAll('.task-list');
  borrarListaCompleta($tareas);
};

$Input.addEventListener('keypress', function (e) {
  const valorInput = $Input.value;
  if (e.key === 'Enter') {
    if (e.currentTarget.value !== '') {
      insertarElementos(valorInput);
      e.currentTarget.value = '';
    }
  } else {
    return '';
  }
  e.preventDefault();
});

function insertarElementos(valorInput) {
  $listaTareas.insertAdjacentHTML(
    'beforeend',
    `<div class="task-list">
        <li class="ml-3">${valorInput}</li>
            <div>
                <i class="fas fa-check mr-1"></i>
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

function advertencia() {
  console.log('Introduce algo por favor');
}

/* botonOk.addEventListener('click', function () {
  console.log('asd');
});
 */
