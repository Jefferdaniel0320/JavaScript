
const btnFlotante = document.querySelector('.btn-flotante');
const footer = document.querySelector('.footer');

btnFlotante.addEventListener('click', mostrarOcultarFooter);

function mostrarOcultarFooter() {
    if(footer.classList.contains('activo')) {
        footer.classList.remove('activo')
        // btnFlotante.classList.remove('activo')
        this.classList.remove('activo') // Es lo mismo que el de arriba, a que se ejecuta en la linea 4 o en el btnFlotante
        this.textContent = 'Idioma y Moneda'
    } else {
        footer.classList.add('activo');
        this.classList.add('activo')
        this.textContent = 'X Cerrar'
    }
}