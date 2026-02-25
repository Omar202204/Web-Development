// El verdadero poder de TS son las Interfaces. Una interfaz es un "contrato" que obliga a un objeto a tener una estructura exacta.

// 1 Definimos la interfaz (el contrato)

interface OrdenTrading{
    simbolo : string
    precio : number
    cantidad : number
    tipoAccion: "COMPRA" | "VENTA"
}

// Una extension de una interfaz jala las propiedades de una a otra
interface OrdenLimitada extends OrdenTrading{
    precioLimite?: number // Propiedad ocional
}



// Creamos una orden usando la interfaz (Un objeto de interfaz)
const miOrden: OrdenTrading = {
    simbolo: "AAPL",
    precio: 150,
    cantidad: 12,
    tipoAccion: "HOLA"

};

// Objeto de interfaz
const miOrdenLimitado: OrdenLimitada = {
    simbolo: "EEPL",
    precio : 123,
    cantidad : 1,
    esCompra : true,     //Obligatoriamente un objeto debe llevar todas las propiedades decalardas en la interfaz
}

// Funcion con validacion de tipo entrante justo debajo: 
const procesarOrden = (orden: OrdenTrading): boolean => {       // Solo recibe tipos "OrdenTrading" y salen booleans
    console.log(`Procesando la compre de ${orden.simbolo}`);        // 
    return true;
}

procesarOrden(miOrden)


console.log(miOrden);


