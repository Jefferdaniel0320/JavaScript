
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

console.log("-----------------------------------------")
// Aca se comportan diferente:
const nuevoArreglo = carrito.forEach( producto => producto.nombre);
const nuevoArreglo2 = carrito.map( producto => producto.nombre);

console.log(`Esto es: ${nuevoArreglo}`);
console.log(`Esto es: ${nuevoArreglo2}`);
