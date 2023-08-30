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
Para crear numeros como objetos:
~~~
const numero2 = new Number(80); // forma de objeto
console.log(numero2);
~~~
La funcion **Math** es un objeto que tiene varias funciones matematicas como **PI**
~~~
let resultado;
resultado = Math.PI //PI
resultado = Math.round(2.6) //Redondear
resultado = Math.ceil(2.1) //Redondear hacia arriba
resultado = Math.sqrt(2.1) //Raiz cuadrada
resultado = Math.abs(-10) //Valor absoluto
resultado = Math.pow(2,3) //Potencia
resultado = Math.min(2,3,-10,0) //valor minimo de un arreglo
resultado = Math.max(2,3,-10,0) //valor maximo de un arreglo
resultado = Math.random()*10 //Random
resultado = Math.floor(Math.random()*10) //Random de 0 a 10
console.log(resultado);
~~~
Para incrementar o decrementar, se puede hacer de la siguiente forma
~~~
let puntaje = 10;
++puntaje;
puntaje++;
puntaje--;
puntaje +=3; //Aumento de 3 en 3
puntaje -=2;
~~~
Para saber el **tipo de dato**:
~~~
console.log(typeof numero1);
~~~
Validaciones de String
~~~
const numero1 = "20";
const numero2 = "20.2";
const numero3 = "Uno";
const numero4 = 20;

console.log(Number.parseInt(numero1)); //se convierte de string a numero entero
console.log(Number.parseFloat(numero2)); //se convierte de string a numero decimal
console.log(Number.isInteger(numero3)); //valida si es entero y devuelve true o false
~~~
Para comparar dos variables que sean iguales esta el normal **==** y el extricto **===**

Para comparar dos variables diferentes **!=** y el extricto **!==**

cuando una variable es definida como **null** su tipo es un *Objeto*