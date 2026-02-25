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
    esCompra: true, //Obligatoriamente un objeto debe llevar todas las propiedades decalardas en la interfaz
};
// Funcion con validacion de tipo entrante justo debajo: 
var procesarOrden = function (orden) {
    console.log("Procesando la compre de ".concat(orden.simbolo));
    return true;
};
procesarOrden(miOrden);
console.log(miOrden);
