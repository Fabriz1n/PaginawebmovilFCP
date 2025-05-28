// Menú desplegable móvil
function toggleMenu() {
  document.getElementById('menu').classList.toggle('show');
}

document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.dropdown-toggle');
  const submenu = document.querySelector('.has-dropdown .dropdown');

  toggle?.addEventListener('click', function (e) {
    e.preventDefault();
    submenu.classList.toggle('show');
  });

  document.addEventListener('click', function (e) {
    if (!e.target.closest('.has-dropdown')) {
      submenu.classList.remove('show');
    }
  });
});

let currentIndex = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove('active');
    if (i === index) slide.classList.add('active');
  });
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  showSlide(currentIndex);
}

// Activar el carrusel automático cada 4 segundos
document.addEventListener('DOMContentLoaded', () => {
  showSlide(currentIndex);
  setInterval(nextSlide, 4000); // 4 segundos
});

