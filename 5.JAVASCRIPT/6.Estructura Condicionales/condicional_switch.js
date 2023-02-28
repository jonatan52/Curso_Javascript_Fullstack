// Condicional switch
console.log('========== Dia de la semana ==========')
let diaSemana = 3;

switch(diaSemana){
    case 1:
        console.log('Hoy es lunes');
        break;
    case 2:
        console.log('Hoy es martes');
        break;
    case 3:
        console.log('Hoy es miercoles');
        break;
    case 4:
        console.log('Hoy es jueves');
        break;
    case 5:
        console.log('Hoy es viernes');
        break;
    case 6:
        console.log('Hoy es sabado');
        break;
    case 7:
        console.log('Hoy es domingo');
        break;
    default:
        console.log('Dia no valido')
}

console.log('========== Mes por trimestre ==========')
let mes = 'Octubre';

switch(mes){
    case 'Enero' :
    case 'Febrero':
    case 'marzo':    
        console.log(`${mes} pretenece al primer trimestre`)
        break;
    case 'Abril' :
    case 'Mayo':
    case 'Junio':    
        console.log(`${mes} pretenece al segundo trimestre`)
        break;
    case 'Julio' :
    case 'Agosto':
    case 'Septiembre':    
        console.log(`${mes} pretenece al trimestre trimestre`)
        break;
    case 'Octubre' :
    case 'Noviembre':
    case 'Diciembre':    
        console.log(`${mes} pretenece al cuarto trimestre`)
        break;
    default:
        console.log('Ingrese un mes valido')

}