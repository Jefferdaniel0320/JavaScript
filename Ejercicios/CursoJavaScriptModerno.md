<p align="center">
  <a target="blank"><img src="https://www.freepnglogos.com/uploads/javascript-png/javascript-logo-transparent-logo-javascript-images-3.png" alt="Javascript Logo @clipartmax.com" width="200" /></a>
</p>
<p align="center">
  <strong><span style="font-size: 30px;">CURSO JAVASCRIPT MODERNO</span></strong>
</p>

Se recomienda colocar la etiqueta **script** despues de finalizar el div: 
~~~
</div>
<script>
        alert('Hola Mundo!');
</script>
~~~
Lo más recomendable es utilizar un archivo aparte desde una carpeta:

~~~
html
<script src="js/app.js"></script>
~~~
Para crear variables en JavaScript, tienes tres opciones: var, let y const. Mientras const no permite la reasignación de valores, var y let sí lo permiten. Además, es importante mencionar que const debe inicializarse al declararla.

Para incluir cadenas de caracteres especiales en un texto, simplemente enciérralas en comillas:
~~~
const producto = "monitor 20\"";
~~~
Para saber la cantidad de letras en un string
~~~
console.log(producto.length);
~~~
Conocer si la palabra se encuentra en el string y devuelve la posición:
~~~
console.log(producto.indexOf('Monitor'));
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
// Otra forma de hacerlo (utilizando template literals):
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
Para convertir un numero a **string**:
~~~
const precio = 300;
console.log(precio); // 300 (tipo de dato número)
console.log(precio.toString()); // '300' (tipo de dato cadena)
~~~
Para crear numeros como objetos:
~~~
const numero2 = new Number(80); // forma de objeto
console.log(numero2); // [Number: 80]
~~~
La funcion **Math** es un objeto que tiene varias funciones matematicas como **PI**
~~~
let resultado;

resultado = Math.PI; // Valor de PI
resultado = Math.round(2.6); // Redondear
resultado = Math.ceil(2.1); // Redondear hacia arriba
resultado = Math.sqrt(2.1); // Raíz cuadrada
resultado = Math.abs(-10); // Valor absoluto
resultado = Math.pow(2, 3); // Potencia
resultado = Math.min(2, 3, -10, 0); // Valor mínimo de un arreglo
resultado = Math.max(2, 3, -10, 0); // Valor máximo de un arreglo
resultado = Math.random() * 10; // Número aleatorio entre 0 y 10
resultado = Math.floor(Math.random() * 10); // Número aleatorio entero entre 0 y 9

console.log(resultado);
~~~
Para incrementar o decrementar, se puede hacer de la siguiente forma
~~~
let puntaje = 10;

++puntaje; // Incrementar en 1 (11)
puntaje++; // Incrementar en 1 (12)
puntaje--; // Decrementar en 1 (11)
puntaje += 3; // Aumentar en 3 (14)
puntaje -= 2; // Disminuir en 2 (12)
~~~
Para saber el **tipo de dato**:
~~~
const numero1 = 10;
console.log(typeof numero1); // "number"
~~~
Este código utiliza las funciones Number.parseInt, Number.parseFloat, y Number.isInteger para realizar conversiones y validaciones de cadenas de texto a números.
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
Los booleanos son de tipo objeto, al comparar esto
~~~
const boolean1 = true;
const boolean2 = "true";
console.log(boolean1 === boolean2) // Respuesta: falsa
~~~
Forma correcta de escribir booleanos:
~~~
const autenticado = true;

if (autenticado) {
    console.log('Si puedes ver Netflix');
} else {
    console.log('No, no puedes verlo');
}
// Forma de Operador Ternario
console.log(autenticado ? 'si esta autenticado' : 'No esta autenticado')
~~~
## objetos
Los objetos en JavaScript son estructuras de datos que permiten almacenar y organizar información relacionada en pares clave-valor. Cada propiedad (clave) de un objeto está asociada a un valor, lo que facilita la agrupación y manipulación de datos de manera estructurada. Los objetos pueden contener propiedades que representen diversos tipos de datos, como números, cadenas de texto, funciones y otros objetos, lo que los convierte en una característica fundamental para la programación en JavaScript.
~~~
const producto = {
    nombre: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true
}

