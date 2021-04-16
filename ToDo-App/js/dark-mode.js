const $btnDark = document.querySelector('.btn-dark-mode');

$btnDark.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');

  if (document.body.className === 'dark-mode') {
    $btnDark.innerHTML = `Normal Mode <i class="far fa-sun"></i>
    `;
  } else {
    $btnDark.innerHTML = `Dark Mode <i class="far fa-moon"></i>
    `;
  }
});
