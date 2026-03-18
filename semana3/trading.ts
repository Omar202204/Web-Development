// El verdadero poder de TS son las Interfaces
// Una interfaz es un "contrato" que obliga a un objeto a tener una estructura exacta.

// 1 Definimos la interfaz

interface OrdenTrading{
    simbolo : string
    precio : number
    cantidad : number
    tipoAccion: "COMPRA" | "VENTA"
}

// Una extension de una interfaz jala las propiedades de una a otra
interface OrdenLimitada extends OrdenTrading{
    precioLimite?: number // Propiedad ocional (?)
}



// Creamos una orden usando la interfaz (Un objeto de interfaz)
const miOrden: OrdenTrading = {
    simbolo: "AAPL",
    precio: 150,
    cantidad: 12,
    tipoAccion : "COMPRA"
    //tipoAccion: "HOLA"  //Error que nos dice que solo COMPRA | VENTA pueden ir aqui

};

// Objeto de interfaz
const miOrdenLimitado: OrdenLimitada = {
    simbolo: "EEPL",
    precio : 123,
    cantidad : 1,       // Obligatoriamente un objeto debe llevar todas las propiedades declaradas en la interfaz
    tipoAccion : "COMPRA",
    precioLimite : 5000
    
    //esCompra : true,    // PROPIEDAD NO DECLARADA ANTERIORMENTE
}

// Funcion con validacion de tipo entrante justo debajo: 
const procesarOrden = (orden: OrdenTrading): boolean => {       // Solo recibe tipos "OrdenTrading" y salen booleans
    console.log(`Procesando la compre de ${orden.simbolo}`);        // 
    return true;
}

procesarOrden(miOrden)
console.log(miOrden);


//              CLASES

// 1. Definimos la (Clase)
class BotTrading {
    // Un arreglo vacio de órdenes:
    historial: OrdenTrading[] = [];  // Solo acepta objetos que hayan pasado mi interfaz OrdenTrading

    // B. El método para guardar información
    agregarOrden(nuevaOrden: OrdenTrading): void {
        this.historial.push(nuevaOrden);
        
        console.log(`Orden guardada. Transacciones totales: ${this.historial.length}`);
        console.log(this.historial);
    }
}

// 2. Creamos la Instancia real usando "new"
const miBot = new BotTrading(); 

// 3. Usamos el bot
miBot.agregarOrden(miOrdenLimitado); // Asumiendo que miOrden sigue existiendo arriba



// Simulamos ir a una API financiera
const obtenerPrecioMercado = async (simbolo: string): Promise<number> => {
    console.log(`Buscando precio en tiempo real para ${simbolo}...`);
    return 150
};

// Llamamos a la función (recuerda que al ser asíncrona, en la vida real usaríamos 'await')
obtenerPrecioMercado("AAPL").then(precio => console.log(`El precio llegó: $${precio}`));
