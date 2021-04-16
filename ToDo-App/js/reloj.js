function horaActual() {
  const fecha = new Date();
  const horaActual = fecha.toLocaleTimeString();
  const parrafoHora = document.querySelector('#date');
  parrafoHora.textContent = horaActual;
}

document.addEventListener('DOMContentLoaded', function () {
  setInterval(horaActual, 1000);
});
