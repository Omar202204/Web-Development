export {}; // COn esta linea de codigo podemos exportar modulos, pero tambien 
// le decimos a Typescript que este es un archivo unico y no compartido con los demas .ts
// (despues da problema con variables repetidas entre distintos archivos .ts)

// MOLDE BASE
interface ActivoFinanciero {
    readonly simbolo: string;           // Ej: "BTC" // de solo lectura
    precioActual: number;      // Ej: 65000.50
    // Sector es opcional
    sector?: string;       
}

// extends hereda de ActivoFinanciero
interface Criptomoneda extends ActivoFinanciero {
    // O uno u otro
    red: "Bitcoin" | "Ethereum" | "Solana";
}

// No devuelve nada (void), solo hace tiempo.
const esperar = (milisegundos: number): Promise<void> => {
    
    // Creamos una nueva promesa. Toda promesa nos da un "botón" llamado 'resolve' 
    // que debemos presionar cuando queremos avisar que ya terminamos.
    return new Promise((resolve) => {
        
    // Aqui volvemos a llamar a resolve
    setTimeout(resolve, milisegundos);
    });
};

// (ARREGLO TIPADO)
// Solo permite guardar objetos del tipo 'Criptomoneda'
const portafolio: Criptomoneda[] = [];

// FUNCIÓN ASÍNCRONA
// El cadenero de entrada recibe un texto.
// El cadenero de salida promete entregar un número.
const buscarPrecioCripto = async (simbolo: string): Promise<number> => {
    // Simulamos una espera en internet
    console.log(`Buscando en la blockchain el precio de ${simbolo}...`);
    await esperar(2000)
    return 65000.50; 
};

// Instancias de nuestras interfaces u objetos
const inversion : ActivoFinanciero = {
    simbolo : "BTC",
    precioActual : 500,
    sector : "Cripto"
}

// No se puede cambiar la propiedad una vez creada por el readonly
// inversion.simbolo=1000   // Da error

const cripto : Criptomoneda = {
    precioActual: 50,
    simbolo: "ETH",
    red: "Ethereum"
}

portafolio.push(cripto)
console.log(portafolio);

// Aqui aparece explicitamente lo que estamos llamando (la promesa con el valor del return)
console.log(buscarPrecioCripto(inversion.simbolo));  // Aparece en pending pues espera a la promesa

// Aqui se llama al simbolo de nuestro objeto inversion como tal (BTC)
buscarPrecioCripto(inversion.simbolo);      

// Con then esperamos la promesa e imprimimos el precio dentro de la función esperar
buscarPrecioCripto(inversion.simbolo)
.then((precioFinal)=>{  
    console.log(`El precio es: ${precioFinal}`);
})