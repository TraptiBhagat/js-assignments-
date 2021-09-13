/*1. Find the sum of the first 10 natural numbers.

 //for loop 
const n = 10;
let sum = 0;
for (let i = 1; i <= n; i++) {
    sum += i;
}

console.log('The sum of first 10 natural numbers:', sum);

//while loop 
const n = 10;
let sum = 0;
let i = 1;
while(i <= n) {
    sum += i;
    i++;
}

console.log('The sum of first 10 natural numbers:', sum);

//do-while loop
const n = 10;
let sum = 0;
let i   = 1;
do {
    sum += i;
     i = i + 1;    
    }
 
while(i <= n);
console.log("the sum of first 10 natural numbers : ", sum);

//for loop
const maxLimit = 10;
let n1 = 0;
let n2 = 1;
let nextTerm;
for (let i = 1; i <= maxLimit; i++) {
    console.log(n1);
    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
}
console.log('Fibonacci Series:');

//while loop
const maxLimit = 8;
let n1 = 0;
let n2 = 1;
let nextTerm;
let i = 1;

console.log("Fibonacci Series:");
console.log(n1);
console.log(n2);

while (i <= maxLimit) {
    nextTerm = n1 + n2;
    console.log(nextTerm);
    n1 = n2;
    n2 = nextTerm;
    i++;
}

//do-while loop
const maxLimit = 8;
let i = 1;
let n1 = 0; 
let n2 = 1;
let nextTerm;

console.log("Fibonacci Series:")
console.log(n1);
console.log(n2);

do {
  nextTerm = n1 + n2;
  console.log(nextTerm);
  n1 = n2;
  n2 = nextTerm;
  i++; 
}
while(i <= nextTerm);*/

const employeeDetails = {
    fullName      : 'Trapti Bhagat',
    email         : 'bhagattrapti@gmail.com',
    age           :  21,
    address       : '155, Nyay Nagar, Indore',
    contact       :  7898057807,
    gender        : 'female',
    areYouMarried : 'False'
};

 for( const property in employeeDetails) {
  console.log(`${property}: ${employeeDetails[property]}`);
 
}

 
