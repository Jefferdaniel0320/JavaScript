const nav = document.querySelector('.navegacion');

// Registrar un evento
// nav.addEventListener('click', () => {
//     console.log('Click en nav');
// })
nav.addEventListener('mouseenter', () => {
    console.log('Entrando a la navegacion');
    nav.style.backgroundColor = 'transparent';
})
nav.addEventListener('mouseout', () => {
    console.log('Saliendo de la navegacion');
    nav.style.backgroundColor = 'black';
})

// mousedown - similar a click
// dblclick - doble click
// mouseup - cuando sueltas el mouse
