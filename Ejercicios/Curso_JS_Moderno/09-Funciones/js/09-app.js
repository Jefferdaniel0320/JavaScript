const reproductor = {
    reproducir: function(id) {
        console.log(`Reporducionedo canción con el ID ${id}`);
    },
    pausar: function() {
        console.log(`pausando`);
    },
    borrar: function(id) {
        console.log(`Borrando cancion... ${id}`);
    },
    crearPlaylist: function(nombre) {
        console.log(`Creando la Playlist ${nombre}`);
    },
    reproducirPlaylist: function(nombre) {
        console.log(`Reporoduciendo la Playlist ${nombre}`);
    }
}

reproductor.reproducir(100);
reproductor.pausar(100);
reproductor.borrar(100);
reproductor.crearPlaylist('Nickelback');
reproductor.reproducirPlaylist('Nickelback');
