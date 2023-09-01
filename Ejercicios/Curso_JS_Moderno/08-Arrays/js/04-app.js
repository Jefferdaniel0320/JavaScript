const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'];
// Modificar el arreglo
meses[0] = 'Nuevo mes';
// Agregar un nuevo elemento
meses[10] = 'Penultimo mes';

console.table(meses);

for (let i = 0; i < meses.length; i++) {
    console.log(meses[i]);
}