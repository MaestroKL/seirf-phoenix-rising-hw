class Hero {
    constructor (name){
        this.name = name;
        this.health = 100;
        this.weapons = [
            {name: "sprinkleSpray"
            hp: 5}
            {name: "sugarShock"
            hp: 10}
        ]
        this.catchPhrases = ['i\'m fresher than day old pizza', 
        'you can\'t count my calories']
        talkSass() {
            console.log ("randomCatchphrase")
        }
        announceHealth(){
            console.log(this.health)
        }
        fight(){
            console.log("I\'m ready to rumble")
        }

    }
}

class Enemy {

}