// Mini-Proyecto: Sistema de Notificaciones Asíncronas

// Vas a construir un sistema que:
// Cree notificaciones (objetos)
// Use una clase
// Cree instancias
// Use métodos
// Use promesas
// Simule asincronía
// Maneje estados
// Use composición en vez de herencia innecesaria

// Las notificaciones sean instancias

// Se simule un envío asíncrono con Promise

// Cada notificación tenga estado: pendiente | enviada | error

//Sintaxis de un objeto:
// const notificacion = {
//     id: "1",
// }


const esperar = (ms) =>
    new Promise((resolve) => {
        setTimeout(() => {
        resolve()
    }, ms)
})

class Notificacion{
    constructor(id, titulo, mensaje, prioridad, estado){
        this.id = id
        this.titulo = titulo
        this.mensaje = mensaje
        this.prioridad = prioridad
        this.estado = estado
    }

    marcarComoEnviada(){
        console.log("Enviada");
    }

    marcarComoError(){
        console.log("Esto es un error");
    }
}

class SistemaDeNotificaciones{
    // Declaracion de array privado
    #arrayNotificaciones = [];

    crearNotificacion(titulo, mensaje, prioridad){

    }

    enviarNotificacion(notificacion){
        const esperador = async (ms) => {
            await esperar(1000)
            console.log(`Notificacion enviada: ${notificacion}`);
        }
    }
    

    mostrarTodas(){

    }

}

const notificacion = new SistemaDeNotificaciones
notificacion.enviarNotificacion("Hola Mundo")  
