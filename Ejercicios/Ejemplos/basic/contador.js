console.log("Hello Work!")
let y = true;
let contador = 1;

while (y) {
  if (contador === 100) {
    y = false; // Cambia y a false cuando el contador llega a 100
  }
  console.log("Contador:", contador);
  contador++;
}
