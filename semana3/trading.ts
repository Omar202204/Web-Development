// El verdadero poder de TS son las Interfaces. Una interfaz es un "contrato" que obliga a un objeto a tener una estructura exacta.

// 1 Definimos la interfaz (el contrato)

interface OrdenTrading{
    simbolo : string
    precio : number
    cantidad : number
    esCompra : boolean
}


// 2. Creamos una orden usando la interfaz
const miOrden: OrdenTrading = {
    simbolo: "AAPL",
    precio: 150,
    cantidad: 12,
    esCompra: true
};

console.log(miOrden);
