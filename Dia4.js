const boton = document.querySelector('#miBoton');

boton.addEventListener('click', () => {
    alert("¡Acceso Denegado! 🚫");
    document.body.style.backgroundColor = "red";
});


// Prueba de fuego:
// Abre el archivo .html en Chrome (doble click en la carpeta). Dale click al botón.

// Si la pantalla se pone roja, ya sabes manipular el DOM.
// ¿Te funcionó o te salió algún error en la consola del navegador (F12)?