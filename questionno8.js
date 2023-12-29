// Write a loop that iterates over an array of numbers and logs whether each number is even or odd, using a ternary operator.
let arr = [1,2,3,4,5,6,7,8,9,10];
for(let val of arr){
     let evenOrOdd = val%2===0? "even" : "odd";
    console.log(val,"is", evenOrOdd);
}

