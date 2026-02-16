// 1. El Concepto: innerHTML vs createElement
// Para poner cosas en la pantalla dinámicamente, tienes dos caminos:

// La forma rápida (Hack): Usar innerHTML para inyectar texto HTML como si fuera un string.

// La forma pura (Pro): Usar document.createElement().

// 2. El Código (Hands-on)
// Abre tu carpeta. Necesitas dos archivos limpios: index.html y Dia5.js.

// 1. SELECCIONAR: Traemos los 3 elementos del HTML

const input = document.querySelector('#inputTarea');
const boton = document.querySelector('#btnAgregar');
const lista = document.querySelector('#listaTareas');

// 2. LA FUNCIÓN: ¿Qué pasa cuando agrego? */

const agregarTarea = () => {
    // a. Obtener lo que escribió el usuario (.value)
    const texto = input.value;

    // Validación simple: Si está vacío, no hagas nada
    if (texto === "") {
        alert("¡Escribe algo primero!");
        return; 
    }

    // b. Crear el HTML nuevo usando Template Literals (``)
    // El += significa "agrega esto a lo que ya había antes"
    lista.innerHTML += `<li>${texto} ✅</li>`;

    // c. Limpiar el input para escribir otra cosa
    input.value = "";
};


// 3. EL EVENTO: Escuchar el click
boton.addEventListener('click', agregarTarea);


/*
3. Ejecutar y Analizar

Lo que acaba de pasar:
Tu código JS tomó un texto, lo envolvió en etiquetas HTML (<li>...</li>) y lo inyectó en la página sin recargarla.
 Acabas de crear una Single Page Application (SPA) primitiva. */