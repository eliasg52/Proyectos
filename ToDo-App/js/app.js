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

/* function crearIntegrantes(cantidadIntegrantes) {
  if (cantidadIntegrantes > 0) {
    mostrarBotonCalculo();
  } else {
    resetear();
  }

  for (let i = 0; i < cantidadIntegrantes; i++) {
    crearIntegrante(i);
  }
}

function crearIntegrante(indice) {
  const $div = document.createElement('div');
  $div.className = 'integrante';

  const $label = document.createElement('label');
  $label.textContent = 'Edad del integrante #: ' + (indice + 1);
  const $input = document.createElement('input');
  $input.type = 'number';

  $div.appendChild($label);
  $div.appendChild($input);

  const $integrantes = document.querySelector('#integrantes');
  $integrantes.appendChild($div);
} */

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
