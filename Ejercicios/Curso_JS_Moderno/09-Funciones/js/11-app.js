const aprendiendo = function(tecnologia, tecnologia2) {
    console.log(`Aprendiendo ${tecnologia} y ${tecnologia2}`);
}
aprendiendo('JavaScript','NodeJS');

// Esto solo aplica cuando se tiene una sola linea
const aprendiendo3 = (tecnologia, tecnologia2) => `Aprendiendo ${tecnologia} y ${tecnologia2}`;

console.log(aprendiendo3('Python','NodeJS'));