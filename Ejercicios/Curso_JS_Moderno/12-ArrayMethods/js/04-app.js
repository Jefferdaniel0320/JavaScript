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