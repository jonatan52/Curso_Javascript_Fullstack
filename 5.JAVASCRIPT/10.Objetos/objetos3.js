// Tercera forma declarar objetos mediante funcion constructura

function Jugador(nombreIn, apellidosIn, dorsalIn, golesIn){
    this.nombreIn = nombreIn;
    this.apellidosIn = apellidosIn;
    this.dorsalIn = dorsalIn;
    this.goles = golesIn;

    this.marcaGol = function(){
        this.goles++;
    }
}

// instanciar objetos
let jugador3 = new Jugador('Rafael', 'Varane', '08', 0);
let jugador4 = new Jugador('Julio', 'Iglesia', '01', 0);

jugador3.marcaGol();
console.log(jugador3)