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
        const id = Date.now()

        // Nueva instancia de creacion de notificaciones
        const nuevaNotificacion = new Notificacion( // Aqui usamos el constructor para crear nuestra notificaciones
            id, 
            titulo,
            mensaje,
            prioridad
        )     
        // Agregamos la nueva instancia de notificacion al array
        this.#arrayNotificaciones.push(nuevaNotificacion)

        this.enviarNotificacion(nuevaNotificacion)
            .then(() => {
                nuevaNotificacion.marcarComoEnviada()
            })
            .catch(() => {
                nuevaNotificacion.marcarComoError()
            })
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
        console.log(this.#arrayNotificaciones);     //Intentar sin el this
    }
}

const notificacion = new SistemaDeNotificaciones
const notificacionA = new Notificacion(12, "hola", "como estas", "media", "activo")

notificacion.crearNotificacion("Pago", "Todo bien", "alta")
notificacion.crearNotificacion("Bienvenida", "Este es un mensaje de bienvenida", "baja")

setTimeout(() => {
  notificacion.mostrarTodas()  
}, 2000);



// notificacion.enviarNotificacion(notificacionA)
//     .then((mensaje) => {
//         notificacionA.marcarComoEnviada()
//         console.log("Exito:", mensaje)
//         console.log(`Estado final de notificacion: `, notificacionA);
//     })
//     .catch((error) => {
//         notificacionA.marcarComoError()
//         console.log("Error:", error);
//     })

