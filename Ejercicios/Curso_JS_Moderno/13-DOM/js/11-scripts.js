const btnFlotante = document.querySelector('.btn-flotante');
const footer = document.querySelector('.footer');

btnFlotante.addEventListener('click', mostrarOcultarFooer);

function mostrarOcultarFooer() {
    if (footer.classList.contains('activo')) {
        footer.classList.remove('activo');
        this.classList.remove('activo');
        // btnFlotante.classList.remove('activo'); // este es igual al anterior, porque se hace relacion btnFlotante
        this.textContent = 'Idioma y Moneda';
    } else {
        footer.classList.add('activo');        
        btnFlotante.classList.add('activo');
        this.textContent = 'X Cerrar';
    }
}