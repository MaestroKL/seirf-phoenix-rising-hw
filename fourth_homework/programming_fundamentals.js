// COMMON PROGRAMMING PRINCIPLES 

// DRY - Don't repeat yourself: create code to avoid repetitive code. 
// KISS - Kit it simple, stupid: create code that is easily understandable to you (and the next coder!)
// Avoid creating a YAGNI - "You aren't going to need it"; don't create code that is not part of your pseudocode (assuming
        //the pseudocode is framed correctly). YAGNI creates confusion. 
// Do the simplest thing that could possibly work - Create code that achieves the immediate task. Add additional code as further tasks call for. 
// Don't make me think - The next programmer should understand a code based on your pseudocode + how the code is written
// Write code for the maintainer - The code should match the pseudo code, so maintainer can understand it easily. 
// Single responsibility principle - Code functionality is well-defined to do a certain task
// Avoid premature optimization - Create drafts for code. If it works, you can improve upon it afterwards. Code needs to work first. 
        //This one is giving me the most probme because I want to write code to perfection firs time, just once. I am learning that code
        //is not written to last forever but can be rewritten to improve functionality. 
// Separation of concerns - code function should not overlap each other to avoid confusion. 


// COMMENTING CODE

const f = l => {
    // function "f" with parameter "l"
    let es = 0, p = 0, c = 1, n = 0
    // variables "es, p, c, n" are defined
    while (c <= l) {
        // for condition that c is less than or equal to l
      n = c + p
    //   let n be sum of c and p (which is 1)
      [c, p] = [n, c]
        // let c = n, which is 1, and p = c, which is 1. 
      es += (c % 2 === 0) ? c : 0
        // add 1 to es ifc%2 is equivalen tto 0. (it is not)
    }
    return es
    // es is as defined.
  }
  
  console.log(f(55))
//   return es = 0


const f2 = (limit) => {
    let evenSum = 0;
    let previous = 0;
    let current = 1;
    while (current <= limit) {
      let next = current + previous;
      previous = current;
      current = next;
      if (current % 2 === 0) {
        evenSum += current;
      }
    }
    return evenSum;
  }
  
  
  console.log(f2(55))

//   In keeping with one of our programming principals (write code for the maintainer): What would have been a more semantic name for this function (hint: this is a problem we had for either lab or hw and is considered a classic ) - are there any other variable names or things that would make this code easier to read and understand?
//   -summationEven rather than f2
// If you started a new job and your project was to expand the functionality of this function by allowing a second argument and then based on that second argument, returning the sum of even or odd numbers, which code would you rather start working with f or f2?
//   -f2
// Finally, the 'shorter' code style doesn't use semi-colons, except for the fourth line. Remove this semi-colon! Run the code, is this semi-colon necessary?
//   -Yes it is necessary;

// SECTION II (see combining datatypes js)