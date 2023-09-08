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