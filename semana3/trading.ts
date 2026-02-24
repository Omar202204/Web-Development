// El verdadero poder de TS son las Interfaces. Una interfaz es un "contrato" que obliga a un objeto a tener una estructura exacta.

// 1 Definimos la interfaz (el contrato)

interface OrdenTrading{
    simbolo : string
    precio : number
    cantidad : number
    esCompra : boolean
}

interface OrdenLimitada extends OrdenTrading{
    precioLimite?: number // Porpiedad ocional en el 
}


// Creamos una orden usando la interfaz
const miOrden: OrdenTrading = {
    simbolo: "AAPL",
    precio: 150,
    cantidad: 12,
    esCompra: true
};

const miOrdenLimitado: OrdenLimitada = {
    simbolo: "EEPL",
    precio : 123,
    cantidad : 1,
    esCompra : true,
}

console.log(miOrden);


