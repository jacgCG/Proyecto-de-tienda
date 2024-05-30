// Archivo: funciones.js

let slideIndex = {
  'productos': 0,
  'categorias': 0,
  'historial-compras': 0,
  'historial-ventas': 0,
  'ofertas': 0
};

function moveSlider(sectionId, direction) {
  const slider = document.getElementById(`${sectionId}-slider`);
  const slides = slider.getElementsByClassName('slide');
  const totalSlides = slides.length;

  slideIndex[sectionId] += direction;

  if (slideIndex[sectionId] >= totalSlides) {
      slideIndex[sectionId] = 0;
  } else if (slideIndex[sectionId] < 0) {
      slideIndex[sectionId] = totalSlides - 1;
  }

  slider.style.transform = `translateX(-${slideIndex[sectionId] * 100}%)`;
}
