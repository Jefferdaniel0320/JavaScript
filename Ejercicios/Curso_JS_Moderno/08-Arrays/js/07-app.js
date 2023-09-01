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
/*
// Eliminar ultimo elemento de un Arreglo
carrito.pop();
console.table(carrito);
// Eliminar el primer elemento de un Arreglo
carrito.shift();
console.table(carrito);
*/
// Otra forma de eliminar elementos de  l arreglo
carrito.splice(2,1);
console.table(carrito);