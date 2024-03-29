// Script Formularios

var documentoIdentidad = '1016062485';
var numeroTel = '3153696907';
var ciudad = 'Bogota';
var direccion = 'Cll 44 # 70-120';
var genero = 1; // 0: hombre ; 1: mujer
var nombre = 'Olga';
var apellido = 'Acosta';
var fechaNacimineto = '1966-02-17';

// Agregar Información del propietario
var documentNumber = document.getElementById('documentNumber');
documentNumber.value = documentoIdentidad;
documentNumber.dispatchEvent(new Event('input', { bubbles: true }));
var phoneNumber = document.getElementById('phoneNumber');
phoneNumber.value = numeroTel;
phoneNumber.dispatchEvent(new Event('input', { bubbles: true }));
var city = document.getElementById('city');
city.value = ciudad;
city.dispatchEvent(new Event('input', { bubbles: true }));
var address = document.getElementById('address');
address.value = direccion;
address.dispatchEvent(new Event('input', { bubbles: true }));

// Agregar Información de pasajeros
var selectGender = document.getElementById('gender__0');
selectGender.selectedIndex = genero;
var name__0 = document.getElementById('name__0');
name__0.value = nombre;
name__0.dispatchEvent(new Event('input', { bubbles: true }));
var lastName__0 = document.getElementById('lastName__0');
lastName__0.value = apellido;
lastName__0.dispatchEvent(new Event('input', { bubbles: true }));
var documentNumber__0 = document.getElementById('documentNumber__0');
documentNumber__0.value = documentoIdentidad;
documentNumber__0.dispatchEvent(new Event('input', { bubbles: true }));
var birthDate__0 = document.getElementById('birthDate__0');
birthDate__0.value = fechaNacimineto;
birthDate__0.dispatchEvent(new Event('input', { bubbles: true }));
