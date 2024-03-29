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
find va a asignar el primer elemento que cumpla la condición
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
El operador de propagación **spread operator**, sirve para concatenar, pero este lo hace deacuerdo al orden de los parametros como los asignamos, al igual que si agrego un string, de esta forma **"Hola"** la respuesta sera **"h o l a"**, así que se debe tener cuidado.
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
Ejemplo 2 de spread operator, en este ejemplo, crea dos arreglos diferentes a los originales, es decir no modifica meses, pero crea uno nuevo meses2 con Agosto al igual que carrito.
~~~
const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 }
]

// spread operator con arreglo de indices
const meses2 = [...meses, 'Agosto'];
console.log(meses2);

const producto = { nombre: 'Audifonos', precio: 300 };

const carrito2 = [producto, ...carrito] // El orden importa
console.log(carrito2);
~~~

## QUE ES EL DOM - Document Object Model
El DOM es todo el html por el cual navego, a continuacion, se muestra cómo acceder a diferentes propiedades y elementos del DOM utilizando JavaScriptt
~~~
let elemento;

elemento = document; // Selecciona todo el HTML del documento
elemento = document.all; // Selecciona todos los elementos HTML del documento
elemento = document.head; // Selecciona la sección head del documento
elemento = document.domain; // Obtiene el dominio actual del documento
elemento = document.forms; // Obtiene una colección de todos los formularios en el documento
elemento = document.forms[0]; // Selecciona el primer formulario del documento
elemento = document.forms[0].id; // Obtiene el ID del primer formulario
elemento = document.forms[0].method; // Obtiene el método (GET o POST) del primer formulario
elemento = document.forms[0].classList; // Obtiene la lista de clases del primer formulario
elemento = document.forms[0].action; // Obtiene la URL de acción del primer formulario

elemento = document.links; // Obtiene una colección de todos los enlaces (etiqueta <a>) en el documento
elemento = document.links[4]; // Selecciona el quinto enlace del documento
elemento = document.links[4].classList; // Obtiene la lista de clases del quinto enlace como objeto DOMTokenList
elemento = document.links[4].className; // Obtiene la lista de clases del quinto enlace como una cadena de texto

elemento = document.images; // Obtiene una colección de todas las imágenes (etiqueta <img>) en el documento

elemento = document.scripts; // Obtiene una colección de todas las etiquetas <script> en el documento

console.log(elemento); // Imprime el elemento seleccionado en la consola del navegador
~~~
Como seleccionar elementos por su clase haciendo uso del **getElementsByClassName**
~~~
// Seleccionar elementos por su clase

const header = document.getElementsByClassName('header');
console.log(header);

const hero = document.getElementsByClassName('hero');
console.log(hero);

// si las clases existen mas de 1 vez
const contenedores = document.getElementsByClassName('contenedor');
console.log(contenedores);

// si una clases no existe
const noExiste = document.getElementsByClassName('no-existe');
console.log(noExiste); // lo trae como vacio.
~~~
Como seleccionar elementos por si ID haciendo uso de clase
~~~
const header = document.getElementsByClassName('header');
console.log(header);

const hero = document.getElementsByClassName('hero');
console.log(hero);

// si las clases existen mas de 1 vez
const contenedores = document.getElementsByClassName('contenedor');
console.log(contenedores);

// si una clases no existe
const noExiste = document.getElementsByClassName('no-existe');
console.log(noExiste); // lo trae como vacio.
~~~
**getElementById** busca un id y trae el primero que encuentre.
~~~
const formulario = document.getElementById('formulario');
console.log(formulario);
~~~
querySelector, retorna maximo un elemento.
~~~
const card = document.querySelector('.card');
console.log(card);

// Podemos tener selectores como en CSS
const info = document.querySelector('.premium .info');
console.log(info);

// Seleccionar el formulario 
const formulario = document.querySelector('#formulario');
console.log(formulario);
// Seleccionar el formulario y con una clase 
const formulario2 = document.querySelector('.contenido-hero #formulario');
console.log(formulario2);

// Seleccionar elementos HTML
const navegacion = document.querySelector('nav');
console.log(navegacion);
~~~
querySelector all, retorna todo.
~~~
const card = document.querySelectorAll('.card');
console.log(card);

const formularios = document.querySelectorAll('.formulario');
console.log(formularios);
~~~
Modificando elementos del HTML con JS
~~~
const encabezado = document.querySelector('.contenido-hero h1');
console.log(encabezado);

