// MALA PRÁCTICA (Lo que NO harás)
var nombre = "Juan";
if (true) {
    var nombre = "Pedro"; // ¡Esto sobrescribe la variable global sin querer!
}
console.log(nombre); // Imprime "Pedro". Error lógico grave.

// BUENA PRÁCTICA (Tu estándar)
const cliente = "Ana"; // No cambiará
let saldo = 100;       // Cambiará

if (true) {
    let saldo = 500; // Esta variable solo existe dentro de ESTE bloque if
    console.log("Saldo interno:", saldo); // 500
}
console.log("Saldo externo:", saldo); // 100 (El original está intacto)
