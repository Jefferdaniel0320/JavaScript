// validar el scroll que se le da
window.addEventListener('scroll', () => {
    const scrollPX = window.scrollY;
    console.log(scrollPX);
})

// Cuando quiero llegar a una ubicacion especiafica en mi pag
window.addEventListener('scroll', () => {
    const premium = document.querySelector('.premium');
    const ubicacion = premium.getBoundingClientRect();

    console.log(ubicacion) // se recomienda colocarlo para hacer un debug

    if(ubicacion.top < 100) {
        console.log('El elemento ya esta visible');
    } else {
        console.log('Aún no, da mas scroll');
    }

})
