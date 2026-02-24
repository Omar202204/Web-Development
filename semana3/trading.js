// El verdadero poder de TS son las Interfaces. Una interfaz es un "contrato" que obliga a un objeto a tener una estructura exacta.
// Creamos una orden usando la interfaz
var miOrden = {
    simbolo: "AAPL",
    precio: 150,
    cantidad: 12,
    esCompra: true
};
var miOrdenLimitado = {
    simbolo: "EEPL",
    precio: 123,
    cantidad: 1,
    esCompra: true,
};
console.log(miOrden);
