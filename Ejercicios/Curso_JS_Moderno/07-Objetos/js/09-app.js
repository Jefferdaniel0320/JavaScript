"use strict"

const producto = {
    nombre: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true
}

Object.seal(producto); //sella el objeto 
producto.disponible = false;
console.log(Object.isSealed(producto)); // validar si esta sellado