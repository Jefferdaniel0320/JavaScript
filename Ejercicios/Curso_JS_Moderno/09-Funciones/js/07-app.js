iniciandoApp();
function iniciandoApp() {
    console.log('Iniciando app...');
    segundaFuncion();
}

function segundaFuncion() {
    console.log('Desde la segunda Funcion');
    //usuarioAutenticado('Cosita');
    usuarioAutenticado();
}

function usuarioAutenticado(usuario = 'Anonimo') {
    console.log('Autenticando usuario... espere...');
    console.log(`Usuario ${usuario}, autenticado exitosamente`);
}