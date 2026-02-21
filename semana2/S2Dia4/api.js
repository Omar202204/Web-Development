// api.js
// Esta función NO toca el HTML. Solo devuelve datos puros.
 
// fetch hace peticiones HTTP (GET, POST, etc.) a otras computadoras en internet.

// Lo más importante: fetch tarda un tiempo indeterminado en ir y regresar, por lo tanto, siempre devuelve una Promesa.

// 2. Función asíncrona principal que se EXPORTA para usarla en app.js
export const buscarPokemon = async (nombre) => {

    try {    
        // Primer await
        const respuesta = await fetch(`https://pokeapi.co/api/v2/pokemon/${nombre}`)
        
        // Verificación de si el usuario escribió un pokemon que no existe (Error 404)
        if (!respuesta.ok) { 
            throw new Error("Pokémon no encontrado"); }
        
        // D. Extraer JSON, segundo await
        const datos = await respuesta.json()
        return datos
        
    } catch (error) {
        // Manejo de errores profesional, aqui solo lanzamos el error y lo manejamos en app.js
        throw error
    }
};