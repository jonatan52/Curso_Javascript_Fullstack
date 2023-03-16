// Cuarta forma de declarar objetos mediante factory functions

function Empleado(nombre, apellido){
    return{
        nombre,
        apellido
    }
}

let Empleado1 = Empleado('Juan', 'Lopez Perez');
console.log(Empleado1.nombre)