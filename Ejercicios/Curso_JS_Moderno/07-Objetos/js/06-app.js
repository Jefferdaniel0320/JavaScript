const producto = {
    nombre: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true,
    informacion: {
        medidas: {
            peso: '1Kg',
            medida:'1m' 
        },
        fabricacion: {
            pais: 'China'
        }
    }
}

const {nombre, informacion, informacion: {fabricacion: {pais}}} = producto;
console.log(nombre);
console.log(informacion);
console.log(pais);