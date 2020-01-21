class Hero {
    constructor (name, health, weapons, catchPhrases){
        this.name = name;
        this.health = 100;
        this.weapons = [
            {
                sprinkleSpray: 5,
                sugarShock: 10
            }
        ]
        this.catchPhrases = ['i\'m fresher than day old pizza', 
        'you can\'t count my calories']
    }

    talkSass(){
        console.log(Math.floor(Math.random()*this.catchPhrases.length))
    }
    announceHealth(){
        console.log(this.name + "'s health is " + this.health)
    }
    fight(){
        console.log("I\'m ready to rumble")
    }
    }

class Enemy {
    constructor(name, health, weapons, catchPhrases){
        this.name = name;
        this.health = 100;
        this.weapons = [
            {
                pepperoniStars: 5,
                cheeseGrease: 10    
            }
        ]
        this.catchPhrases = 
        ['i\'m youtube famous','i\'m more dangerous than an uncovered sewer']
    }
    talkSmack() {
        console.log(Math.floor(Math.random()*this.catchPhrases.length))
    }
    announceHealth(){
        console.log(this.name + "'s health is " + this.health)
    }
    fight() {
        console.log("I\'m gonna flatten you like a slice of pepperoni!")
    }
}

let PizzaRat = new Enemy (this.name = "Pizza Rat")
console.log(PizzaRat)