// // 1. 
// let crayonBox = ["yellow", "green", "blue"]

// console.log (crayonBox)

// console.log (crayonBox[1])

// // 2. 
// let bottle = {
//     cap: ["metal", "plastic"],
//     shape: ["pear", "cylinder"],
// }
//  console.log(bottle.cap[1])
// // 3. 
// let receipt = [
//     {cuisine: "pizza", 
//     price:"ten",
//     meat: "true",
// }]
// console.log (receipt[0].price)

// // 4. 
// apartmentBuilding = [
//     {tenant: "ben",
//     }]
// console.log(apartmentBuilding[0].tenant)

// // Combine objects, arrays and functions more than one level deep
// // 1. create function knit

// const knit = () => {
//     return{
//         items: "scarf", 
//         size: "6ft"}
// }
// let definition = knit()
// console.log (definition.items)

// 2. create crayonSelector that returns an object that has an array
// let drawing = {
//     crayonBox: ["yellow", "green", "blue"], 
// }
// const powerButton =()=> {
//     return {
//         drawing
//     }
// }
// console.log(powerButton().crayonBox[0])
// 3. Create function powerButton that returns a function options; options should console.log. Call inner function
let powerButton = () => {
    return options =()=>{
        return
        console.log("Select a song")
    }
}
powerButton()