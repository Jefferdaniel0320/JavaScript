const pendientes = ['Tarea', 'Comer', 'Proyecto', 'Estudiar JS'];

const carrito = [
    { nombre : 'Monitor 27 Pulgadas', precio: 500},
    { nombre : 'Tablet', precio: 500},
    { nombre : 'Celular', precio: 400},
]

for(let pendiente of pendientes) {
    console.log(pendiente);
}
for(let producto of carrito) {
    console.log(producto.nombre);
}