// Funcion login (Promises)
    const espera = (ms) => {        //funcion de una simple simulacion de espera
    return new Promise((resolve) => {
        setTimeout(resolve, ms)
    })
}

const funcionPromise = () => {

    console.log("Iniciando sistema");

    espera(2000)
        .then(() =>{
            console.log("Usuario encontrado");
            return espera(2000)
        })
        .then(() => {
            console.log("Validando contraseña");
            return espera(1000)
        })
        .then(() => {
            console.log("Bienvenido al sistema");
        })
        .catch((error) => {
            console.log("Error detectado");
        })
}

// funcionPromise()


// Funcion con promesa y el uso de async / await


const esperar = (ms) => {
    return new Promise((resolve, reject) => {       // Convencion mundial de los parametros resolve, reject
        const auth = false

        if(auth){
            setTimeout(resolve, ms);
        } else {
            //setTimeout(() => reject("Error inesperado"), ms)      // Cambiar a reject("Error")
            setTimeout(() => {
                // Forma Profesional
                reject(new Error("⛔ Credenciales inválidas"));
             }, ms); //new Error lanza en consola el diagnostico del problema en las lineas exactas
            
            //reject: funcion
            //rejected: estado en el que queda la funcion despues de ser rechazada
        }
    });
};

//FUNCIÓN ASÍNCRONA
const iniciarSistema = async () => {
    try {
        console.log("1. Iniciando sistema...");
        await esperar(2000)
        console.log("2. Validando contraseña");
        await esperar(2000)
        console.log("3. Encontrado");
        await esperar(1000)
        console.log("4. ¡Éxito total!");
    } catch (error) {
        // Esto se ejecuta si alguna promesa falla (reject), y jala el error de espera
        console.error("Algo salió mal:", error);
    }
};

iniciarSistema()