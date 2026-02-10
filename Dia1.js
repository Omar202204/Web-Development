/*  Conceptos basicos de JS 

- Var, let y const
- Arrow functions
- Template literals

*/
const variables = () =>
{

    var nombre = "Juan";
    if (true) {
        var nombre = "Pedro"; // ¡Esto sobrescribe la variable global sin querer!
    }
    console.log(nombre); // Imprime "Pedro". Error lógico grave.

    // BUENA PRÁCTICA
    const cliente = "Ana"; // No cambiará
    let saldo = 100;       // Cambiará

    if (true) {
        let saldo = 500; // Esta variable solo existe dentro de ESTE bloque if
        console.log("Saldo dentro del for:", saldo); // 500
    }
    console.log("Saldo fuera del for:", saldo); // 100 (El original está intacto)
}

//Arrow functions
// Sintaxis estandar en React, Node.js y Typescript
// Tienen return implicito si no se usan las llaves

// Forma vieja (como en python)
function sumarOld(a, b){
    return a+b;
}

console.log(sumarOld(5, 3));

//  Arrow Functions
const sumarNew = (a, b) => {
    return a+b
}

console.log(sumarNew(10, 2));


const sumarPro = (a, b) => a+b

console.log(sumarPro(10, 2));

variables()




// 3. Template Literals (Interpolación)
// Olvídate de usar el símbolo + para unir textos. Es propenso a errores de espaciado. Usa las comillas invertidas (backticks) `.

const producto = "Laptop";
const precio = 800;

// Antiguo (Feo)
console.log("El producto " + producto + " cuesta $" + precio);

// Moderno (Limpio)
console.log(`El producto ${producto} cuesta $${precio}`);


// 🔥 TU MISIÓN DE HOY (Para completar antes de las 7:30 AM)
// Vas a combinar todo en un script que simule un Sistema de Calificaciones. No copies y pegues; escribe el código tú mismo para generar memoria muscular.

// Requerimientos del Script:

// Declara una constante const con el nombre de un alumno.

// Declara una lista de notas usando un Array: const notas = [8, 9, 10, 6];.

// Crea una Arrow Function que reciba una lista de notas y calcule el promedio.

// Pista: Usa un bucle for...of (investígalo rápido si no lo recuerdas) o el método .reduce() si te sientes valiente.

// Crea una variable let para guardar el promedio calculado.

// Usa un if para determinar si aprobó (mayor a 7) o reprobó.

// Imprime un mensaje final usando Template Literals:

// "El alumno [Nombre] tiene un promedio de [Promedio]. Estado: [Aprobado/Reprobado]".

