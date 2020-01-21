class Hamster {
    // owner: randomname,
    constructor(name){
        this.name = name
    }
    // price: 0,
    wheelRun() {
        console.log("squeak squeak")
    }
    eatFood() {
        console.log("nibble nibble")
    }
    getPrice(){
        return price
    }
}

class Person {
    constructor(name){
        this.name = name;
        this.age = 0;
        this.height = 0;
        this.weight = 0;
        this.mood = 0;
        this.hamster = [
        ];
        this.bankAccount = 0;
    }
    getName(){
        return this.name
    }
    getAge(){
        return this.name
    }
    getWeight(){
        return this.weight
    }
    greet(){
        console.log("Hello" + this.name)
    }
    eat(){
        this.weight= this.weight + 1
        this.mood= this.mood + 1
    }
    exercise(){
        this.weight=this.weight-1
    }
    ageUp(){
        this.age=this.age + 1
        this.height=this.height + 1
        this.weight = this.weight + 1
        this.mood = this.mood - 1
        this.bankAccount = this.bankAccount + 10
    }

    buyHamster(hamster){
        this.buyHamster.push (hamster)
        this.mood = this.mood - 10
        this.bankAccount=this.bankAccount - Hamster.getPrice
    }
    }

let Tim = new Person(this.name = "tim")
Tim.age = 5;
Tim.eat()
Tim.eat()
Tim.eat()
Tim.eat()
Tim.eat()

console.log (Tim)
Tim.exercise()
Tim.exercise()
Tim.exercise()
Tim.exercise()
Tim.exercise()
console.log(Tim)

let Gus = new Hamster(this.name = "gus")
// Hamster owner and price giving me errors. cannot use for certain Timmy questions.
console.log (Gus)
Tim.bankAccount = Tim.bankAccount - Gus.getPrice()
Tim.age = 15
Tim.eat()
Tim.eat()
Tim.exercise()
Tim.exercise()