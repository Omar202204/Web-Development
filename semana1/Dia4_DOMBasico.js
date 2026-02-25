// Manipulación básica de DOM

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
