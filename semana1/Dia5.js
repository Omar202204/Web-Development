// 1. El Concepto: innerHTML vs createElement
// Para poner cosas en la pantalla dinámicamente, tienes dos caminos:

// La forma rápida: Usar innerHTML para inyectar texto HTML como si fuera un string.

// La forma pura (Pro): Usar document.createElement().

// 2. El Código (Hands-on)
// Abre tu carpeta. Necesitas dos archivos limpios: index.html y Dia5.js.

// 1. SELECCIONAR: Traemos los 3 elementos del HTML

const input = document.querySelector('#inputTarea');
const botonAgregar = document.querySelector('#btnAgregar');
const lista = document.querySelector('#listaTareas');
const botonBorrar = document.querySelector("#btnBorrar")

// 2. LA FUNCIÓN: ¿Qué pasa cuando agrego?

const agregarTarea = () => {
    // a. Obtener lo que escribió el usuario (.value)
    const texto = input.value;

    // Validación simple: Si está vacío, no hagas nada
    if (texto === "") {
        alert("¡Escribe algo primero!");
        return; 
    }

    // b. Crear el HTML nuevo usando innerHTML y Template Literals (``)
    // El += significa "agrega esto a lo que ya había antes"
    // lista.innerHTML += `<li>${texto} ✅</li>`;

    // Ahora crearemos el HTML nuevo con document.createElement
    // 1 Crear el "cascaron" vacio
    const nuevaTarea = document.createElement("li")
    // 2 Inyectar el contenido
    nuevaTarea.textContent = `${texto}`;
    // 3 appendChild
    lista.appendChild(nuevaTarea)

    // c. Limpiar el input para escribir otra cosa
    input.value = "";
};

const borrarTarea = () => {
    lista.remove()
}


// 3. EL EVENTO: Escuchar el click
botonAgregar.addEventListener("click", agregarTarea);
botonBorrar.addEventListener("click", borrarTarea)

/*
3. Ejecutar y Analizar

Lo que acaba de pasar:
Tu código JS tomó un texto, lo envolvió en etiquetas HTML (<li>...</li>) y lo inyectó en la página sin recargarla.
 Acabas de crear una Single Page Application (SPA) primitiva. */