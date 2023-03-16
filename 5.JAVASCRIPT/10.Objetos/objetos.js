// Objetos {}

// 1 Forma de declarar objetos mediate literal

let jugador1 = {
    // propiedades del metodo y son publicas
    nombre:'Sergio',
    apellido:'Ramos',
    dorsal:'4',
    goles: 0,
    equipos:['sevilla', 'Real Madrid'],

    // Metodos
    marcarGol(){
        this.goles++;
    }
}

// Acceso a los miembros (notacion del punto)
console.log(jugador1.apellido);

jugador1.marcarGol();

console.log(jugador1.goles);