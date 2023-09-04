const producto = {
    nombre: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true
}

// Destructuring
const{nombre} = producto;

console .log(nombre);

// Destructuring
const numeros = [10, 20, 30, 40];
const [primero, ...tercero] = numeros;
console.log(primero);
console.log(tercero);