import { default as Parent } from "./car.js"

class Bicycle extends Parent {
    constructor(color, wheels = 2, horn = "honk honk") {
        super(color, wheels, horn)
    }
}

const Bic = new Bicycle("Red")

console.log(Bic.wheels)

Bic.honkHorn()