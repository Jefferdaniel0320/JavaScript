const navegacion = document.querySelector('.navegacion');

// console.log(navegacion);
// console.log(navegacion.childNodes); // Los espacios en blanco son considerados elementos
// console.log(navegacion.children); // Este lista los elementos reales.
// console.log(navegacion.children[0].nodeType); // Este lista los elementos reales.
// console.log(navegacion.children[0].nodeName); // Este lista los elementos reales.

// Para traer el primer y ultimo elemento de la navegacion
// console.log(navegacion.firstElementChild);
// console.log(navegacion.lastElementChild);

const card = document.querySelector('.card');
card.children[1].children[0].innerHTML = "Marvell" // con esto reemplazo el texto
card.children[1].children[1].innerHTML = "Iron Man"
card.children[1].children[2].innerHTML = "USD $ 1.000.000"
card.children[0].src = 'img/IronMan.jpg' // con esto reemplazo la imagen
// console.log(card.children[0]);
// console.log(card.children[1].children[1].textContent);

// card.children[1].children[1].textContent = 'Nuevo heading desde travesing the dom'

// como acceder a la imagen
// const imagen = document.querySelector('.card');
// console.log(imagen.children[0].src)

// Como se cambia la imagen
// imagen.children[0].src = 'img/hacer2.jpg';

// Traversing the hijo al padre
// console.log(card.parentElement.parentElement.parentElement)

// Como seleccionar los diferentes hijos con nextElementSibling
// console.log(card); // Hojo 1
// console.log(card.nextElementSibling); // Hojo 2
// console.log(card.nextElementSibling.nextElementSibling); // Hojo 3

// Seleccionar hijos de otra forma
// const ultimoHijo = document.querySelector('.card:nth-child(3)');
// console.log(ultimoHijo);

// Consultar penultimo hijo
// console.log(ultimoHijo.previousElementSibling);

