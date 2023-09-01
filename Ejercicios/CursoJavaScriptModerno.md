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
