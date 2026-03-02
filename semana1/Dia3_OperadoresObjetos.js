const configDefault = {
    ip : "192.168.1.1",
    puerto : 80,
    admin : "root"
}
const usuarioConfig = {
    admin : "Omar",
    tema : "Oscuro"
}
// Spread Operator (...)  que combina ambos. 
const configFinal = {...configDefault, ...usuarioConfig}
console.log(configFinal);
// (Ojo: Si se repiten las propiedadades del objeto gana la que quedo al final en el Spread Operator).

// Usa Destructuring para sacar las variables ip y admin de esa configFinal.
const {ip, admin} = configFinal
console.log(Number(ip));
// Imprime: `Conectando a ${ip} como usuario: ${admin}`.
console.log(`Conectando a ${ip} como usuario: ${admin}`);

const persona = {
    nombre: "Omar",
    edad: 21,
    ciudad: "Tepa"
}

console.log("");

// Para cambiar copiaPersona sin modificar el persona: 
const copiaPersona = {...persona, ciudad: "Guadalajara"}

// Destructuring de objetos
const{nombre, edad, ciudad} = persona


console.log(nombre, ciudad);

console.log(copiaPersona);