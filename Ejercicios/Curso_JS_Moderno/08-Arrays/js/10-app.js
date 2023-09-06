const carrito = [
    { nombre : 'Monitor 27 Pulgadas', precio: 500},
    { nombre : 'Tablet', precio: 500},
    { nombre : 'Celular', precio: 400},
    { nombre : 'Monitor 24 Pulgadas', precio: 800},
    { nombre : 'Monitor 20 Pulgadas', precio: 1000},
    { nombre : 'Monitor 58 Pulgadas', precio: 3000},
    { nombre : 'Monitor 7 Pulgadas', precio: 200},
]

const nuevoArreglo = carrito.map(function(producto) {
    return `nombre: ${producto.nombre} - Precio: ${producto.precio}`;
});
const nuevoArreglo2 = carrito.forEach(function(producto) {
    return `nombre: ${producto.nombre} - Precio: ${producto.precio}`; // no retorna nada.
});

console.log(nuevoArreglo);
console.log(nuevoArreglo2);