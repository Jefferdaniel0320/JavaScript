// Declaracion de funcion
sumar();
function sumar() {
    console.log(2+2);
}


// Expresión de Función (Funtion Expression)
sumar2(); // Este no va a funcionar, deberia estar despues de crear la variable.
const sumar2 = function() {
    console.log(3+3);
}

