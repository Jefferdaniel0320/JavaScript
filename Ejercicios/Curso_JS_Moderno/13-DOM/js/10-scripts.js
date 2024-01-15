/*
// funcion para agregar cards nuevas
function agregarCard(parrafo01, parrafo02, parrafo03, imagenCard) {
    const parrafo1 = document.createElement('p');
    parrafo1.classList.add('categoria', 'concierto');
    parrafo1.textContent = parrafo01;

    const parrafo2 = document.createElement('p');
    parrafo2.classList.add('titulo');
    parrafo2.textContent = parrafo02;

    const parrafo3 = document.createElement('p');
    parrafo3.classList.add('precio');
    parrafo3.textContent = parrafo03;

    const info = document.createElement('div');
    info.classList.add('info');
    info.appendChild(parrafo1);
    info.appendChild(parrafo2);
    info.appendChild(parrafo3);

    const imagen = document.createElement('img');
    imagen.src = 'img/'+imagenCard;

    const card = document.createElement('div');
    card.classList.add('card');
    card.appendChild(imagen);
    card.appendChild(info);

    const agregarHacer = document.querySelector('.hacer .contenedor-cards');
    agregarHacer.appendChild(card, agregarHacer)
}

// agregarCard('Marvel', 'traje IronMan', 'USD $10.000', 'ironMan.jpg')
// agregarCard('DC', 'Aquaman', 'USD $15.000', 'hacer2.jpg')
// agregarCard('DC', 'Batman', 'USD $20.000', 'hacer3.jpg')
// agregarCard('DC', 'Superman', 'USD $40.000', 'hacer4.jpg')
*/


// crear un nuevo enlace
const enlace = document.createElement('A');
// Agregandole el texto
enlace.textContent = 'JefferDaniel';

// Añadiendo href
enlace.href = 'https://www.linkedin.com/in/jefferdaniel0320/';

console.log(enlace);
enlace.target = "_blank";
enlace.setAttribute('data-enlace', 'nuevo-enlace');
enlace.classList.add('holaMundo');
enlace.onclick = miFuncion;

// Seleccionar la navegacion
// const navegacion = document.querySelector('.navegacion');
// navegacion.appendChild(enlace);

// Si se quiere colocar en una posicion especifica.
const navegacion = document.querySelector('.navegacion');
navegacion.appendChild(enlace); // Metodo que agrega en cualquier posición
// navegacion.insertBefore(enlace, navegacion.children[1]); // Metodo en donde agrega al final

function miFuncion() {
    alert('Diste Click')
}

// -----------------------------------------

// Crear un CARD de forma dinamica

const parrafo1 = document.createElement('P');
parrafo1.textContent = 'Rock';
parrafo1.classList.add('categoria', 'concierto');

const parrafo2 = document.createElement('P');
parrafo2.textContent = 'Concierto AC/DC';
parrafo2.classList.add("titulo");

const parrafo3 = document.createElement('P');
parrafo3.textContent = 'USD $4000';
parrafo3.classList.add('precio');

// Crear DIV con la clase info
const info = document.createElement('div');
info.classList.add('info')
info.appendChild(parrafo1);
info.appendChild(parrafo2);
info.appendChild(parrafo3);

// Crear imagen
const imagen = document.createElement('img');
imagen.src = 'img/ironMan.jpg';

// Crear el Card
const card = document.createElement('div');
card.classList.add('card');

// Asignar la imagen
card.appendChild(imagen);
card.appendChild(info);

// Insertar en el HTML
const contenedor = document.querySelector('.hacer .contenedor-cards');
// contenedor.appendChild(card); // con este lo ubicamos al final.
contenedor.insertBefore(card, contenedor.children[0]); // Ese seria para ubicarlo en la posicion deseada.
