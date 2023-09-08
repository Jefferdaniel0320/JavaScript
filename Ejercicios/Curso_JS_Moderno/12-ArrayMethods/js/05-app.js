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