console.log(producto); // Muestra todo el objeto
console.log(producto.nombre); // Accede a la propiedad 'nombre'
console.log(producto['nombre']); // Otra forma de acceder a la propiedad 'nombre'
~~~
Agregar nuevas propiedades a un objeto en JavaScript utilizando la notación de punto o la notación de corchetes, y también puedes eliminar propiedades existentes con el operador delete. Aquí tienes un resumen de cómo hacerlo:
~~~
// Agregar nuevas propiedades al objeto
producto.imagen = 'imagen.jpg'; // Notación de punto
// o
producto['imagen'] = 'imagen.jpg'; // Notación de corchetes


// Eliminar ls propiedad disponible
delete producto.disponible;
~~~
Forma de extraer las propiedades y uso de Destructuring
~~~
// Antes de ES6 se extraia la propiedad de esta forma
const nombre1 = producto.nombre;
console.log(nombre1);

// Ahora se extrae con Destructuring
const {nombre, precio} = producto;
console.log(nombre);
console.log(precio);
~~~
Objetos dentro de Objetos
~~~
const producto = {
    nombre: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true,
    informacion: {
        medidas: {
            peso: '1Kg',
            medida:'1m' 
        },
        fabricacion: {
            pais: 'China'
        }
    }
}
console.log(producto.informacion.fabricacion.pais);
~~~
El código que proporcionaste demuestra cómo puedes utilizar la desestructuración para acceder a propiedades anidadas de un objeto en JavaScript. Es una forma eficiente y legible de extraer valores de objetos anidados
~~~
const { nombre, informacion, informacion: { fabricacion: { pais } } } = producto;

console.log(nombre); // Muestra el nombre del producto
console.log(informacion); // Muestra el objeto 'informacion' completo
console.log(pais); // Muestra el país de fabricación ('China' en este caso)
~~~
Cuando se requiere que el codigo sea extricto, en las buenas practicas, se usa **"use strict"** y para congelar el acceso a un objeto se usa **Object.freeze(producto)** 

1. **"use strict"**: La declaración "use strict" se utiliza para habilitar el modo estricto en JavaScript, que impone reglas adicionales y más rigurosas al código. Esto ayuda a evitar errores comunes y hace que el código sea más seguro y robusto. Es una buena práctica incluir "use strict" al comienzo de tus archivos JavaScript.

2. **Object.freeze()**: El método Object.freeze() se utiliza para congelar un objeto en JavaScript. Cuando un objeto está congelado, no se pueden agregar, eliminar ni modificar sus propiedades existentes. Esto puede ser útil para evitar modificaciones accidentales en objetos críticos o inmutables.
~~~
"use strict";

const producto = {
    nombre: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true
};

Object.freeze(producto); // Congela el objeto 'producto'

console.log(producto); // Muestra el objeto 'producto'
console.log(Object.isFrozen(producto)); // Verifica si el objeto 'producto' está congelado (true en este caso)
~~~
* Object.seal() se utiliza para sellar un objeto en JavaScript.
* Cuando un objeto está sellado, no se pueden agregar ni eliminar propiedades, pero se pueden modificar las propiedades existentes.
* Puedes verificar si un objeto está sellado utilizando Object.isSealed().
~~~
"use strict";

const producto = {
    nombre: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true
};

Object.seal(producto); // Sella el objeto 'producto'

producto.disponible = false; // Modificar una propiedad existente es permitido
// producto.descripcion = "Nuevo producto"; // Esto daría un error si se intentara agregar una nueva propiedad

console.log(Object.isSealed(producto)); // Valida si el objeto 'producto' está sellado (true en este caso)
~~~
Dos formas de copiar Objetos:
1. **Usando Object.assign()**: se utiliza para copiar propiedades de uno o más objetos a un objeto de destino.
Puede modificar un objeto de destino existente o crear uno nuevo.
Si se copian propiedades de múltiples objetos, las propiedades del último objeto sobrescribirán las anteriores si tienen el mismo nombre.
2. **Usando el operador de propagación (...)**: se utiliza para copiar todas las propiedades de un objeto a otro.
Es una forma más concisa y moderna de copiar objetos en comparación con Object.assign().
Crea un nuevo objeto sin modificar los objetos originales.
~~~
const producto = {
    nombre: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true
};

const medidas = {
    peso: '1Kg',
    medida: '1m'
};

console.log(producto);
console.log(medidas);

// Primera forma de copiar objetos usando Object.assign()
const resultado = Object.assign({}, producto, medidas);

