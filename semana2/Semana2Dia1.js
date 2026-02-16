// (Callback Hell Simulator)
// Vas a simular un proceso de "Login" falso.

// Imprima: "Iniciando sistema..."

// Use un setTimeout (3 segundos) para simular que está verificando usuario. Adentro debe decir: "Usuario encontrado: Omar".
// DENTRO de ese primer setTimeout, pon otro setTimeout (2 segundos más) que diga: "Validando contraseña...".
// DENTRO de ese segundo, pon un tercero (1 segundo) que diga: "¡Bienvenido al sistema!".
console.log("Iniciando sistema");

setTimeout(()=>{
    console.log("Usuario encontrado: Omar");

    setTimeout(() => {
        console.log("Validando contraseña");

        setTimeout(()=>{
        console.log("Bienvenido al sistema");
        }, 1000)

    }, 2000)

}, 2000)


// Esto se llama Callback Hell (Infierno de Callbacks). Hazlo para que veas lo feo que se ve el código anidado (una pirámide hacia la derecha).
//  Mañana aprenderemos a arreglar ese desastre con Promesas.