console.log(encabezado.innerText); // Si en el CSS - visibility: hidden; no lo va a encontrar
console.log(encabezado.textContent); // si lo va a encontrar
console.log(encabezado.innerHTML); // Este se trae el HTML

const nuevoHeading = 'Hola mi princesa';
document.querySelector('.contenido-hero h1').textContent = nuevoHeading

// Modificar imagen
// const imagen = document.querySelector('.card img');
// imagen.src = 'img/hacer2.jpg';
~~~
Cambiando el CSS con JS
~~~
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
~~~
Para navegar entre Padres **parentElement** e Hijos **children**
~~~
const navegacion = document.querySelector('nav.navegacion');

// console.log(navegacion);
// console.log(navegacion.c|hildNodes); // Los espacios en blanco son considerados elementos
// console.log(navegacion.children); // Este lista los elementos reales.
// console.log(navegacion.children[0]); // Este lista los elementos reales.

// Para traer el primer y ultimo elemento de la navegacion
console.log(navegacion.firstElementChild);
console.log(navegacion.lastElementChild);

const card = document.querySelector('.card');
// console.log(card.children[1].children[1].textContent);

// card.children[1].children[1].textContent = 'Nuevo heading desde travesing the dom'

// como acceder a la imagen
// const imagen = document.querySelector('.card');
// console.log(imagen.children[0].src)

// Como se cambia la imagen
// imagen.children[0].src = 'img/hacer2.jpg';

// Traversing the hijo al padre
// console.log(card.parentElement.parentElement.parentElement)

// Como seleccionar los diferentes hijos con nextElementSibling
// console.log(card); // Hojo 1
// console.log(card.nextElementSibling); // Hojo 2
// console.log(card.nextElementSibling.nextElementSibling); // Hojo 3

// Seleccionar hijos de otra forma
// const ultimoHijo = document.querySelector('.card:nth-child(4)');
// console.log(ultimoHijo);

// Consultar penultimo hijo
// console.log(ultimoHijo.previousElementSibling);
~~~
Como eliminar elementos del DOM
~~~
const primerEnlace = document.querySelector('a');
primerEnlace.remove();
console.log(primerEnlace);

// Eliminar desde el padre
const navegacion = document.querySelector('.navegacion');
console.log(navegacion.children);
navegacion.removeChild(navegacion.children[2]);
~~~
Creacion del HTM desde el JS, lo que es un card y un enlace nuevo, en el vieo **106**.
~~~
// crear un nuevo enlace
const enlace = document.createElement('A');
// Agregandole el texto
enlace.textContent = 'Nuevo Enlace';

// Añadiendo href
enlace.href = '/nuevo-enlace';

console.log(enlace);
enlace.target = "_blank";
enlace.setAttribute('data-enlace', 'nuevo-enlace');
enlace.classList.add('alguna-clase');
enlace.onclick = miFuncion;

// Seleccionar la navegacion
// const navegacion = document.querySelector('.navegacion');
// navegacion.appendChild(enlace);

// Si se quiere colocar en una posicion especifica.
const navegacion = document.querySelector('.navegacion');
navegacion.insertBefore(enlace, navegacion.children[1]);

function miFuncion() {
    alert('Diste Click')
}

// -----------------------------------------

// Crear un CARD de forma dinamica

const parrafo1 = document.createElement('P');
parrafo1.textContent = 'Concierto';
parrafo1.classList.add('categoria', 'concierto');

const parrafo2 = document.createElement('P');
parrafo2.textContent = 'Concierto de Rock';
parrafo2.classList.add("titulo");

const parrafo3 = document.createElement('P');
parrafo3.textContent = '$800 por persona';
parrafo3.classList.add('precio');

// Crear DIV con la clase info
const info = document.createElement('div');
info.classList.add('info')
info.appendChild(parrafo1);
info.appendChild(parrafo2);
info.appendChild(parrafo3);

// Crear imagen
const imagen = document.createElement('img');
imagen.src = 'img/hacer2.jpg';

// Crear el Card
const card = document.createElement('div');
card.classList.add('card');

// Asignar la imagen
card.appendChild(imagen);
card.appendChild(info);