// Segunda forma de copiar objetos usando el operador de propagación (...)
const resultado2 = { ...producto, ...medidas };

console.log(resultado);
console.log(resultado2);
~~~
La palabra reservada **this** se utiliza para hacer referencia a los valores dentro del mismo objeto en JavaScript. Aquí se muestra un ejemplo de su uso:
En este código, la función mostrarInfo utiliza this para acceder a las propiedades nombre y precio dentro del objeto producto. Esto permite mostrar información específica del objeto en el mensaje de registro por consola.
~~~
const producto = {
    nombre: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true,
    mostrarInfo: function() {
        console.log(`El producto: ${this.nombre} tiene un precio de: ${this.precio}`);
    }
}

producto.mostrarInfo();
~~~
Un **objeto constructor** se utiliza en JavaScript para crear múltiples instancias de un tipo de objeto. Aquí tienes un resumen de cómo se usa un objeto constructor:
~~~
// Object Literal (Objeto Literal)
const producto = {
    nombre: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true,
}

// Object Constructor (Constructor de Objetos)
function Producto(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
    this.disponible = true;
}

// Crear instancias de Producto usando el constructor
const producto2 = new Producto("Monitor 24 Pulgadas", 500);
console.log(producto2);

const producto3 = new Producto("Monitor 30 Pulgadas", 100);
console.log(producto3);
~~~
**Object.keys()**, **Object.values()**, y **Object.entries()** son métodos útiles para trabajar con objetos en JavaScript y obtener información sobre sus propiedades. Aquí tienes un resumen de cómo se utilizan:

- **Object.keys()**: Retorna un array con las llaves (nombres de propiedades) de un objeto. Puede ser útil para validar si un objeto tiene propiedades o para iterar sobre sus propiedades.

- **Object.values()**: Retorna un array con los valores de las propiedades de un objeto. Esto puede ser útil para acceder a los valores de un objeto de manera eficiente.

- **Object.entries()**: Retorna un array de arrays, donde cada subarray contiene una pareja clave-valor (llave-valor) del objeto. Esto puede ser útil para iterar sobre todas las propiedades del objeto o para convertir el objeto en una estructura que sea fácil de trabajar.

Aquí está el resumen con el código de ejemplo:
~~~
// Object Literal
const producto = {
    nombre: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true,
}

console.log(Object.keys(producto)); // Retorna las llaves (nombres de propiedades)
console.log(Object.values(producto)); // Retorna los valores de las propiedades
console.log(Object.entries(producto)); // Retorna todas las parejas clave-valor
~~~
## ARREGLOS
Los **Arreglos** en JavaScript se representan utilizando corchetes **[]**. Aquí tienes un resumen de cómo declarar arreglos y algunos ejemplos:
~~~
// Declarar un arreglo de números
const numeros = [10, 20, 30]; // Esto es un arreglo

// Otra forma de declarar un arreglo
const meses = new Array('Enero', 'Febrero', 'Marzo');

// Declarar un arreglo que contiene datos de diversos tipos
const deTodo = ['Hola', 10, true, "Si", null, { nombre: 'Jeferson', trabajo: 'Ing, Telecomunicaciones' }];

console.log(deTodo); // Muestra el arreglo 'deTodo' completo
~~~
Para acceder a los elementos de un arreglo en JavaScript, puedes hacerlo de manera individual o específica utilizando su índice. Aquí tienes un resumen de cómo se realiza esto:
~~~
const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'];

console.table(meses[1]); // Accede al elemento en la posición 1 (Febrero)

// Obtener la longitud del arreglo
console.log(meses.length); // Muestra la longitud del arreglo

// Recorrer el arreglo y mostrar sus elementos
for (let i = 0; i < meses.length; i++) {
    console.log(meses[i]);
}
~~~
Para modificar un elemento existente en un arreglo o agregar uno nuevo, puedes hacerlo asignando un valor a una posición específica del arreglo. 
En este código, se modifica el primer elemento del arreglo meses y se agrega un nuevo elemento en la posición 10. Es importante tener en cuenta que si saltas posiciones al agregar un elemento, las posiciones intermedias se llenarán con undefined. Por lo tanto, meses tendrá elementos undefined en las posiciones del 6 al 9.
~~~
const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'];

// Modificar un elemento existente en el arreglo
meses[0] = 'Nuevo mes'; // Modifica el primer elemento

