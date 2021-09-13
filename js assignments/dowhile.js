//do-while loop
const maxLimit= 8;
let i = 1;
let n1 = 0;
let n2 = 1;
let n3;

console.log('Fibonacci Series:');
console.log(n1);
console.log(n2);

do {
  n3 = n1 + n2;
  console.log(n3);
  n1 = n2;
  n2 = n3;
  i++; 
}
while(i <= maxLimit);
