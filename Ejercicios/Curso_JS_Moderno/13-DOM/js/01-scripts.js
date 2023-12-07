let elemento;

elemento = document; // aca se selecciona todo el html
elemento = document.all; // aca se selecciona todo el html
elemento = document.head; // aca se selecciona los diferentes metodos, es la parte superior
elemento = document.body; // aca se selecciona los diferentes metodos, dentro etiqueta body
elemento = document.domain; // aca se visualiza el dominio atual
elemento = document.forms; // aca se visualiza el total de formularios
elemento = document.forms[0]; 
elemento = document.forms[0].id; 
elemento = document.forms[0].method; 
elemento = document.forms[0].classList; 
elemento = document.forms[0].action;

elemento = document.links; 
elemento = document.links[4]; 
elemento = document.links[4].classList; // Lo retorna como una clase
elemento = document.links[4].className; // lo retorna como un string 

elemento = document.images; // Selecciona todas las img 

elemento = document.scripts; // Selecciona todas las scripts

console.log(elemento);