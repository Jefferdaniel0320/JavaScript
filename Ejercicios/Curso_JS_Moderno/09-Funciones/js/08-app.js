let total = 0;

function agregarCarrito(precio) {
    return total += precio;
}

function calcularImpuesto(total) {
    return Math.round(total*1.15);
}

total = agregarCarrito(1500);
total = agregarCarrito(2000);
total = agregarCarrito(2500);
// total = agregarCarrito(4000);

totalPagar = calcularImpuesto(total);

console.log(`El total a pagar es de ${totalPagar}`);
console.log(total);
