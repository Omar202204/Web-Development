const boton = document.querySelector('#miBoton');

boton.addEventListener('click', () => {
    alert("¡Acceso Denegado! 🚫");
    document.body.style.backgroundColor = "red";
});

const boton2 = document.querySelector('#segundoBoton')

boton2.addEventListener('click', () => {
    alert("Hola Mundo");
    document.body.style.backgroundColor = "white"
})

const botonMagico = document.querySelector("#btn-magico")

botonMagico.addEventListener("click", () => {
    console.log("¡Click detectado!");
    document.body.style.backgroundColor = "brown"
    }
)

const titulo = document.querySelector("#titulo")

titulo.addEventListener("click", () => {
    titulo.style.color = "blue"
    titulo.textContent = "JS implementado - Cambio de look"
})

// // 1. SELECCIONAR (Atrapar los elementos)
// const titulo = document.querySelector('#titulo');
// const boton = document.querySelector('#btn-magico');

// // 2. ESCUCHAR (El evento)
// boton.addEventListener('click', () => {
//     // 3. MANIPULAR (Cambiar cosas)
//     console.log("¡Click detectado!");

//     // Cambiar el texto
//     titulo.textContent = "¡Javascript Moderno Activado!";

//     // Cambiar el estilo (CSS desde JS)
//     titulo.style.color = "blue";
//     document.body.style.backgroundColor = "#f0f0f0";
// });