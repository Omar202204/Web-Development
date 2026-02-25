// Mini-Proyecto: Sistema de Notificaciones Asíncronas

// Creacion de notificaciones (objetos)
// Clases
// Instancias
// Métodos
// Promesas
// Asincronía
// Manejo de estados

//Sintaxis de un objeto:

// const notificacion = {
//     id: 1, ....
// }

//Sintaxis de un objeto de clase:

// const notificacion = new Notificacion {
//     1, ....
// }


// PARTE 4 — Integración

// Cuando crees una notificación:

// Se agrega al array

// Se intenta enviar automáticamente

// Si se resuelve → estado cambia a "enviada"

// Si falla → estado cambia a "error"

class Notificacion{
    constructor(id, titulo, mensaje, prioridad, estado){
        this.id = id
        this.titulo = titulo
        this.mensaje = mensaje
        this.prioridad = prioridad
        this.estado = "pendiente"
    }

    marcarComoEnviada(){
        this.estado = "Estado: Enviada"
    }

    marcarComoError(){
        this.estado = "Estado: Error"
    }
}

class SistemaDeNotificaciones{
    // Declaracion de array privado
    #arrayNotificaciones = [];

    // Metodo
    crearNotificacion(titulo, mensaje, prioridad){
        const nuevaNotificacion = new Notificacion{ // Aqui usamos el constructor para crear nuestra notificaciones
            id, 
            titulo,
            mensaje,
            prioridad
        }            
    }

    // Metodo
    enviarNotificacion(notificacion){
        return new Promise((resolve, reject) => {           // devuelve una promesa, esta promesa se devuelve inmediatamente con "pending"

            setTimeout(() => {                              // simula un retraso con setTimeout, y despues de 1 seg. entra al if
                if(notificacion.prioridad === "alta"){
                    resolve("Funciona despues de 1 segundo")
                }                                           // Dependiendo el if al que entra la promesa cambia a resolve/reject
                if(notificacion.prioridad === "media"){
                    resolve("Funciona despues de 1 segundo")
                }
                if(notificacion.prioridad === "baja"){
                    reject("No funciona despues de 1 segundo")
                }
            }, 1000);
        })
    }
    
    //Metodo
    mostrarTodas(){

    }
}

const notificacion = new SistemaDeNotificaciones
const notificacionA = new Notificacion(12, "hola", "como estas", "media", "activo")

notificacion.enviarNotificacion(notificacionA)
    .then((mensaje) => {
        notificacionA.marcarComoEnviada()
        console.log("Exito:", mensaje)
        console.log(`Estado final de notificacion: `, notificacionA);
    })
    .catch((error) => {
        notificacionA.marcarComoError()
        console.log("Error:", error);
    })