// Agregar un nuevo elemento al arreglo
meses[10] = 'Penúltimo mes'; // Agrega un elemento en la posición 10
~~~
Para agregar nuevos elementos a un arreglo en la última posición o en la primera, puedes utilizar los métodos **push()** y **unshift()**, respectivamente.
En este código, se utiliza push() para agregar elementos al final del arreglo carrito y unshift() para agregar elementos al principio del mismo. Esto permite controlar la posición en la que se agregan los elementos en el arreglo.
~~~
const carrito = [];

// Definir productos
const producto = {
    nombre: 'Monitor 32 Pulgadas',
    precio: 400
};

const producto2 = {
    nombre: 'Celular',
    precio: 800
};

const producto3 = {
    nombre: 'Teclado',
    precio: 50
};

carrito.push(producto); // Agregar al final del arreglo
carrito.push(producto2);
carrito.unshift(producto3); // Agregar al principio del arreglo

console.table(carrito); // Mostrar el contenido del arreglo

~~~
Utilizando la forma declarativa para agregar elementos a un arreglo, puedes crear una nueva matriz (array) que incluya los elementos existentes junto con los nuevos elementos que deseas agregar. Aquí tienes un resumen de cómo hacerlo:
En este código, se utiliza la sintaxis de propagación (...) para crear una nueva matriz (resultado) que incluye los elementos existentes del carrito junto con los nuevos productos que deseas agregar. Esto permite mantener el arreglo original (carrito) intacto y crear una versión actualizada con los elementos adicionales.
~~~
const carrito = [];

const producto = {
    nombre: 'Monitor 32 Pulgadas',
    precio: 400
}

const producto2 = {
    nombre: 'Celular',
    precio: 800
}

const producto3 = {
    nombre: 'Teclado',
    precio: 50
}

let resultado;

// Agregar el primer producto al arreglo 'resultado'
resultado = [...carrito, producto];

// Agregar el segundo producto al arreglo 'resultado'
resultado = [...resultado, producto2];

// Agregar el tercer producto al principio del arreglo 'resultado'
resultado = [producto3, ...resultado];
~~~
Para eliminar elementos de un arreglo en JavaScript, puedes utilizar los métodos **pop()** y **shift()**. Aquí tienes un resumen de cómo se utilizan ambos métodos:

- **pop()**: Elimina el último elemento del arreglo y lo retorna. Esto reduce la longitud del arreglo en uno.
- **shift()**: Elimina el primer elemento del arreglo y lo retorna. Esto también reduce la longitud del arreglo en uno.
~~~
const carrito = ['Producto 1', 'Producto 2', 'Producto 3'];

// Eliminar el último elemento del arreglo
const ultimoProducto = carrito.pop();
console.log(ultimoProducto); // Muestra 'Producto 3'
console.table(carrito); // Muestra el arreglo sin el último elemento

// Eliminar el primer elemento del arreglo
const primerProducto = carrito.shift();
console.log(primerProducto); // Muestra 'Producto 1'
console.table(carrito); // Muestra el arreglo sin el primer elemento
~~~
Puedes eliminar elementos de un arreglo de forma declarativa utilizando el método splice(). Este método te permite especificar la posición y la cantidad de elementos que deseas eliminar. Aquí tienes un resumen de cómo se utiliza:
~~~
const carrito = ['Producto 1', 'Producto 2', 'Producto 3'];

// Eliminar un elemento de la posición 2 (tercer elemento)
carrito.splice(2, 1);

console.table(carrito); // Muestra el arreglo sin el elemento eliminado
~~~
En JavaScript, el **destructuring** para objetos utiliza las llaves {} para asignar variables a las propiedades del objeto. En cambio, el destructuring para arreglos utiliza corchetes [] para asignar variables a los elementos del arreglo.

En el destructuring de arreglos puedes asignar el nombre que desees a las variables, mientras que en el destructuring de objetos debes usar el nombre de la propiedad del objeto que deseas asignar a la variable.
~~~
const producto = {
    nombre: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true
}

// Destructuring de un objeto
const { nombre } = producto;
console.log(nombre); // Muestra "Monitor 20 Pulgadas"
~~~
Destructuring en Arreglos:
~~~

const numeros = [10, 20, 30, 40];

// Destructuring de un arreglo
const [primero] = numeros;
console.log(primero); // Muestra 10

const [, , tercero] = numeros;
console.log(tercero); // Muestra 30

