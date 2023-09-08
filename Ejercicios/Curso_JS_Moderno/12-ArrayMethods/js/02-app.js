const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 }
]

meses.forEach((mes, i) => {
    if(mes === 'Abril') {
        console.log(`Encontrado en el indice con forEach ${i}`);
    }
})

// Otra forma de escribirlo con finIndex
const indice = meses.findIndex( mes => mes === 'Abril');
console.log(`Usando findindex: ${indice}`);

// Encontrando en indice de un arreglo de Objetos con finIndex...
const indice2 = carrito.findIndex ( producto => producto.precio === 100);
console.log(`Usando findindex: ${indice2}`);
