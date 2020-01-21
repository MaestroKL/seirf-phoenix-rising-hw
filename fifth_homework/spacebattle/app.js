
// Ship 1: USS MaestroKL object:
let player1 = {
    hull: 20,
    firepower: 20,
    accuracy: 0.7,
    attack: () =>{
    console.log("attacking")
    attack = enemyShip => {
        console.log("Player attacking Alien ship");
        // determine if player hit or miss
        if (Math.random < player1.accuracy){
            console.log("Attack hit");
            alien1.hull = alien1.hull - player1.firepower;
        }
        else console.log ("Attack Miss")
        // Alien autoattack player1
            alien1.attack(player1)
    }
}
}

//Determine enemy random hull strength 3-6
let randomHull = Math.ceil((Math.random()*4)+2)

//Determine enemy random firepower 2-4
let randomFirepower = Math.ceil((Math.random()*3)+1)

//determine enemy random accuracy between 0.6 and 0.8 
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) + 1) + min;
  }
let randomAccuracy = (getRndInteger(6, 8))/10

// Ship 2: Alien ship
//Class AlienShips template
class AlienShip {
    constructor(){
        this.hull = randomHull
        this.firepower = randomFirepower
        this.accuracy = randomAccuracy
        this.attack = playerShip => {
            console.log ("Alienship attack Player")
            if (Math.random < alien1.accuracy){
                Console.log ("Alien attack hit!")
                player1.hull = player1.hull - alien1.firepower
            }
            else {
                console.log ("Attack Miss")
            }
        }
    }
}
// Start game
console.log(player1)
console.log("Generating enemy ship")
alien1 = new AlienShip();
console.log(alien1)


let response = false;
while (response == false){
    response = prompt("attack or retreat", "attack");
    if (response === "attack"){
        console.log("Attack")
    }
    else if (response === "retreat"){
        console.log("retreat: game over")
        }
    else {response = false}
}


// if attack, if hit(alienhull minus firepower). else if miss (alienhull)
// if enemy alive, return fire: if hit(playerhull minus alienfirewpower); else if miss (playerhull)
// if enemy is dead, console log Enemy is dead And prompt (generate new ship or retreat)

// prompt to attack or retreat