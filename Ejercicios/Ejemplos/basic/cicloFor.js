console.log("Hola mi princesa")

let suma = 0;
let numMax = parseInt(prompt("Ingresa el numero maximo que deseas sumar"));

for (let i = 0 ; i <= numMax ; i++) {
    // suma = suma + i;
    suma += i;
    console.log("Si la variable i es ", i , " entonces el valor de la suma es: ", suma);
}
