// Variables
const carrito = document.querySelector('#carrito');
const listaCursos = document.querySelector('#lista-cursos');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
let articulosCarrito = [];

cargarEventListeners()
function cargarEventListeners() {
    // Cuando agregasun curso presionando "Agregar al carrito"
    listaCursos.addEventListener('click', agregarCurso);

    // Elimina cursos del carrito
    carrito.addEventListener('click', eliminarCurso);

    // Vaciar Carrito
     vaciarCarritoBtn.addEventListener('click', () => {
        articulosCarrito = []; // Reseteamos todo el arreglo
        limpiarHTML(); // Eliminamos todo el HTML
     });
}

// Funciones
function agregarCurso(e) {
    e.preventDefault(); // Prevenir que se ejecute la accion por defailt
    if(e.target.classList.contains('agregar-carrito')) {
        const cursoSeleccionado = e.target.parentElement.parentElement;
        leerDatosCurso(cursoSeleccionado);
    }
}

// Eliminar un curso del carrito
function eliminarCurso(e) {
    // console.log(e.target.classList); esto es para validar la clase que queremos aplicar
    if(e.target.classList.contains('borrar-curso')) {
        const cursoId = e.target.getAttribute('data-id');

        // Elimina del arreglo de articulosCarrito por el data-id
        articulosCarrito = articulosCarrito.filter(curso => curso.id !== cursoId);

        carritoHTML(); // Iterar sobre el carrito y mostrar su HTML
    }
}

// Lee el contenido del HTML al que le dimos click y extrae la infomracion del curso
function leerDatosCurso(curso) {
    // console.log(curso);
    
    // Crear un objeto con el contenido del curso actual
    const infoCurso = {
        imagen: curso.querySelector('img').src,
        titulo: curso.querySelector('h4').textContent,
        precio: curso.querySelector('.precio span').textContent,
        id: curso.querySelector('a').getAttribute('data-id'),
        cantidad: 1
    }

    // Revisa si un elemento ya existe en el carrito
    const existe = articulosCarrito.some( curso => curso.id === infoCurso.id);
    console.log(existe);

    if(existe) {
        // actualizamos la cantidad
        const cursos = articulosCarrito.map( curso => {
            if(curso.id === infoCurso.id) {
                curso.cantidad++;
                return curso; // retorna el objeto actualizado
            } else {
                return curso; // retorna el objeto que no son los duplicados
            }
        });
        articulosCarrito = [...cursos];
    } else {
        // Agrega elementos al arreglo de carrito
        //  articulosCarrito es una copia del anterior
        articulosCarrito = [...articulosCarrito, infoCurso]
    }
    
        console.log(articulosCarrito);

    carritoHTML();
}

// Muestra el carrito de compras en el html
function carritoHTML() {
    // Limpiar el HTML
    limpiarHTML();

    // Recorrer el carrito y genera el html
    articulosCarrito.forEach( curso => {
        const row = document.createElement('tr')
        row.innerHTML =` 
        <td><img src="${curso.imagen}" width="100"></td>
        <td>${curso.titulo}</td>
        <td>${curso.precio}</td>
        <td>${curso.cantidad}</td>
        <td>
            <a href="#" class="borrar-curso" data-id="${curso.id}"> X </a>
        </td>
        `;

        // Agregar el HTML del carrito en el tbody
        contenedorCarrito.appendChild(row);
    })
}

// Eliminar los cursos del tbody
function limpiarHTML() {
    // forma lenta:
    // contenedorCarrito.innerHTML = '';
    // Forma Rapida:
    while(contenedorCarrito.firstChild) {
        contenedorCarrito.removeChild(contenedorCarrito.firstChild)
    }

}