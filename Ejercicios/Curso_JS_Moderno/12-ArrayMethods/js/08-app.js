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