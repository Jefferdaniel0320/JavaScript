const producto = {
    nombre: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true
}

const medidas = {
    peso: '1Kg',
    medida: '1m'
}

console.log(producto);
console.log(medidas);
// Primera forma de copiar objetos
const resultado = Object = Object.assign(producto, medidas);
// Segunda forma de copiar objetos
const resultado2 = {...producto, ...medidas};

console.log(resultado);
console.log(resultado2);