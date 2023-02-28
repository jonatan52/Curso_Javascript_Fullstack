// ======================== Operadores de asignacion ========================
   // +=, -=, *=, /=, %=
// Asignacion de Adicion +=
let puntuacion1 = 4;
let puntuacion2 = 9;

puntuacion1 += puntuacion2;
console.log(puntuacion1)

// ======================== Operadores de Comparacion ========================
let ciudad = 'madrid';
let termino = 'madrid';

let hayConincidencia = ciudad == termino;
console.log(hayConincidencia)

// No es estricto con los tipos de datos
let Valor1 = 3;
let Valor2 = '3';

let coincicencia = Valor1 == Valor2
console.log(coincicencia)// true

// Operador de igualdad estricta ===
let ValorUno = 3;
let ValorDos = '3';

let coincicencia2 = Valor1 === Valor2
console.log(coincicencia2)// false


// Operador de desigualdad estricta !==
let Valor3 = 3;
let Valor4 = '3';

let coincicencia3 = Valor1 !== Valor2
console.log(coincicencia3)// true
