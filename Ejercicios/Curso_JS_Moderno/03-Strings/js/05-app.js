const producto = "Monitor 20 Pulgadas";
console.log(producto.replace('Pulgadas', '"'));

console.log(producto.slice(0,10));
console.log(producto.slice(2,1)); // null
console.log(producto.substring(0,10));
console.log(producto.substring(2,1)); // reorganiza
console.log(producto.charAt(0)); // trae la primera letra