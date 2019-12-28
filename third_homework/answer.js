// A light switch that can be either on or off: 
//     -Datatype: Boolean
//     -Data structure: let lightON = true
// A user's email address: 
//     -Datatype: Object
//     -Data structure: let emailList = {person: "John", email: "doe@gmail.com" }
// A spaceship with a hull, laser blasters, tractor beam and warp drive: 
//     -Datatype: Array
//     -Data structure: let spaceshipParts = ["hull", "laser blasters", "tractor beam", "warp drive"] 
// A list of student names from our class: 
//     -Datatype: Array
//     -Data structure: let classList = ["Peter", "Gertrude", "Mary" , "John"]
// A list of student names from our class, each with a location: 
//     -Datatype: Array of Objects
//     -Data structure: classmateLocation = [
//         {Name: "John", 
//         Location: "1st floor"}, 
//         {Name: "Mark", 
//         Location: "2nd floor"}
//     ]
// A list of student names from our class, each with a location and each with a list of favorite TV shows: 
//     -Datatype: Array of objects
//     -Data structure: 
//         Data structure: classmateLocation = [
//         {Name: "John", 
//         Location: "1st floor", 
//         FavoriteTv: "Friends"}, 
//         {Name: "Mark", 
//         Location: "2nd floor", 
//         FavoriteTv: "Seinfeld"}
//     ]

    // TAKE IT EASY
// let rainbow = ["blue"]
// console.log (rainbow[0])
// let kevin = {favoriteFood: "chicken", hobby: "tennis", location: "boston", favoriteDatatype: "strings"}
// console.log (kevin.hobby)

// CRAZY OBJECTS
// const crazyObject = {
//     taco: [{meat: 'steak',
//            cheese: ['panela', 'queso', 'chihuahua']},
//            {meat: 'chicken',
//             salsa: ["pico", "hot", "hotter", "really hot", "really really hot", "omg my mouth is burning"]},
//           ],
//     larry: {
//       nicknames: ["LD", "Chicken Teriyaki Boyyyyyy"],
//       quotes: ["Pretty pretty prettayyyyy good", "Is that a parkinson's thing?", "women love a self confident bald man", "I'm a walking talking enigma"],
//       characters: [{
//         name: "Jeff",
//         occupation: "manager"
//       },
//       {
//         name: "funkhauser",
//         occupation: "tv dude"
//       },
//       {
//         name: "susie",
//         occupation: "jeffs wife",
//         favourtieHobby: "Swearing at Larry and Jeff"
//       },
//       ]
//     }
//   }

//   console.log (crazyObject.taco[1].salsa[5])
//   console.log (crazyObject.larry.quotes[0])
//   console.log (crazyObject.larry.characters[2].favourtieHobby)
//   console.log (crazyObject.larry.nicknames[1])
//   console.log (crazyObject.larry.characters[1])
//   crazyObject.larry.quotes.push ("I'm tryin to elevate small talk to medium talk")
//   console.log (crazyObject.larry.quotes)


// OBJECT-CEPTION
// const inception = {
//     reality: {
//         dreamLayer1: {
//             dreamLayer2: {
//                 dreamLayer3: {
//                     dreamLayer4: {
//                         dreamLayer5: {
//                             dreamLayer6: {
//                                 limbo: "Joseph Gordon Levitt"
//                            }
//                         }
//                     }
//                 }
//             }
//         }
//     }
//  }
 
//  inception.reality.dreamLayer1.dreamLayer2.dreamLayer3.dreamLayer4.dreamLayer5.dreamLayer6.limbo = null
//  console.log (inception)