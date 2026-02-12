// Crea un objeto llamado configDefault con: // { ip: "192.168.1.1", puerto: 80, admin: "root" }.
const configDefault = {
    ip : "192.168.1.1",
    puerto : 80,
    admin : "root"
}
// Crea un objeto usuarioConfig con: { admin: "Omar", tema: "Oscuro" }.
const usuarioConfig = {
    admin : "Omar",
    tema : "Oscuro"
}
// Usa el Spread Operator (...) para crear una configFinal que combine ambos. 
const configFinal = {...configDefault, ...usuarioConfig}
console.log(configFinal);
// (Ojo: El admin debe quedar como "Omar", así que pon el usuario después del default).

// Usa Destructuring para sacar las variables ip y admin de esa configFinal.
const {ip, admin} = configFinal
console.log(Number(ip));
// Imprime: `Conectando a ${ip} como usuario: ${admin}`.
console.log(`Conectando a ${ip} como usuario: ${admin}`);