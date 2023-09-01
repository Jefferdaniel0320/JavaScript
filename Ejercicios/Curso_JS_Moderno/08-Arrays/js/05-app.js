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

carrito.push(producto) // Agrega al final
carrito.push(producto2) 
carrito.unshift(producto3) // Lo agrega pero en la primera posición 


console.table(carrito);