// Este se usa mucho en Reac, es un Destructuring de arreglos
const [primero, ...tercero] = numeros;
console.log(primero); // Muestra 10
console.log(tercero); // Muestra [20, 30, 40]
~~~
Forma de iterar un array con ForEach es igual al for.
~~~
const carrito = [
    { nombre : 'Monitor 27 Pulgadas', precio: 500},
    { nombre : 'Tablet', precio: 500},
    { nombre : 'Celular', precio: 400},
    { nombre : 'Monitor 24 Pulgadas', precio: 800},
    { nombre : 'Monitor 20 Pulgadas', precio: 1000},
    { nombre : 'Monitor 58 Pulgadas', precio: 3000},
    { nombre : 'Monitor 7 Pulgadas', precio: 200},
]

for (let i = 0; i < carrito.length; i++){
    console.log(`nombre: ${carrito[i].nombre} - Precio: ${carrito[i].precio}`);
}

// Una forma mas facil de hacerlo con ArrayMethods
// Hacen lo mismo el for y forEach, la diferencia radica en que este ultimo permite renombrar.
carrito.forEach(function(producto) {
    console.log(`nombre: ${producto.nombre} - Precio: ${producto.precio}`);
});
~~~
Las diferencias entre **map** y **forEach**, map crea un arreglo nuevo 
~~~
const nuevoArreglo = carrito.map(function (producto) {
    return `nombre: ${producto.nombre} - Precio: ${producto.precio}`;
});

const nuevoArreglo2 = carrito.forEach(function (producto) {
    return `nombre: ${producto.nombre} - Precio: ${producto.precio}`; // No retorna nada.
});

console.log(nuevoArreglo); // Muestra el nuevo arreglo con resultados transformados
console.log(nuevoArreglo2); // Muestra undefined, ya que forEach no retorna un valor
~~~

## FUNCIONES 
Se puede usar, Declaracion de FUnciones o Expresion de FUnciones, la diferencia radica en que en la Expresion de funcion la llamada la debo hacer despues de crearlo.
~~~
// Declaracion de funcion
sumar();
function sumar() {
    console.log(2+2);
}

// Expresión de Función (Funtion Expression)
const sumar2 = function() {
    console.log(3+3);
}
sumar2();  // Debes llamar a la función después de su definición
~~~
Como diferenciar un metodo de una funcion
~~~
const numero1 = 20;
const numero2 = "20";
console.log(parseInt(numero2)); //Esto es una funcion
console.log(numero1.toString()); //Esto es un metodo
~~~
Sintaxis de una función
~~~
function sumar(a, b) { // a y b son parametros
    console.log(a+b);
}
sumar(2,3); // 2 y 3 son argumentos
~~~
Parametros por default en las funciones
~~~
function saludar(nombre = 'Desconocido', apellido = '') {
    console.log(`Hola ${nombre} ${apellido} mucho gusto.`);
}
saludar('Cosita','De Princesa');
saludar('Cosita');
saludar();
~~~
Comunicando funciones
~~~
iniciandoApp();
function iniciandoApp() {
    console.log('Iniciando app...');
    segundaFuncion();
}

function segundaFuncion() {
    console.log('Desde la segunda Funcion');
}
~~~
Creando una funcion de carrito de compras con calculo de impuesto
~~~
let total = 0;

function agregarCarrito(precio) {
    return total += precio;
}

function calcularImpuesto(total) {
    return Math.round(total*1.15);
}

total = agregarCarrito(1500);
total = agregarCarrito(2000);
total = agregarCarrito(2500);
// total = agregarCarrito(4000);

totalPagar = calcularImpuesto(total);

console.log(`El total a pagar es de ${totalPagar}`);
console.log(total);

~~~
Añadir funciones en un Objeto
~~~
const reproductor = {
    reproducir: function(id) {
        console.log(`Reporducionedo canción con el ID ${id}`);
    },
    pausar: function() {
        console.log(`pausando`);
    },
    borrar: function(id) {
        console.log(`Borrando cancion... ${id}`);
    },
    crearPlaylist: function(nombre) {
        console.log(`Creando la Playlist ${nombre}`);
    },
    reproducirPlaylist: function(nombre) {
        console.log(`Reporoduciendo la Playlist ${nombre}`);
    }
}

reproductor.reproducir(100);
reproductor.pausar(100);
reproductor.borrar(100);
reproductor.crearPlaylist('Nickelback');
reproductor.reproducirPlaylist('Nickelback');
~~~
Arrow Funtions
~~~
const aprendiendo = function() {
    console.log('aprendiendo JavaScript');
}

