<p align="center">
  <a target="blank"><img src="https://www.freepnglogos.com/uploads/javascript-png/javascript-logo-transparent-logo-javascript-images-3.png" alt="Javascript Logo @clipartmax.com" width="200" alt="JavaScript" /></a>
</p>

# CURSO JAVASCRIPT MODERNO

Se recomienda colocar la etiqueta **script** despues de finalizar el div: 
~~~
</div>
<script>
        alert('Hola Mundo!');
</script>
~~~
Pero lo mas aconsejable es usar un archivo aparte desde una carpeta:
~~~
<script src="js/app.js"></script>
~~~
Para crear variables, var, let y const, const no se pueden reasignar, las otras dos si, ademas const se debe incializar:

Para colocar cadena de caracteres especiales en el texto
~~~
const producto = "monitor 20\"";
~~~
Para saber la cantidad de letras en un string
~~~
console.log(producto.length);
~~~
Conocer si la palabra se encuentra en el string y devuelve la posición:
~~~
console.log(producto.index0f('Monitor'));
~~~
Conocer si existe la palabra exacta en el string y devuelve un booleano
~~~
console.log(producto.includes('Monitor'));
~~~
Para concatenar:
~~~
const producto = 'Monitor 20 Pulgadas ';
const precio = '30 USD';
console.log(producto.concat(precio));
console.log(producto.concat('en descuento'));
console.log("El producto " + producto + "tiene un precio de " + precio);
// Otra forma de hacerlo:
console.log(`El Producto ${producto} tiene un precio de $ ${precio}`);
~~~
Para eliminar el espacio en las cadenas:
~~~
const producto = "             Monitor 20 Pulgadas       ";
console.log(producto.length)
// Eliminar espacio en blanco:
// Eliminar al inicio:
console.log(producto.trimStart());
// Eliminar al final:
console.log(producto.trimEnd());
// Eliminar ambos:
console.log(producto.trimStart().trimEnd());
// Eliminar ambos version antigua:
console.log(producto.trim());
~~~
Para reemplazar texto:
~~~
const producto = "Monitor 20 Pulgadas";
console.log(producto.replace('Pulgadas', '"'));
~~~

Para cortar texto, cabe aclarar que la difercia entre **slice** y **substring** es que el dsegundo reorganiza para recortar y el primero no trae nada cuando las variables se colocan de mayor a menor:
~~~
console.log(producto.slice(0,10));
console.log(producto.slice(2,1)); // null
console.log(producto.substring(0,10));
console.log(producto.substring(2,1)); // reorganiza
console.log(producto.charAt(0)); // trae la primera letra
~~~
Para repetir un texto
~~~
const texto = ' en promocion' .repeat(2.9);// se redondea hacia 2
console.log(`${producto} ${texto} !!!`)
~~~
Para separar:
~~~
const actividad = "Estoy aprendiendo javaScript Moderno";
console.log(actividad.split(" "))
// Respuesta: ['Estoy','aprendiendo','javascript','Moderno']
~~~
Para pasar de minusculas a mayusculas:
~~~
console.log(producto.toUpperCase())
~~~
Para pasar de mayusculas a minusculas:
~~~
console.log(producto.toLocaleLowerCase())
~~~
Para convertir un numero a string:
~~~
const precio = 300;
console.log(precio);
console.log(precio.toString());
~~~
