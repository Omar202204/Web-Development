// 1- .map(): Transforma cada elemento de una lista y te devuelve una lista nueva del mismo tamaño. (Ej: Convertir precios a dólares).

// 2- .filter(): Filtra la lista según una condición y te devuelve una lista más pequeña (o vacía). (Ej: Mostrar solo usuarios "activos").

// 3- .find(): Busca un solo elemento (el primero que coincida) y te lo entrega. (Ej: Encontrar al usuario con ID 55).


// Array de objetos con productos

const listaSuper = [
    {id : 1, nombre : "Leche", marca : "19 hermanos", precio : 50},
    {id : 1, nombre : "Huevos", marca : null, precio : 100},
    {id : 1, nombre : "Jamon", marca : "Chaparral", precio : 45},
    {id : 1, nombre : "Pan", marca : "Alteña", precio : 75},
    {id : 1, nombre : "Jugo", marca : "Jumex", precio : 20}
]

// Filtrar: Usa .filter() para sacar solo los productos que cuesten menos de 500 dólares (tu presupuesto barato).
let preciosCaros = listaSuper.filter(producto => producto.precio >= 50)
console.log(preciosCaros);

// Transformar (Map): Usa .map() para crear una lista simple que solo tenga los nombres de los productos (strings), 
// no los objetos completos.

let nombres = listaSuper.map(producto => producto.nombre)
console.table(nombres);

// Buscar (Find)
let id1 = listaSuper.find(producto => {
    return producto.id === 1})

console.log(id1.nombre);

const nombre = id1 ? id1.nombre : undefined;

console.log(nombre);


const numeros = [
    1, 2, 3, 4, 5
]


const pares = numeros.filter(n => n%2==0)
console.log(pares);

const triples = numeros.map(n => n*3)
console.log(triples); 

const suma = numeros.reduce((acumulador, valorActual) =>
    acumulador + valorActual, 0)    // definimos que empieza desde cero

console.log(suma);

let sumaFor= 0;

for (let index = 0; index < numeros.length; index++) {
    sumaFor += numeros[index]
    console.log(`SumaFor va en: ${sumaFor}`);   
}

console.log(numeros.length);

console.log(sumaFor);