function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; 
  }

class AlienShip {
    constructor(name, hull, firepower, accuracy){
        this.name = name
        this.hull = Math.floor(Math.random()*4)+3,
        this.firepower = Math.floor(Math.random()*3)+2,
        this.accuracy = (getRandomIntInclusive(6, 8))/10

    }
}
let alienArray = []
for (i=0; i <5; i++){
    let generateAlien = new AlienShip (i)
    alienArray.push (generateAlien)
    
}
console.log(alienArray)