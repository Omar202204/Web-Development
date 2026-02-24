// En Javascript, una Promise es un Objeto que representa la eventual finalización 
// (o falla) de una operación asíncrona.

// Es como un "Ticket de cambio" o un "Pagaré".

// Tiene 3 estados posibles:

// Pending (Pendiente): El proceso está corriendo (la pizza se está horneando).

// Resolved / Fulfilled (Resuelta): Todo salió bien (te entregaron la pizza).

// Rejected (Rechazada): Algo falló

//      Esto es una instancia de la clase Promise
const usuarioAutenticado = new Promise((resolve, rejected) => {
    const auth = true

    if(auth){
        resolve("Usuario autenticado")
    }else{
        rejected("Failure")
    }
})

usuarioAutenticado  //Si el usuario esta autenticado o no, ENTONCES (then)
    .then((resultado) => {      // Resultado sera resolve/rejected dependiendo del caso
        console.log(resultado);   // Aqui manejamos el promise desde dentro (idealmente)
    })
    .catch((error) => {     // Aqui las variables pasadas como argumento pueden ser nombradas como sea
        console.log(error);     //Aqui por ejemplo podemos error para hacerlo mas legible
    })

