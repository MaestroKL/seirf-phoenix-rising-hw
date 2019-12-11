// Section 1:
// What does the acronym DRY stand for? 
    // -Don't Repeat yourself
// Why should we pay attention to it? 
    // -To minimize repititive coding; to be efficient and organized. 
// What programming tools have we learned to write DRY code? 
    // -HTML and CSS. Starting on JS.
// What is the difference between const and let and var? 
    // -Const is short for constant. Once defined, cannot be redefined.
    // -Let and Var are used interchangeably. Let allows reassigning throughout code.

// Section 2: 
const a = 4;
const b = 53;
const c = 57;
const d = 16;
const e = 'Kelvin';
const f = false;
// a < b
// c > d
// 'Name' === "Name"
// a < b < c
// a === a != d
// e != "Kevin"
// 48 == "48"
// f ! e

let g = 0
console.log ("g")
g = b + c
console.log ("g")
// 10 = g
// Did you use const, let or var? let
// Why did you choose the one you chose? the value of g can be re-assigned
// What happens if you don't use const , let or var? 
    // -Using var would result in the same. using const would result in error
// Do you get an error? Yes
// If so what does it say? "assignment is constant variable"
// what happens if you write 10 = g? "Invalid left-hand side assignment"

// Bonus Challenge (optional):DID NOT GET, UNFORTUNATELY. Did not get any evaluation reply. 
// -a < (b || f) < !f && e > c

// Section 3: 
// Is the code below an infinite loop? Why or why not?
    // Infinite loop I: -It will run infinite loop because condition is true by default and there is no postfix to end loop.
    // Infinite loop II: -The runProgram = false will exit the loop. 

let letters = "A"; 
let i = 0;
// assigning value; no terminal output so far. 

while (i < 20) {
	letters += "A";
	i++;
}
// If "i" is less than 20, then concatenate/add another "A" string to initial "A";
//  increase i by value of 1
// AFTER RUNNING CODE: I thought it would display line 1"A",line 2"AA", line 3"AAA", etc until 20 "A's". 
// I'm not sure why it only displayed one line of "AAAAAAAAAAAAAAAAAAAAAAAAA"

console.log(letters);
// displays "AA"


// // Section 4:
// Loop I: 
//  -The first part of the control panel is: Initial condition
//  -The second part of the control panel is: While condition
//  -The third part of the control panel is: repeating expression

// Loop II: 
for (i = 0; i <=999; i=i+1){
console.log (i)
}

// Bonus: 
// What is the difference between \ (backslash, above the enter/return key) and 
// / (forward slash or just slash, shares the key with the ?)? What is \ doing in the string?
//  -backslash indicates quotes is part of text grammar rather than coding quotes.

// Loop in Reverse:
for (i = 999; i >= 0; i=i-1){
    console.log (i)
    }

// More Counting:
for (i = 1; i <=10; i=i+1){
    console.log ("The value of i is: " + i + " of 10")
    }
    // Bonus: did not attempt; short on time.

    // Iteration:
    const StarWars = ["Han", "C3PO", "R2D2", "Luke", "Leia", "Anakin"];
    for (i = 0; i < StarWars.length; i++){
        console.log (StarWars[i]+ ' ' + i)
    }
    // Bonus: Was attempting bonus; did not work out
    for (i = 0; ((i+2)%2!=0) && (i < StarWars.length); i++){
        console.log (StarWars[i]+ ' ' + i)
    }

    