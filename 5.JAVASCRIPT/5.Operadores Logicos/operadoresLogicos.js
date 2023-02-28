// =================== Operadores Logicos ===================

// Operador logico AND &&

let valor1 = 12;
let valor2 = 13;
let valor3 = 12;

let resultado = valor2 < valor1 && valor1 === valor3;
console.log(resultado)// false

// Operador logico OR || 
let resultado2 = valor2 < valor1 || valor1 === valor3;
console.log(resultado2)// true

// Operador logico NOT !(Negacion Unaria)
let mayorEdad = false;
mayorEdad = !mayorEdad;
console.log(mayorEdad)//true


// Operador Condicional (Ternario)
// expresionDeCondicion ? valor1: valor2;

let estado;
let edadParticipante = 14;

estado = edadParticipante >= 18 ? 'Adulto' : 'Menor';
console.log(`El participante es ${estado}`)
