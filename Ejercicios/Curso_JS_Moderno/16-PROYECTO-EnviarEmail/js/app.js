document.addEventListener('DOMContentLoaded', function(){
    // Seleccionar los elementos de la interface
    const inputEmail = document.querySelector('#email');
    const inputAsunto = document.querySelector('#asunto');
    const inputMensaje = document.querySelector('#mensaje');
    
    const formulario = document.querySelector('#formulario');

    // Asignar eventeos
    /*
    inputEmail.addEventListener('blur', function(e) {
        // blur es cunado estoy en un campo y salgo de allí, se dispara el evento
        // input es para cuando se esta escribiendo
        console.log(e.target.value);
    });
    
    inputAsunto.addEventListener('blur', function(e) {
        console.log(e.target.value);
    });
    
    inputMensaje.addEventListener('blur', function(e) {
        console.log(e.target.value);
    });
    */
   // Forma de reducir el anterior script:

   // Asignar eventeos
   inputEmail.addEventListener('blur', validar);
   
   inputAsunto.addEventListener('blur', validar);
   
   inputMensaje.addEventListener('blur', validar);
   
   function validar(e) {
    if(e.target.value.trim() === '') {
        // trim() valida si hay espacios en el campo
        // ${e.target.id}, me trae el id, el cual corresponde a: mail, asunto, mensaje, esto para personalizar
        mostrarAlerta(`El campo ${e.target.id} es obligatorio`, e.target.parentElement);
        return;
    }
    limpiarAlerta(e.target.parentElement);

    }

    function mostrarAlerta(mensaje, referencia) {
        // Para no tener mensajes duplicados de error
        limpiarAlerta(referencia);        
        // Generar alerta en HTML, esto es mas complejo que inner, pero este es mas seguro de ataques
        // Creamos un parrafo en HTML
        const error = document.createElement('P');
        // Agregamos contenido al HTML
        error.textContent = mensaje;
        // Agregando estilos
        error.classList.add('bg-red-600', 'text-white', 'p-2', 'text-center');

        // Inyectar el error al formulario
        referencia.appendChild(error)
    }

    function limpiarAlerta(referencia) {
        // Comprobar si ya existe una alerta
        // 'bg-red-600' es porque no existe ninguna mas en el documento
        const alerta = referencia.querySelector('.bg-red-600'); 
        if(alerta) {
            // Eliminoo el anterior.
            alerta.remove();
        }
    }
    
});
