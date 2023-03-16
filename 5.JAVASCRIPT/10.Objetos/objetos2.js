// Segunda forma de declarar objetos con object

let jugador2 = new Object();
console.log(typeof jugador2);

jugador2.nombre = 'lionel';
jugador2.apellidos = 'Mesi';
jugador2.dorsal1 = '10';
jugador2.marcaGol = function(){
    this.goles++;
} 
jugador2.marcaGol(2);
console.log(jugador2)