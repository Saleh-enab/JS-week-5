class Car {
    constructor(color = "Blue", wheels = 4, horn = "Beep Beep") {
        this.wheels = wheels;
        this.color = color;
        this.horn = horn;
    }

    honkHorn() {
        console.log(this.horn)
    }
}

export default Car

// class Bicycle extends Car {
//     constructor(color) {
//         super(2, color, "honk honk")
//     }
// }

// const Bic = new Bicycle("Red")

// console.log(Bic.wheels)