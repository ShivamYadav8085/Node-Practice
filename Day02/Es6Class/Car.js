class Car {
    #modelName;
    #fuel;
    constructor(modelName){
        this.#modelName = modelName;
        this.#fuel = 0;
    }

    get getCarModel(){
        return this.#modelName
    }

    get getFuelLevel (){
        return this.#fuel;
    }

    set addFuel(fuelQuantity){
        this.#fuel+= fuelQuantity;
    }
}

const car12 = new Car("jkdfs");

console.log(car12.getCarModel);

car12.addFuel = 50;

console.log(car12.getFuelLevel);

console.log(car12);