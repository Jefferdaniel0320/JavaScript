const busqueda = document.querySelector('.busqueda'); // ubicamos clase busqueda
busqueda.addEventListener('input', (evento) => {  
    if(evento.target.value === '') { // Forma de validar lo que se escribio
        console.log('fallo la validación');
    }
}) // Agregamos el evento

// keydown => cuando escribo una tecla.
// keyup =>  CUando escribo una tecla pero la suelto.
// blur => Cuando doy click afuera del formulario.
// copy => Cuando copio el texto del formulario.
// paste => Cuando pego algo en el formulario.
// cute => Cuando corto algo en el texto del formulario.
// input => se activa con las acciones anteriores, exepto blur, es todo en 1