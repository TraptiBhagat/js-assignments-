let score = 95;

switch(score) {
    case (score > 90 & score <= 100 && score): 
        console.log('You have secured grade A');
        break;
    case (score > 80 & score <= 90  && score):
        console.log("You have secured grade B");
        break;
    case (score > 70 & score <= 80  && score) :
        console.log("You have secured grade C");
        break; 
    case (score > 60 & score <= 70  && score) :
        console.log("You have secured grade D");
        break;  
    case (score > 50 & score <= 60  && score) :
        console.log("You have scored grade E");
        break; 
    case (score <= 50 && score) :
        console.log("You have secured grade F")
        break;
    default:
        console.log("You haven't cleared the exam!");
        break;
}