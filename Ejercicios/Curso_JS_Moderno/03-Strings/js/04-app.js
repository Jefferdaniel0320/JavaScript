const producto = "             Monitor 20 Pulgadas       ";
console.log(producto.length)

// Eliminar espacio en blanco:

// Eliminar al inicio:
console.log(producto.trimStart());
// Eliminar al final:
console.log(producto.trimEnd());
// Eliminar ambos:
console.log(producto.trimStart().trimEnd());
// Eliminar ambos version antigua:
console.log(producto.trim());
