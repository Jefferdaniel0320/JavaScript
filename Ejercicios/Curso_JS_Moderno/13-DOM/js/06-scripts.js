const encabezado = document.querySelector('.contenido-hero h1');
console.log(encabezado);

console.log(encabezado.innerText); // Si en el CSS - visibility: hidden; no lo va a encontrar
console.log(encabezado.textContent); // si lo va a encontrar
console.log(encabezado.innerHTML); // Este se trae el HTML

const nuevoHeading = 'Hola mi princesa';
document.querySelector('.contenido-hero h1').textContent = nuevoHeading

// Modificar imagen
// const imagen = document.querySelector('.card img');
// imagen.src = 'img/hacer2.jpg';