const aprendiendo2 = () => {
    console.log('aprendiendo JavaScript');
}

// Esto solo aplica cuando se tiene una sola linea
const aprendiendo3 = () => 'aprendiendo JavaScript';
~~~
Si es solo un parametro, no se requiere el parentesis, pero cuando son mas de uno si.
~~~
const aprendiendo = function(tecnologia, tecnologia2) {
    console.log(`Aprendiendo ${tecnologia} y ${tecnologia2}`);
}
aprendiendo('JavaScript','NodeJS');

// Esto solo aplica cuando se tiene una sola linea
const aprendiendo3 = (tecnologia, tecnologia2) => `Aprendiendo ${tecnologia} y ${tecnologia2}`;

console.log(aprendiendo3('Python','NodeJS'));
~~~
A continuacion se presenta como se verian .map y forEach
~~~
const nuevoArreglo = carrito.map(producto => `nombre: ${producto.nombre} - Precio: ${producto.precio}`);
const nuevoArreglo2 = carrito.forEach(producto => `nombre: ${producto.nombre} - Precio: ${producto.precio}`);
~~~
Aplicacion en **set** y **get**
~~~
const reproductor = {
    cancion: '',
    reproducir: id => console.log(`Reporducionedo canción con el ID ${id}`),
    pausar: () => console.log(`pausando`),
    borrar: id => console.log(`Borrando cancion... ${id}`),
    
    set nuevaCancion(cancion) {
        this.cancion = cancion;
        console.log(`Añadiendo ${cancion}`);
    },
    get obtenerCancion() {
        console.log(`${this.cancion}`);
    }
}

reproductor.nuevaCancion = 'Enter Sandman';
reproductor.obtenerCancion; // Por ser get, no requiere los ()
~~~

## Estructuras de Control

Condicional **IF ELSE**
~~~
const puntaje = 1000;
// Igual extricto
if (puntaje === "1000") {
    console.log('Si es diferente...')
} else{
    console.log('No es igual...')
}
// Diferente extricto
if (puntaje !== "1000") {
    console.log('Si es Diferente...')
} else{
    console.log('No es Diferente...')
}
~~~
Haciendo uso de **else if**
~~~
const dinero = 300;
const totalAPagar = 500;
const tarjeta = true;
const cheque = true;

if(dinero >= totalAPagar) {
    console.log('Si podemos pagar')
} else if(cheque) {
    console.log('Si podemos pagar porque tengo un cheque')
} else if(tarjeta) {
    console.log('Si podemos pagar porque tengo la tarjeta')
} else {
    console.log('No podemos pagar')
}
~~~
Utilizando **Switch**
~~~
// Switch case

const metodoPago = 'efectivo';

switch(metodoPago) {
    case 'efectivo':
        pagar();
        break;
    case 'cheque':
        console.log(`Pagaste con ${metodoPago}`);
        break;
    case 'tarjeta':
        console.log(`Pagaste con ${metodoPago}`);
        break;
    default:
        console.log('Aun no seleccionaste un metodo de pago o metodo de pago no soportado');
        break;
}

function pagar() {
    console.log('Pagando...');
}
~~~
Operador y **&&**
~~~
const usuario = true;
const puedePagar = true;

if (usuario && puedePagar) {
    console.log('Si, puedes compar');
} else {
    console.log('No, no puedes compar');
}
~~~
Operardor O **||**
~~~
const efectivo = 300;
const credito = 400;
const disponible = efectivo + credito;
const totalPagar = 600;

if (credito > totalPagar || disponible > totalPagar) {
    console.log('Si podemos pagar');
} else {
    console.log('Fondos Insuficientes');
}
~~~
Operador ternario
~~~
const authenticated = true;
const youCanPay = false;

console.log(authenticated && youCanPay ? 'yes, you can pay' : 'no, not authenticated');
~~~
## ITERADORES - FOR LOOP
Validar numeros PAR e IMPAR
~~~
for (let i = 1; i <= 20; i++) {
    if(i % 2 === 0) {
        console.log(`El numero ${i} es PAR`);
    }else {
        console.log(`El numero ${i} es IMPAR`);

    }
}
~~~
Uso de **Break** y **continue** 
~~~
for(let i=0; i < 20; i++) {
    if(i === 5) {
        console.log(`The Number is ${i}, CINCO`);
        continue;
    }
    if(i === 7) {
        console.log(`The Number is ${i}, SIETE`);
        break;
    }
    console.log(`The Number is ${i}`);
}
~~~
Ejercicio de Iteradores
~~~
// 3 6 9 12 ... fizz
// 5 10 15 20 ... buzz
// 15 30 45 ... FIZZBUZZ!
let num = 100;

