const formulario = document.querySelector('#formulario');
/*
formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log('Consultando...');
    console.log(e.target.action);
})
*/
// Otra forma de hacerlo con una funcion
formulario.addEventListener('submit', validarFormulario);
function validarFormulario(e) {
    e.preventDefault();
    console.log('Consultando...');
    console.log(e.target.action);
}

