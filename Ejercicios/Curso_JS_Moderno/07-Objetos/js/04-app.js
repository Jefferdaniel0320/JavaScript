const producto = {
    nombre: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true
}
console.log(producto.nombre);

// Antes de ES6 se extraia la propiedad de esta forma
const nombre1 = producto.nombre;
console.log(nombre1);

// Ahora se extrae con Destructuring
const {nombre, precio} = producto;
console.log(nombre);
console.log(precio);

