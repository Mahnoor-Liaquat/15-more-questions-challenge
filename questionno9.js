// Describe the differences between the for loop, while loop, and do...while loop in JavaScript. When might you use each?

// for loops are often used when the number of iterations is known, while and do...while loops are used when the condition for iteration is dynamic or not known in advance.

// using for loop forward counting
for(let i = 1; i<=10; i++){
    console.log(i);
}

// using while loop backward counting
let w = 10;
while(w>=1){
    console.log(w);
    w--;
}

// using do while loop sum numbers
let d = 1;
let sum = 0;
do{
    sum = sum + d;
    d++;
}while(d<=5)
console.log(sum);

