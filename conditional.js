//1. Take 2 numbers and print the smallest one amongst them.
const num1 = 5;
const num2 = 10;

if(num1 < num2) {
    console.log(`Smallest number is = ${num1}`);
}

else{
    console.log(`Smallest number is = ${num2}`);
}


//2. Take 3 numbers and print the biggest one amongst them
const numb1 = 10;
const numb2 = 15;
const numb3 = 25;

if(numb1 > numb2 && numb1 > numb3){
    console.log(`The biggest number is = ${numb1}`);
}
else if(numb2 > numb1 && numb2 > numb3){
    console.log(`The biggest number is = ${numb2}`);
}
else {
    console.log(`The biggest number is = ${numb3}`);
}


/*3. Use switch case to return a grade for the score, either ""A"", ""B"", ""C"", ""D"", or ""F"". (Take convension for numbers and grades by yourself)
Anything below 50 is F*/

let score = 80;
let division;
 
 
if (score > 90 && score <= 100){
    division = 1;
}
else if(score > 80 && score <= 90){
    division = 2;
}
else if(score > 70 && score <= 80){
    division = 3;
}
else if(score > 60 && score <= 70){
    division = 4;
}
else if(score >= 50 && score <= 60){
    division = 5;
}
else if(score > 0 && score < 50) {
    division = 6;
}

switch (division){
    case 1:
        console.log("You have secured division A")
        break;
    case 2:
        console.log("You have secured division B")
        Break;
    case 3:
        console.log("You have secured division C")
        break;
    case 4:
        console.log("You have secured division D")
        break;
    case 5:
        console.log("You have secured division E")
        break;
    case 6:
        console.log("You have secured division F")
        break;
    default:
        console.log("You haven't cleared the exam!");
        break;    
}
