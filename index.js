let empClass = require("./classes.js");

let data = new empClass.employee();

let emp1 = new empClass.employee();
emp1.getDetails(501, "Trapti Bhagat", "bhagattrapti@gmail.com", 21, "155,Nyay Nagar,Sukhlia", 1234567890, "female", false, 500000);
 
let emp2 = new empClass.employee();
emp2.getDetails(502, "Monika Thakur", "monikathakur@gmail.com", 20, "Mehidpur", 1234567890, "female", true, 520000);
 
let emp3 = new empClass.employee();
emp3.getDetails(503, "Saransh Sharma","saransh.sharma1118@gmail.com", 25, "Clerk colony", 1234567890, "male", false, 550000);

console.log(data.sortByParameter("age"));
console.log(data.sortByParameter("fullName"));
console.log(data.sortByParameter("gender"));
console.log(data.sortByParameter("salary"));