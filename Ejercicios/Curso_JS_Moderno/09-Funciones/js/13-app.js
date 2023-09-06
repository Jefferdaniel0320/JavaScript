const reproductor = {
    cancion: '',
    reproducir: id => console.log(`Reporducionedo canción con el ID ${id}`),
    pausar: () => console.log(`pausando`),
    borrar: id => console.log(`Borrando cancion... ${id}`),
    crearPlaylist: nombre => console.log(`Creando la Playlist ${nombre}`),
    reproducirPlaylist: nombre => console.log(`Reporoduciendo la Playlist ${nombre}`),

    set nuevaCancion(cancion) {
        this.cancion = cancion;
        console.log(`Añadiendo ${cancion}`);
    },
    get obtenerCancion() {
        console.log(`${this.cancion}`);
    }
}

reproductor.nuevaCancion = 'Enter Sandman';
reproductor.obtenerCancion; // Por ser get, no requiere los ()

reproductor.reproducir(100);
reproductor.pausar(100);
reproductor.borrar(100);
reproductor.crearPlaylist('Nickelback');
reproductor.reproducirPlaylist('Nickelback');
