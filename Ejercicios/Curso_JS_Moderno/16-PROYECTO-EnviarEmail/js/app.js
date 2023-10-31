document.addEventListener('DOMContentLoaded', function(){
    const email = {
        email: '',
        asunto: '',
        mensaje: ''
    }
    
    // Seleccionar los elementos de la interface
    const inputEmail = document.querySelector('#email');
    const inputAsunto = document.querySelector('#asunto');
    const inputMensaje = document.querySelector('#mensaje');
    const formulario = document.querySelector('#formulario');
    const btnSubmit = document.querySelector('#formulario button[type="submit"]');
    const btnReset = document.querySelector('#formulario button[type="reset"]');
    const spinner = document.querySelector('#spinner');

    // Asignar eventeos
    /* 
    --------------------------------------------------------------------------------
    inputEmail.addEventListener('blur', function(e) {
        // blur es cuando estoy en un campo y salgo de allí, se dispara el evento
        // input es para cuando se esta escribiendo
        console.log(e.target.value);
    });
    
    inputAsunto.addEventListener('blur', function(e) {
        console.log(e.target.value);
    });
    
    inputMensaje.addEventListener('blur', function(e) {
        console.log(e.target.value);
    });
    --------------------------------------------------------------------------------
    */ 

   // Forma de reducir el anterior script:

   // Asignar eventeos
   inputEmail.addEventListener('input', validar);   
   inputAsunto.addEventListener('input', validar);   
   inputMensaje.addEventListener('input', validar);
   formulario.addEventListener('submit', enviarEmail);
   
   btnReset.addEventListener('click', function(e) {
    e.preventDefault();
    resetFormulario();
   })

   function enviarEmail(e) {
    e.preventDefault();
    spinner.classList.add('flex');
    spinner.classList.remove('hidden');
    
    setTimeout(() => {
        spinner.classList.remove('flex');
        spinner.classList.add('hidden');
        resetFormulario();
        // Crear una alerta
        const alertaExito = document.createElement('P');
        alertaExito.classList.add('bg-green-500', 'text-white', 'p-2', 'text-center', 
        'rounded-lg', 'mt-10', 'font-bold', 'text-sm', 'uppercase');
        alertaExito.textContent = 'Mensaje enviado Correctamente';
        formulario.appendChild(alertaExito);
        setTimeout(() => {
            alertaExito.remove();
        }, 3000);
    }, 3000);
   }
   
   function validar(e) {
    if(e.target.value.trim() === '') {
        // trim() valida si hay espacios en el campo
        // ${e.target.id}, me trae el id, el cual corresponde a: mail, asunto, mensaje, esto para personalizar
        mostrarAlerta(`El campo ${e.target.id} es obligatorio`, e.target.parentElement);
        email[e.target.name] = '';
        comprobarEmail();
        return;
    }
    
    if(e.target.id === 'email' && !validarEmail(e.target.value)) {
        mostrarAlerta('El email no es valido', e.target.parentElement);
        email[e.target.name] = '';
        comprobarEmail();
        return;
    }

    limpiarAlerta(e.target.parentElement);

    // Asignar los valores
    email[e.target.name] = e.target.value.trim().toLowerCase();
    
    // COmprobar el objeto de email
    comprobarEmail()
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

    function validarEmail(email) {
        const regex =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/
        const resultado = regex.test(email)
        return resultado;
    }

    function comprobarEmail() {
        // Captura todos los objetos del arreglo y valida si algunno contiene un string vacio
        if(Object.values(email).includes('')) {
            btnSubmit.classList.add('opacity-50');
            btnSubmit.disabled = true;
            return;
        }
        btnSubmit.classList.remove('opacity-50');
        btnSubmit.disabled = false;
    }

    function resetFormulario() {
        // Reiniciar el objeto
        email.email = '';
        email.asunto = '';
        email.mensaje = '';
        formulario.reset();
        comprobarEmail();
    }
    
});
