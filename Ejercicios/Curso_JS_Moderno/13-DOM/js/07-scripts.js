const encabezado = document.querySelector('h1');

// Como se escribe en JS
encabezado.style.backgroundColor = 'red'; // COlor de fondo
encabezado.style.fontFamily = 'Verdana'; // Tipo de letra
// encabezado.style.textTransform = 'uppercase'; // Mayuscula

// Como se escribe en CSS
// encabezado.style.background-Color = 'red';

const card = document.querySelector('.card'); // se selecciona la calse
card.classList.add('nueva-clase'); // aca se agrega una nueva clase
card.classList.remove('card'); // aca se elimina una de las clases
console.log(card.classList);