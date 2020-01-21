const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0]

const panagrams = [ 'The','job', 'requires', 'extra', 'pluck', 'and', 'zeal', 'from', 'every', 'young', 'wage', 'earner',  'Quick', 'zephyrs', 'blow,', 'vexing', 'daft', 'Jim', 'Two', 'driven', 'jocks', 'help', 'fax', 'my', 'big',
  'quiz', 'Five', 'quacking', 'zephyrs', 'jolt', 'my', 'wax', 'bed', 'The', 'five', 'boxing', 'wizards', 'jump', 'quickly', 'Pack',
  'my', 'box', 'with', 'five', 'dozen', 'liquor', 'jugs', 'We', 'promptly', 'judged', 'antique', 'ivory', 'buckles', 'for', 'the',
  'next', 'prize', 'Jaded', 'zombies', 'acted', 'quaintly', 'but', 'kept','driving','their','oxen','forward' ]

// // Every
// console.log(nums.every(num=>num>=0))
// console.log(panagrams.every (pana=>panagrams.length<8))

// // Filter
// console.log(nums.filter(num=> num < 100))
// console.log(panagrams.filter(word => word.length%2===0))

// // Find
// console.log(nums.find(num=>num%5 === 0))
// console.log(panagrams.find(word=>word.length>2))

// // Find Index
// console.log(nums.findIndex(num=>num%3===0))
// console.log(panagrams.findIndex(word=>word.length<2))

// // For Each
// console.log(nums.forEach(num=>console.log(num*3)))
// console.log(panagrams.forEach(word=>console.log(word + "!")))

// // Map
// let newNum = nums.map(num=>num*100)
// let newWord = panagrams.map(word=>console.log(word.toUpperCase))
// console.log (newNum)
// console.log (newWord)

// Some
console.log(nums.some (num => num%7===0))
console.log(panagrams.some(word => word.match("a")))