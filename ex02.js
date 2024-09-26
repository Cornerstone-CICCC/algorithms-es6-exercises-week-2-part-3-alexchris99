// Exercise 2: Rest Operator
// Instructions: Write a function named `subtract` that takes any number 
//of arguments and returns their difference. 
// Use the rest operator to handle the variable number of arguments. 
// Test your function with different numbers of arguments.

function subtract(...numbers) {
  let res = 0
  for(let i = 1; i < numbers.length; i++){
    if(res == 0){
      res += numbers[0] - numbers[i]
    }
    else{
      res -= numbers[i]
    }
  }
  return res
}

console.log(subtract(10, 2, 3)); // Example usage
