// Declaracion de clases(ECMA6)

class Vehicle{
    constructor(brandIn, modelIn, colorIn, priceIn){
        this.brand = brandIn;
        this.model = modelIn;
        this.color = colorIn;
        this.price = priceIn;
    }

    getColor(){
        return this.color;
    }

    setColor(color){
        this.color = color;
    }

    getPriceWithTaxes(tax){
        return this.price + this.price * tax;
    }
}

// intancia de objetos de una clase
let Vehicle1 = new Vehicle('Renault', 'meganne', 'Gris', 1600);
console.log(Vehicle1)