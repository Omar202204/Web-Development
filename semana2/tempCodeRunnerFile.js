utenticado  //Si el usuario esta autenticado o no, ENTONCES (then)
    .then((resultado) => {      // Resultado sera resolve/rejected dependiendo del caso
        console.log(resultado);   // Aqui manejamos el promise desde dentro (idealmente)
    })
    .catch((error) => {     // Aqui las variables pasadas como argumento pueden ser nombradas como sea
        console.log(error);     //Aqui por ejemplo podemos error para hacerlo mas legible
    })