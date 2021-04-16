const $btnDark = document.querySelector('.btn-dark-mode');

$btnDark.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');

  if (document.body.className === 'dark-mode') {
    $btnDark.innerHTML = `Modo Claro<i class="far fa-sun"></i>
    `;
  } else {
    $btnDark.innerHTML = `Modo Oscuro<i class="far fa-moon"></i>
    `;
  }
});