// Insertar en el HTML
const contenedor = document.querySelector('.hacer .contenedor-cards');
contenedor.appendChild(card); // con este lo ubicamos al final.
// contenedor.insertBefore(card, contenedor.children[0]); // Ese seria para ubicarlo en la posicion deseada.
~~~
Ejemplo de función para agregar Dinamicamente las cards
~~~
/*
// funcion para agregar cards nuevas
function agregarCard(parrafo01, parrafo02, parrafo03, imagenCard) {
    const parrafo1 = document.createElement('p');
    parrafo1.classList.add('categoria', 'concierto');
    parrafo1.textContent = parrafo01;

    const parrafo2 = document.createElement('p');
    parrafo2.classList.add('titulo');
    parrafo2.textContent = parrafo02;

    const parrafo3 = document.createElement('p');
    parrafo3.classList.add('precio');
    parrafo3.textContent = parrafo03;

    const info = document.createElement('div');
    info.classList.add('info');
    info.appendChild(parrafo1);
    info.appendChild(parrafo2);
    info.appendChild(parrafo3);

    const imagen = document.createElement('img');
    imagen.src = 'img/'+imagenCard;

    const card = document.createElement('div');
    card.classList.add('card');
    card.appendChild(imagen);
    card.appendChild(info);

    const agregarHacer = document.querySelector('.hacer .contenedor-cards');
    agregarHacer.appendChild(card, agregarHacer)
}

// agregarCard('Marvel', 'traje IronMan', 'USD $10.000', 'ironMan.jpg')
// agregarCard('DC', 'Aquaman', 'USD $15.000', 'hacer2.jpg')
// agregarCard('DC', 'Batman', 'USD $20.000', 'hacer3.jpg')
// agregarCard('DC', 'Superman', 'USD $40.000', 'hacer4.jpg')
*/
~~~

Ejemplo de lo que se puede hacer con JS, en este caso como aparecer y desaparecer un menu, esto depende de lo que esta en el CSS.
~~~
const btnFlotante = document.querySelector('.btn-flotante');
const footer = document.querySelector('.footer');

btnFlotante.addEventListener('click', mostrarOcultarFooer);

function mostrarOcultarFooer() {
    if (footer.classList.contains('activo')) {
        footer.classList.remove('activo');
        this.classList.remove('activo');
        // btnFlotante.classList.remove('activo'); // este es igual al anterior, porque se hace relacion btnFlotante
        this.textContent = 'Idioma y Moneda';
    } else {
        footer.classList.add('activo');        
        btnFlotante.classList.add('activo');
        this.textContent = 'X Cerrar';
    }
}
~~~

## EVENTOS

Este **DOMContentLoaded** evento es cuando se carga todo el HTML
~~~
console.log(1)

