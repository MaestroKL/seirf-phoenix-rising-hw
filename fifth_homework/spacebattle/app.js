// USS Maestro is captain of Defender
// Six alien ships will attack in tandem
// Game mechanics: 
// Defender attacks first. If alien survives, it attacks you. Repeat
    // If alienship destroyed; Defender has optin to retreat or attack; 
        // retreat will end in game-over
        // attack will bring on next attacker

// SHIP PROPERTIES: 

let usMaestro = {
    hull: 20,
    firepower: 5,
    accuracy: 0.7,
}

// TASK 1: ALIEN SHIP PROPERTIES with varying stats: 
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; 
  }

let alienOne = {
    hull: Math.floor(Math.random()*4)+3,
    firepower:  Math.floor(Math.random()*3)+2,
    accuracy: (getRandomIntInclusive(6, 8))/10
}

let alienTwo = {
    hull: Math.floor(Math.random()*4)+3,
    firepower:  Math.floor(Math.random()*3)+2,
    accuracy: (getRandomIntInclusive(6, 8))/10
}

let alienThree = {
    hull: Math.floor(Math.random()*4)+3,
    firepower:  Math.floor(Math.random()*3)+2,
    accuracy: (getRandomIntInclusive(6, 8))/10
}
let alienFour = {
    hull: Math.floor(Math.random()*4)+3,
    firepower:  Math.floor(Math.random()*3)+2,
    accuracy: (getRandomIntInclusive(6, 8))/10
}

let alienFive = {
    hull: Math.floor(Math.random()*4)+3,
    firepower:  Math.floor(Math.random()*3)+2,
    accuracy: (getRandomIntInclusive(6, 8))/10
}

let alienSix = {
    hull: Math.floor(Math.random()*4)+3,
    firepower:  Math.floor(Math.random()*3)+2,
    accuracy: (getRandomIntInclusive(6, 8))/10
}

// Create Class to generate multiple ships: shortcut for now; generating all 6 ships without class. 
// class AlienShip {
//     constructor(name, hull, firepower, accuracy){
//         this.name = name
//         this.hull = Math.floor(Math.random()*4)+3,
//         this.firepower = Math.floor(Math.random()*3)+2,
//         this.accuracy = (getRandomIntInclusive(6, 8))/10

//     }
// }
// let alienArray = []
// for (i=0; i <5; i++){
//     let generateAlien = new AlienShip (i)
//     alienArray.push (generateAlien)
    
// }



// PLAYER INTERACTIVITY 


    // Starting Prompt
function attackCycle() {


let yourStartAnswer = prompt("Are you ready to engage? (Yes/No)")

if (yourStartAnswer == "Yes" ){
        console.log ("Incoming enemy! Current Stats:")
        console.log ("You")
        console.log (usMaestro)
        console.log ("Enemy")
        console.log (alienOne)
            }
    else if (yourStartAnswer == "No") {
        console.log("Gameover; hit refresh to restart")
    }
    else {console.log ("Please enter acceptable responses only; hit refresh to restart")}

    // ENGAGEMENT PROMPT
if (yourStartAnswer == "Yes"){
    let engageAnswer = prompt("Approaching Enemy! Do you want to Attack or Retreat (Attack/Retreat)")
        if (engageAnswer == "Attack"){
            // recalculate hull integrity
            if (Math.random()<0.7){
                console.log("You scored a hit!")
                alienOne.hull = alienOne.hull - usMaestro.firepower
            }
            else {
                console.log("You missed")
            }
            // re-console stats
            console.log ("Current Stats:")
            console.log ("You")
                        console.log (usMaestro)
            console.log ("Enemy")
            console.log (alienOne)
        }
        else if (engageAnswer =="Retreat"){
            console.log("Gameover. hit refresh to restart")
        }
        else {console.log ("Please enter acceptable responses only; hit refresh to restart")}
    }

// ENEMY RETURN FIRE PROMPT: If attack and alienOne.hull > 0, let enemy return fire
    if (yourStartAnswer == "yes" && alienOne.hull > 0){
        console.log ("Enemy survives. They are returning fire!")
            if(Math.random()<alienOne.acccuracy){
                console.log("Enemy scored a hit. We took damage!")
                usMaestro.hull = usMaestro.hull - alienOne.firepower
            }
            else {
                console.log("They missed!")
                attackCycle()
            }
        }
    else {
            console.log ("")
        }

    }
    attackCycle()

    //     // If both ships are alive, run loop until one ship is destroyed
    if (usMaestro.hull > 0 && alienOne.hull > 0){
        attackCycle()
        }
        else if (usMaestro.hull <=0){
            console.log ("You have been defeated. Hit refresh to restart")
        }
        else {console.log("Another enemy approaches")
            // code to generate another ship (not DRY; 
            // copy and paste until either usMaestro.hull or enemy.hull is ZERO)
        }
    // if (usMaestro.hull > 0 && alienOne.hull > 0){
    //     attackCycle()
    //     }
    //     else if (usMaestro.hull <=0){
    //         console.log ("You have been defeated. Hit refresh to restart")
    //     }
    //     else {console.log("Another enemy approaches")
    // if (usMaestro.hull > 0 && alienOne.hull > 0){
    //     attackCycle()
    //     }
    //     else if (usMaestro.hull <=0){
    //         console.log ("You have been defeated. Hit refresh to restart")
    //     }
    //     else {console.log("Another enemy approaches")
    //     }
    //         // code to grab another ship from array
    // }
    
// COMPLETED:   
    // -ONE CYCLE OF usMaestro and alienONE done. 
    // -Have function to loop an attack cycle until usMaestro.hull or enemy.hull is ZERO. 
    // -Created 6 ships manually

// INCOMPLETE: 
    // Generated array of random alien ships using Class. 
        // -But still need code to call new ALIENSHIP by index position (create loop)
    // Complete attackCycly() but need to recognize (while loop) that enemy still alive.

// NOT DONE AT ALL: 
    // Create code to recognize when all alien.hull or usMaestro.hull is 0 (gameover vs win). 
