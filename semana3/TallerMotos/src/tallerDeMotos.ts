// Importamos las herramientas nativas de Node.js para interactuar con la terminal
import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

// Creamos nuestro "cadenero" de la terminal, que nos permitirá hacer preguntas
const lector = readline.createInterface({ input, output });

interface Vehiculo {
    marca: string, 
    modelo: string,
    cilindraje: number
}

interface ordenTaller extends Vehiculo {
    falla?:string,
    estado: "RECIBIDA" | "REVISION" | "REPARADA" 
}

const arregloVacio = [] // Arreglo vacio
const inventarioTaller : ordenTaller[] = []     // Arreglo vacio que solo permite datos de ordenTaller

const ingresarMoto = (moto : ordenTaller) : void => {
    inventarioTaller.push(moto)
}

const esperar = (milisegundos: number): Promise<void> => {
    
    // Creamos una nueva promesa. Toda promesa nos da un "botón" llamado 'resolve' 
    // que debemos presionar cuando queremos avisar que ya terminamos.
    return new Promise((resolve) => {
        
    // Aqui volvemos a llamar a resolve
    setTimeout(resolve, milisegundos);
    });
};

const repararMoto = async (moto: ordenTaller) : Promise<string> => {
    await esperar(2000)
    moto.estado = "REPARADA"
    return(`La moto de marca ${moto.marca} ya esta ${moto.estado}`)

}

// Función principal que controla el flujo del programa
const iniciarSistema = async () => {
    console.log("=== SISTEMA DE TALLER INICIADO ===");

    // 1. Pedimos datos usando await (porque el usuario tarda en responder)
    const marcaIng = await lector.question("Ingrese la marca de la moto: ");
    const modeloIng = await lector.question("Ingrese el modelo: ");
    
    // OJO AQUÍ: Todo lo que entra por consola en JavaScript es texto (string).
    const cilindrajeTexto = await lector.question("Ingrese el cilindraje: ");

    const fallaIng = await lector.question("¿Cual es la falla?: \n");
    
    // 2. ¿Qué función nativa de JavaScript usas para convertir ese 'cilindrajeTexto' 
    // en un número real para que tu interfaz no te marque error?
    const cilindrajeNum = Number(cilindrajeTexto);                          //calar el + en ves de Number

    // 3. Construye el objeto con las variables que acabas de recolectar
    const nuevaMoto: ordenTaller = {
        marca: marcaIng,
        modelo: modeloIng,
        cilindraje: cilindrajeNum,
        falla: fallaIng,
        estado: "RECIBIDA"
    };

    // 4. Llama a tu función para guardar la moto en el arreglo
    ingresarMoto(nuevaMoto);
    console.log(`\nMoto ${marcaIng} ingresada al sistema. Iniciando reparación...`);

    // 5. Llama a tu función asíncrona de reparación y prepara el guante (.then)
    repararMoto(nuevaMoto).then((mensaje) => {

        console.log(mensaje);

        // Mala forma
        console.log(`Datos: ${nuevaMoto}`);

        // Buena forma
        console.log("Datos de la moto ingresada:", nuevaMoto);

        // Forma profesional
        console.log(`Datos: \n${JSON.stringify(nuevaMoto, null, 2)}`);

        // MUY IMPORTANTE: Si no apagamos el lector, la terminal se quedará 
        // pasmada esperando más texto para siempre.
        lector.close(); 
    });
};

// Arrancamos el motor llamando a la función principal
iniciarSistema();


// CREACION LITERAL DE OBJETO

// const miMoto : ordenTaller = {
//     marca: "Italika",
//     modelo: "FT250TS",
//     cilindraje: 250,
//     estado: "RECIBIDA",
//     falla: "No prende el faro"
// }

// ingresarMoto(miMoto)

// repararMoto(miMoto)
// .then((loQueAtrape) => {
//     console.log(loQueAtrape);
// })

