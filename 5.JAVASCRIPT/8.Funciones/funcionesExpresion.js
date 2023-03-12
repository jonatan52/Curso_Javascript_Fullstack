//funciones de expresion (Anonimas)
let cuadrado = function(a){
    return a * a;
}

console.log(cuadrado(5));

// Funciones Flecha

// let cubo = (a) =>{
//     return a * a * a;
// }

let cubo = a => a * a * a; //Si la funcion solo tiene un parametro podemos eliminar los parentesis 
                           // y solo tenemos una sola linea podemos eliminar tanto la llave como el return
console.log(cubo(5));