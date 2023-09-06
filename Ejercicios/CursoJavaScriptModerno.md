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
Los booleanos son de tipo objeto, al comparar esto
~~~
const boolean1 = true;
const boolean2 = "true";
console.log(boolean1 === boolean3)
// RTA: false
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
Así es como se deben escribir los objetos en JS
~~~
const producto = {
    nombre: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true
}
console.log(producto);
console.log(producto.nombre);
console.log(producto['nombre']); //otra forma de acceder a la propiedad
~~~
Como agregar propiedades al objeto y elimiar propiedades
~~~
// Agregar nuevas propiedades al objeto
producto.imagen = 'imagen.jpg';

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
Forma de acceder a las propiedades con Des
~~~
const {nombre, informacion, informacion: {fabricacion: {pais}}} = producto;
console.log(nombre);
console.log(informacion);
console.log(pais);
~~~
Cuando se requiere que el codigo sea extricto, en las buenas practicas, se usa **"use strict"** y para congelar el acceso a un objeto se usa **Object.freeze(producto)** 
~~~
"use strict"
const producto = {
    nombre: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true
}
Object.freeze(producto);
console.log(producto);
console.log(Object.isFrozen(producto));
~~~
Con el metodo **seal** no se puede agregar o eliminar las propiedades, pero si se puede modificar.
~~~
"use strict"
const producto = {
    nombre: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true
}
Object.seal(producto); //sella el objeto 
producto.disponible = false;
console.log(Object.isSealed(producto)); // validar si esta sellado
~~~
Dos formas de copiar Objetos
~~~
const producto = {
    nombre: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true
}
const medidas = {
    peso: '1Kg',
    medida: '1m'
}
console.log(producto);
console.log(medidas);
// Primera forma de copiar objetos
const resultado = Object = Object.assign(producto, medidas);
// Segunda forma de copiar objetos
const resultado2 = {...producto, ...medidas};
console.log(resultado);
console.log(resultado2);
~~~
Uso de la palabra reservada **this** sirve para llamar los valores en el mismo objeto.
~~~
const producto = {
    nombre: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true,
    mostrarInfo: function() {
        console.log(`El Producto: ${this.nombre} tiene un precio de : ${this.precio}`);
    }
}
producto.mostrarInfo();
~~~
Objeto **Constructor**
~~~
// Object Literal
const producto = {
    nombre: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true,
}
// Object Constructor

function Producto(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
    this.disponible = true;
}

const producto2 = new Producto("Monitor 24 Pulgadas", 500);
console.log(producto2);
const producto3 = new Producto("Monitor 30 Pulgadas", 100);
console.log(producto3);
~~~
**Object.keys** este retorna las llaves, se usa para validar si tiene datos  o no el objeto.
**Object.values** retorna los valores
**Object.values** retorna los valores
**Object.entries** retorna todo
~~~
// Object Literal
const producto = {
    nombre: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true,
}
console.log(Object.keys(producto));
console.log(Object.values(producto));
console.log(Object.entries(producto));
~~~
## ARREGLOS
Los arreglos en JS se usan a traves de [], a continuacion se mustra dos formas de represetnarlos
~~~
const numeros = [10, 20, 30] // Esto es un arreglo
// Otra forma de escribir Arreglos
const meses = new Array('Enero', 'Febrero', 'Marzo');
// Arrelgo que contiene datos de todo tipo
const deTodo = ['Hola', 10, true, "Si", null, {nombre: 'Jeferson', trabajo: 'Ing, Telecomunicaciones'}];
console.log(deTodo);
~~~
Para acceder al arreglo lo podemos hacer uno a uno o especificamente a uno
~~~
const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'];

console.table(meses[1]);

// longitud del arreglo
console.log(meses.length);

// Recorriendo el arreglo
for(let i=0; i < meses.length; i++) {
    console.log(meses[i]);
}
~~~
Para modificar un elemento del arreglo o agregar uno nuevo
~~~
const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'];
// Modificar el arreglo
meses[0] = 'Nuevo mes';
// Agregar un nuevo elemento
meses[10] = 'Penultimo mes'; //En este caso omite las posiciones que salto.
~~~
Como agregar nuevos elementos al arreglo en la ultima posicion o en la primera
~~~
const carrito = [];

// Definir un producto
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

carrito.push(producto) // Agrega al final
carrito.push(producto2) 
carrito.unshift(producto3) // Lo agrega pero en la primera posición 

console.table(carrito);
~~~
Utilizando la forma declarativa para agregar elementos al arreglo del ejemplo anterior
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
resultado = [...carrito, producto];
resultado = [...resultado, producto2];
resultado = [producto3, ...resultado]; // Para colocar este objeto de primeras
~~~
Para eliminar los elementos de un arreglo
~~~
// Eliminar ultimo elemento de un Arreglo
carrito.pop();
console.table(carrito);
// Eliminar el primer elemento de un Arreglo
carrito.shift();
console.table(carrito);
~~~
Para eliminarlos de otra forma, Declarativa
~~~
carrito.splice(2,1);
console.table(carrito);
~~~

El Destructuring para **Objetos** debe ser con la llave, pero en **Arreglos** puedo colocarle el nombre que desee
~~~
// Este es un ejemplo de Objeto, no puedo cambiar nombre por una llave que no existe.
const producto = {
    nombre: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true
}
// Destructuring
const{nombre} = producto;
console .log(nombre);

// Este es un ejemplo de Destructuring con Arreglos
const numeros = [10, 20, 30, 40];
const [primero] = numeros;
const [ , , tercero] = numeros;
console.log(primero);
console.log(tercero);

// Este se usa mucho en Reac, es un Destructuring de arreglos
const numeros = [10, 20, 30, 40];
const [primero, ...tercero] = numeros;
console.log(primero); //10
console.log(tercero); // [20, 30, 40]
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
const nuevoArreglo = carrito.map(function(producto) {
    return `nombre: ${producto.nombre} - Precio: ${producto.precio}`;
});
const nuevoArreglo2 = carrito.forEach(function(producto) {
    return `nombre: ${producto.nombre} - Precio: ${producto.precio}`; // no retorna nada.
});

console.log(nuevoArreglo);
console.log(nuevoArreglo2);
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
sumar2();
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