const automovil = {
    modelo: 'Camaro',
    year: 1960,
    motor: 6.0
}

for(let propiedad in automovil) {
    console.log(propiedad); // Me trae la llave
}

for(let propiedad in automovil) {
    console.log(`${automovil[propiedad]}`); // Me trae el valor
}