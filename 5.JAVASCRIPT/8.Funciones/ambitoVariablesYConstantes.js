//Ambito de las variables y constantes(dependiendo de su forma declaracion)
// El ambito de las variables es el de la funcion mas proxima


var apellidos = "Lopez Perez"; // ambito global
var apellidos = "Fernadez";

function setMayorEdad(edad){
    if(edad >= 18){
        var adulto = true;
    } else{
        var adulto = false;
    }

    console.log(adulto);
}

setMayorEdad(33);

// console.log(adulto);  adulto is not undefine

// Variables declaradas con let o constantes
// el ambito es el bloque mas proximo de la variable

let ciudad = "barcelona"; // ambito global
// let ciudad = "Bogota"; no se puede redclarar(error)

function setPuntuacion(puntuacion){
    if(puntuacion >= 5){
        let apto = true;
        console.log(apto);
    } else{
         let apto = false;
         console.log(apto);
    }
    console.log(apto) // devolvera ReferenceError: apto is not defined 
}

setPuntuacion(7)
