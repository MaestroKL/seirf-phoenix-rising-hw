// if (typeof jQuery=='undefined'){
//         console.log("'oops! I still have to link my jQuery properly");
// }else{
//     console.log("I did it! I linked jQuery and this js file!")
// }

$(()=>{

$container = $("#container")
console.log($container)
$h1 = $("<h1>")
$('body').append($h1)
console.log($h1)
$h1.text("Hogwarts")


$h2 = $("<h2>");
$h2.text("Maestrokl");
$("body").append($h2)

$h3 = $("<h3>");
$h3.text("Hufflepuff");
$("body").append($h3);

$h4 = $("<h4>");
$h4.text("cat");
$h4.addClass("cat");
$("body").append($h4);




})