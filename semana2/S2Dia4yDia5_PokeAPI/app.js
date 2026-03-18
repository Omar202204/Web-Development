//Importamos el api.js
import { buscarPokemon } from "./api.js";

// Selecciona los elementos del DOM (input, boton, div de resultado)
const input = document.querySelector('#pokemonInput');
const boton = document.querySelector('#btnBuscar');
const contenedor = document.querySelector('#contenedor');

 // Creamos el evento del botón con la función
boton.addEventListener('click', async () => {
// Obtenemos el texto del input y lo pasamos a minúsculas (la API es estricta)
const nombre = input.value.toLowerCase();

// Limpiamos el contenedor por si había una búsqueda anterior
contenedor.innerHTML = "Buscando...";

// Aqui manipulamos el DOM usando innerHTML y Template Literals
try {
    // Aquí usamos la herramienta importada.
    const datos = await buscarPokemon(nombre);

    // En este espacio debemos tener en cuenta en donde exactamente están nuestros datos
    // En este caso "datos.name" y "datos.sprites.front.default"
    const nombreMayus = datos.name.toUpperCase()
    contenedor.innerHTML = `
    <h2>${nombreMayus}</h2> 
    <img src="${datos.sprites.front_default}">
    `;


    } catch(error){
        // Aquí atrapamso el error que lanzó api.js
        contenedor.innerHTML = `<h2 style="color: red;">${error.message}</h2>`;
        console.log(error.message);

    }
});






       