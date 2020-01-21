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
        console.log(this.catchPhrases[Math.floor(Math.random()*(this.catchPhrases.length))])
    }
    announceHealth(){
        console.log(this.name + "'s health is " + this.health)
    }
    fight(enemy) {
        console.log("this.name uses sprinkleSpray")
        enemy.health = enemy.health - this.weapons.sprinkleSpray
    }
    }

let dougie = new Hero (this.name = "Dougie the Donut")
console.log (dougie)

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
        console.log(this.catchPhrases[Math.floor(Math.random()*this.catchPhrases.length)])
    }
    announceHealth(){
        console.log(this.name + "'s health is " + this.health)
    }
    fight(enemy) {
        console.log("this.name uses cheeseGrease")
        enemy.health = enemy.health - this.weapons.cheeseGrease
    }
}

let pizzaRat = new Enemy (this.name = "Pizza Rat")
console.log(pizzaRat)

// WALKING DOWN THE STREET: talk smack. 
dougie.talkSass()
pizzaRat.talkSmack()
dougie.announceHealth()
pizzaRat.announceHealth()

// FIGHT: (stuck on passing rat's weapon damage to doug's health and vice versa)
dougie.fight(pizzaRat);
pizzaRat.fight(dougie);
dougie.announceHealth();
pizzaRat.announceHealth();