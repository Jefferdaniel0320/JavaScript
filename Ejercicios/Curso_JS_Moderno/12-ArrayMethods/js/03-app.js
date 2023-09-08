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

