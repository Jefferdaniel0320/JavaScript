const producto = {
    nombre: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true
}
// Agregar nuevas propiedades al objeto
producto.imagen = 'imagen.jpg';

// Eliminar el disponible
delete producto.disponible;

console.log(producto);