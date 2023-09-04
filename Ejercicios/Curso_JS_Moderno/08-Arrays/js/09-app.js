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
