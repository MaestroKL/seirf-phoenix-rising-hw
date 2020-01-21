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

// MODEL A VENDING MACHINE 
// vendingMachine = {
//     snacks: [
//         {
//             name: "kitkat",
//             price: 5,
//         }, 
//         {
//             name: "snickers",
//             price: 4,
//         }, 
//         {
//             name: "twix",
//             price: 3,
//         }, 
//     ]
//     vendReturn = (input) => {
//         console.log("vending", vendingMachine.snacks[input])
//     }
// }
// vendMachine.vendReturn(1)

// CALLBACKS
// ADDITION
// let calcAdd = function (a,b){
//     return a+b
// }
// let calcSub = function (a,b){
//     return a-b
// }
// let calcMul = function (a,b){
//     return a*b
// }
// let calcDiv = function (a,b){
//     return a/b
// }

// // let calc = function(num1, num2, callback){
// //         return callback(4, 5, callback)
// // }
// // console.log(calc (1, 2, calcSub))

// let calculate = function(num4, num5, operates){
//     return operates(num4, num5)
// }
// console.log(calculate (4, 5, calcAdd))
// console.log(calculate (4, 5, calcSub))
// console.log(calculate (4, 5, calcDiv))
// console.log(calculate (4, 5, calcMul))

// FUNCTION DEFINITION PLACEMENT (code clean up.)

// const bar = () => {
//     console.log('bar here');
// }
// bar();
// ;

// const foo = () => {
//     console.log('foo here');
// }
// foo()


// Missing "="