for(let i=0; i <= num; i++) {

    if(i%5 === 0 && i%3 === 0 && i!= 0) {
        console.log(`${i} FIZZBUZZ!`);
    }
    else if(i%3 === 0 && i!= 0) {
        console.log(`${i} fizz`);
    }
    else if(i%5 === 0 && i!= 0) {
        console.log(`${i} buzz`);
    }
}
~~~
Uso de **While**
~~~
let i = 0; // Inicializar el While

while(i < 10) { // COndición
    console.log(`Número ${i}`)
    i++; // Incremento
}
~~~
Uso de **do while**, este se ejecuta una unica vez y luego valida  la condición, esa es la diferencia con el while
~~~
let i = 1000; // Inicio

do {
    console.log(`´Numero ${i}`)
    i++; // Incremento
} while (i < 10); // Condición
~~~
Correcto, la principal diferencia entre forEach() y map() es su comportamiento con respecto a la creación de un nuevo arreglo.

- **forEach()**: Itera sobre los elementos de un arreglo y ejecuta una función de callback para cada elemento, pero no crea un nuevo arreglo. En otras palabras, forEach() se utiliza cuando deseas realizar acciones o tareas en cada elemento del arreglo sin necesariamente crear un nuevo arreglo con resultados transformados.

- **map()**: Crea un nuevo arreglo y retorna un arreglo con el resultado de aplicar una función a cada elemento del arreglo original. Es útil cuando deseas transformar cada elemento del arreglo original y obtener un nuevo arreglo con los resultados.

Ambos métodos pueden utilizarse para llamar a una función en cada elemento del arreglo, pero map() tiene la ventaja adicional de crear un nuevo arreglo con los resultados transformados. Aquí tienes un resumen de su uso:
~~~
const pendientes = ['Tarea', 'Comer', 'Proyecto', 'Estudiar JS'];

pendientes.forEach((pendientes, indice) => {
    console.log(`${indice}: ${pendientes}`)
})

const carrito = [
    { nombre : 'Monitor 27 Pulgadas', precio: 500},
    { nombre : 'Tablet', precio: 500},
    { nombre : 'Celular', precio: 400},
    { nombre : 'Monitor 24 Pulgadas', precio: 800},
    { nombre : 'Monitor 20 Pulgadas', precio: 1000},
    { nombre : 'Monitor 58 Pulgadas', precio: 3000},
    { nombre : 'Monitor 7 Pulgadas', precio: 200},
]

// Aca se comportan exactamente igual:
carrito.forEach( producto => console.log(producto.nombre));
carrito.map( producto => console.log(producto.nombre));

// Aca se comportan diferente:
const nuevoArreglo = carrito.forEach( producto => producto.nombre);
const nuevoArreglo2 = carrito.map( producto => producto.nombre);

console.log(`Esto es: ${nuevoArreglo}`);
console.log(`Esto es: ${nuevoArreglo2}`);
~~~
uso de **for...of**, es igual al for o foreach, pewro mas corto.
~~~
const pendientes = ['Tarea', 'Comer', 'Proyecto', 'Estudiar JS'];

const carrito = [
    { nombre : 'Monitor 27 Pulgadas', precio: 500},
    { nombre : 'Tablet', precio: 500},
    { nombre : 'Celular', precio: 400},
]

for(let pendiente of pendientes) {
    console.log(pendiente);
}
for(let producto of carrito) {
    console.log(producto.nombre);
}
~~~
Se esta utilizando dos bucles **for...in** para recorrer las propiedades de un objeto llamado automovil. Este enfoque es una forma efectiva de recorrer y acceder a las propiedades y valores de un objeto en JavaScript utilizando bucles **for...in**.
~~~
const automovil = {
    modelo: 'Camaro',
    year: 1960,
    motor: 6.0
}

// Recorriendo las llaves (propiedades) del objeto
for (let propiedad in automovil) {
    console.log(propiedad); // Imprime las llaves (modelo, year, motor)
}

