// Easy Does it
// let quotes = [];

// Random
// const randomThings = [1, 10, "Hello", true]
// 1. console.log (randomThings[0])
// 2. randomThings [2] = "World"
// 3. console.log (randomThings)

// We've Got Class
// const ourClass = ["Outrun", "Zoom", "Github", "Slack"]
// 1. console.log (ourClass[2])
// 2. ourClass [2] = "Octocat"
// 3. console.log (ourClass)

// Mix it Up
// const myArray = [5 ,10 ,500, 20]
// 5. myArray.push ("Egon")
// 6. myArray.pop ()
// 7. myArray.unshift ("Bob Marley")
// 8. myArray.pop ("Bob Marley")
// 9. myArray.reverse ()

// Biggie Smalls
// const myArray = [5 ,10 ,500, 20]
// if (i = 2, myArray[i] < 100){
//     console.log ("little number");
// } else {
//     console.log ("big number")}

// Monkey in the Middle
// const myArray = [5 ,10 ,500, 20]
// if (i = 1, myArray[i] < 5){
//     console.log ("little number");
// } else if (i = 1, myArray[i] > 10){
//     console.log ("big number")
// } else {
//     console.log ("monkey")
// }

// What's in your closet?
const kristynsCloset = [
    "left shoe",
    "cowboy boots",
    "right sock",
    "GA hoodie",
    "green pants",
    "yellow knit hat",
    "marshmallow peeps"
  ];
  
  // Thom's closet is more complicated. Check out this nested data structure!!
  const thomsCloset = [
    [
      // These are Thom's shirts
      "grey button-up",
      "dark grey button-up",
      "light blue button-up",
      "blue button-up",
    ],[
      // These are Thom's pants
      "grey jeans",
      "jeans",
      "PJs"
    ],[
      // Thom's accessories
      "wool mittens",
      "wool scarf",
      "raybans"
    ]
  ];
// 1. What's Kristyn wearing today? Using bracket notation to access items in kristynsCloset, log the sentence "Kristyn is rocking that " + the third item in Kristyn's closet + " today!" to the 
console.log ("Kristyn is rocking that " + kristynsCloset [2] + " today!")
// 2. Kristyn can't find her left shoe. Remove this item from her closet and save it to a variable named kristynShoe.
let kristynShoe = []
kristynShoe = kristynsCloset.push [0]
// 3. Kristyn just bought some sweet shades! Add "raybans" to her closet after "yellow knit hat".
kristynsCloset.pop ()
kristynsCloset.push ("raybans")
kristynsCloset.push ("marshmellow peeps")

// 4. Kristyn spilled coffee on her hat... modify this item to read "stained knit hat" instead of yellow.
kristynsCloset [5] = "Stained knit hat"
// 5, Put together an outfit for Thom! Using bracket notation, access the first element in Thom's shirts array.
thomsCloset [0][1][1]
// 6. In the same way, access one item from Thom's pants array.
thomsCloset [0][1][1]
// 7. Access one item from Thom's accessories array.
thomsCloset [0][1][1]
// 8. Log a sentence about what Thom's wearing. Example: "Thom is looking fierce in a grey button-up, jeans and wool scarf!"
console.log ("Thom is looking fierce in a " + thomsCloset [0][1][1]!)
// 9. Get more specific about what kind of PJs Thom's wearing this winter. Modify the name of his PJ pants to Footie Pajamas.
thomsCloset [][2][] = []["Footie Pajamas"][]