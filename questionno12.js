// Explain the use of the break and continue statements within loops. Provide scenarios where each might be used.
// Find the index of a specific value in an array
const numbers = [12, 24, 33, 41, 50];
const targetValue = 33;
let targetIndex = -1;
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] === targetValue) {
    targetIndex = i;
    break;
  }
}
console.log(targetIndex); 

// Print only odd numbers in an array
const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i < num.length; i++) {
  if (num[i] % 2 === 0) {
    continue; 
  }
  console.log(num[i]);
}

/*Use Cases:
break Use Cases:
Searching: Use break when searching for a specific value in an array or when a certain condition is met.
Infinite Loops: Use break to exit an infinite loop based on a condition.
continue Use Cases:
Filtering: Use continue to skip specific items or conditions during iteration, such as skipping even numbers.
Error Handling: Use continue to skip iterations where certain error conditions are met.*/