// Recorriendo y mostrando los valores de las propiedades
for (let propiedad in automovil) {
    console.log(`${automovil[propiedad]}`); // Imprime los valores ('Camaro', 1960, 6.0)
}
~~~
## ARRAY METHODS

Uso de **includes**, se utiliza para verificar si un valor específico existe en un arreglo y devuelve un valor booleano (true o false) y **some** se utiliza para verificar si al menos un elemento cumple con cierta condición en un arreglo y también devuelve un valor booleano, pero tambien se puede usar para arreglos, como en **existe2**, 
~~~
const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

// Comprobar si un valor existe en un arreglo

meses.forEach( mes => {
    if(mes === "Enero") {
        console.log('Enero si exsite');
    }
})

const resultado = meses.includes('Diciembre');
console.log(resultado); // Arrojara false

// En un arreglo de objetos se usa some
const existe = carrito.some(producto => producto.nombre === 'Monitor curvo');
console.log(existe);

// En un arreglo tradicional con .some
const existe2 = meses.some((mes) => {
    return mes === 'Febrero'
});
console.log(existe2);

// Escrito como Array Methods de una sola linea:
const existe3 = meses.some(mes => mes === 'Diciembre');
console.log(existe3);
~~~
findIndex encuentra el indice de un arreglo o de un Objeto, pero solo encunetra el primero.
~~~
const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 }
]

meses.forEach((mes, i) => {
    if(mes === 'Abril') {
        console.log(`Encontrado en el indice con forEach ${i}`);
    }
})

// Otra forma de escribirlo con finIndex
const indice = meses.findIndex( mes => mes === 'Abril');
console.log(`Usando findindex: ${indice}`);

// Encontrando en indice de un arreglo de Objetos con finIndex...
const indice2 = carrito.findIndex ( producto => producto.precio === 100);
console.log(`Usando findindex: ${indice2}`);
~~~
Se proporciona una función de reducción que toma dos argumentos: total (que es el acumulador) y producto (el elemento actual del arreglo). La función suma el precio del producto al acumulador total. Además, se proporciona un valor inicial de 0 como segundo argumento de reduce(). Esto asegura que total comience en 0 y se incremente con cada elemento del arreglo.
~~~
const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 }
]

// Usando un forEach para calcular el total de precios en el carrito
let total = 0;
carrito.forEach(producto => total += producto.precio);
console.log(total); // Imprime el total de precios

// Usando reduce para calcular el total de precios en el carrito
let resultado = carrito.reduce((total, producto) => total + producto.precio, 0);
console.log(resultado); // Imprime el mismo total de precios
~~~
Array Methods **filter**, este crea un nuevo arreglo con la condicion que se este filtrando.
~~~
const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 }
]

let resultado;

resultado = carrito.filter(producto => producto.precio > 100);
resultado2 = carrito.filter(producto => producto.precio < 600);
resultado3 = carrito.filter(producto => producto.nombre !== 'Tablet');
console.log(resultado);
console.log(resultado);
console.log(resultado3);
~~~
find va a asignar el primer elemento qie cumpla la condición
~~~
const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 }
]

// con un forEach
let resultado = '';
carrito.forEach((producto, index) =>{
    if(producto.nombre === 'Tablet') {
        resultado = carrito[index];
    }
});
console.log(resultado);

// con un find
let resultado2 = carrito.find(producto => producto.nombre === 'Tablet');
console.log(resultado2);
~~~
every, valida la condicion y en el arreglo todos se deben vumplir o de lo contrario arroja false.
~~~
const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 }
]

const resultado = carrito.every(producto => producto.precio < 500);
console.log(resultado); // false
// por ejemplo, aen some uno al menos se debe cumplir
const resultado2 = carrito.some(producto => producto.precio = 100);
console.log(resultado2); // true
~~~
El operador de propagación **spread operator**, sirve para concatenar, pero este lo hace deacuerdo al orden de los parametros como los asignamos, al igual que si agrego un string, de esta forma ~~~...'Hola'~~~ la respuesta sera h o l a, así que se debe tener cuidado.
~~~
const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];
const meses2 = ['Agosto', 'Septiembre'];
const meses3 = ['Octubre', 'Noviembre', 'Diciembre'];

// ,concat
const resultado = meses.concat(meses2, meses3);

console.log(resultado);

// spread operator
const resultado2 = [...meses, ...meses2, ...meses3];
console.log(resultado2);
~~~





