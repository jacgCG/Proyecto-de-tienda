const selectCategorias = document.getElementById('select-categorias');

selectCategorias.addEventListener('mouseover', () => {
  selectCategorias.style.display = 'block';
});

selectCategorias.addEventListener('mouseout', () => {
  selectCategorias.style.display = 'none';
});