document.addEventListener('DOMContentLoaded', () => {
    console.log(2)
    console.log('Documento Listo')
})
console.log(3)
~~~
Evento con el Mouse
~~~
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
~~~
Eventos sobre los inputs
~~~
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
~~~
Eventos en un formulario
~~~
const formulario = document.querySelector('#formulario');
/*
formulario.addEventListener('submit', (e) => {
    e.preventDefault(); // Previene el evento por defecto
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
~~~
Eventos con el **Scroll**
~~~
// validar el scroll que se le da
window.addEventListener('scroll', () => {
    const scrollPX = window.scrollY;
    console.log(scrollPX);
})

// Cuando quiero llegar a una ubicacion especiafica en mi pag
window.addEventListener('scroll', () => {
    const premium = document.querySelector('.premium');
    const ubicacion = premium.getBoundingClientRect();

    console.log(ubicacion) // se recomienda colocarlo para hacer un debug

    if(ubicacion.top < 100) {
        console.log('El elemento ya esta visible');
    } else {
        console.log('Aún no, da mas scroll');
    }

})
~~~
Event Bubbling: consiste en parar la secuiencia de eventos al dar click en un titulo, card o info, que se propague en los demas.
~~~
const cardDiv = document.querySelector('.card');
const infoDiv = document.querySelector('.info');
const tituloDiv = document.querySelector('.titulo');

cardDiv.addEventListener('click', e =>{
    e.stopPropagation()
    console.log('click en card');
})
infoDiv.addEventListener('click', e =>{
    e.stopPropagation()
    console.log('click en info');
})
tituloDiv.addEventListener('click', e =>{
    e.stopPropagation()
    console.log('click en titulo');
})
~~~
Prevenir Event Bubbling con Delegation
~~~
const cardDiv = document.querySelector('.card');

cardDiv.addEventListener('click', e => {
    if(e.target.classList.contains('titulo')) { 
        console.log('Diste click en titulo');
    }
    if(e.target.classList.contains('precio')) {
        console.log('Diste click en precio');
    }
    if(e.target.classList.contains('card')) {
        console.log('Diste click en card');
    }
});
~~~
Se puede validar el video 115, en el cual se crea html a partir de JS y se trabaja con las funciones de este y el evento onclick

Esto sirve para ver las clases de donde se esta presionando, cuando tiene el .contains('x'), en un if, es que si tiene esa x:
~~~
function agregarCurso(e) {
    console.log(e.target.classList)
}

function agregarCurso(e) {
    if(e.target.classList.contains('agregar-carrito')) {
        console.log('Agregando al Carrito...')
    }
}
~~~

### Proyecto Carrito de Compras
~~~
// Variables
const carrito = document.querySelector('#carrito');
const listaCursos = document.querySelector('#lista-cursos');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
let articulosCarrito = [];

cargarEventListeners()
function cargarEventListeners() {
    // Cuando agregasun curso presionando "Agregar al carrito"
    listaCursos.addEventListener('click', agregarCurso);

    // Elimina cursos del carrito
    carrito.addEventListener('click', eliminarCurso);

    // Vaciar Carrito
     vaciarCarritoBtn.addEventListener('click', () => {
        articulosCarrito = []; // Reseteamos todo el arreglo
        limpiarHTML(); // Eliminamos todo el HTML
     });
}

// Funciones
function agregarCurso(e) {
    e.preventDefault(); // Prevenir que se ejecute la accion por defailt
    if(e.target.classList.contains('agregar-carrito')) {
        const cursoSeleccionado = e.target.parentElement.parentElement;
        leerDatosCurso(cursoSeleccionado);
    }
}

// Eliminar un curso del carrito
function eliminarCurso(e) {
    // console.log(e.target.classList); esto es para validar la clase que queremos aplicar
    if(e.target.classList.contains('borrar-curso')) {
        const cursoId = e.target.getAttribute('data-id');

        // Elimina del arreglo de articulosCarrito por el data-id
        articulosCarrito = articulosCarrito.filter(curso => curso.id !== cursoId);

        carritoHTML(); // Iterar sobre el carrito y mostrar su HTML
    }
}

// Lee el contenido del HTML al que le dimos click y extrae la infomracion del curso
function leerDatosCurso(curso) {
    // console.log(curso);
    
    // Crear un objeto con el contenido del curso actual
    const infoCurso = {
        imagen: curso.querySelector('img').src,
        titulo: curso.querySelector('h4').textContent,
        precio: curso.querySelector('.precio span').textContent,
        id: curso.querySelector('a').getAttribute('data-id'),
        cantidad: 1
    }

    // Revisa si un elemento ya existe en el carrito
    const existe = articulosCarrito.some( curso => curso.id === infoCurso.id);
    console.log(existe);

    if(existe) {
        // actualizamos la cantidad
        const cursos = articulosCarrito.map( curso => {
            if(curso.id === infoCurso.id) {
                curso.cantidad++;
                return curso; // retorna el objeto actualizado
            } else {
                return curso; // retorna el objeto que no son los duplicados
            }
        });
        articulosCarrito = [...cursos];
    } else {
        // Agrega elementos al arreglo de carrito
        //  articulosCarrito es una copia del anterior
        articulosCarrito = [...articulosCarrito, infoCurso]
    }
    
        console.log(articulosCarrito);

    carritoHTML();
}

// Muestra el carrito de compras en el html
function carritoHTML() {
    // Limpiar el HTML
    limpiarHTML();

    // Recorrer el carrito y genera el html
    articulosCarrito.forEach( curso => {
        const row = document.createElement('tr')
        row.innerHTML =` 
        <td><img src="${curso.imagen}" width="100"></td>
        <td>${curso.titulo}</td>
        <td>${curso.precio}</td>
        <td>${curso.cantidad}</td>
        <td>
            <a href="#" class="borrar-curso" data-id="${curso.id}"> X </a>
        </td>
        `;

        // Agregar el HTML del carrito en el tbody
        contenedorCarrito.appendChild(row);
    })
}

// Eliminar los cursos del tbody
function limpiarHTML() {
    // forma lenta:
    // contenedorCarrito.innerHTML = '';
    // Forma Rapida:
    while(contenedorCarrito.firstChild) {
        contenedorCarrito.removeChild(contenedorCarrito.firstChild)
    }

}
~~~

### Proyecto Simulador Envio de Mail
~~~
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
~~~
###