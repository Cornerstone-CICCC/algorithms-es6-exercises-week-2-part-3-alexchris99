// Exercise 3: Set
// Instructions: Create a Set named `uniqueNumbers` 
//and add some numbers to it using .add(), including some duplicates. 
// Verify that the Set only keeps unique values by 
//logging it to the console.

const uniqueNumbers = new Set();

// Your code here

for(let i = 0; i < 8; i++){
    uniqueNumbers.add(Math.floor(Math.random()*4))
}

console.log(uniqueNumbers);
