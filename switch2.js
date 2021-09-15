
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
