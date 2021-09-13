const employeeDetails = [
    {   fullName: "Trapti Bhagat",
        email: "bhagattrapti@gmail.com",
        age: 21,
        address: "155, Nyay Nagar,Indore",
        phone: 9896545603,
        gender: "Female",
        areYouMarried: false
    },
    {
        fullName: "Monika Thakur",
        email: "itsmemonika07@gmail.com",
        age: 21,
        address: "309A, Mehidpur",
        phone: 1234567890,
        gender: "Female",
        areYouMarried: false
    },
    {
        fullName: "Saransh Sharma",
        email: "saranshsharma@gmail.com",
        age: 25,
        address: "Clerk Colony, Indore",
        phone: 1234567890,
        gender: "Male",
        areYouMarried: false
    },
    {
        fullName: "Swapnil Jain",
        email: "jainswapnil@gmail.com",
        age: 51,
        address: "301A, Sampriti Apartment, Indore",
        phone: 1234567890,
        gender: "Male",
        areYouMarried: true
    },
    {
        fullName: "Ritika Joshi",
        email: "joshiritika@gmail.com",
        age: 55,
        address: "401 B, Mall Road, Manali",
        phone: 1234567890,
        gender: "Female",
        areYouMarried: true
    }
]

const counterLength = employeeDetails.length;

for(let i = 0; i < counterLength; i++){
    try{
        console.log('evaluation of the user-defined error/exception')
        const expectedAge = employeeDetails[i].age/null;
        /*if(expectedAge === Infinity){

        }
        throw "There isn't any error; but the expectedAge is found to be infinity";*/
       
        console.log(expectedAge);
    }

    catch(error){
        console.log('The correction for the employee age is displayed below');
        const correctedAge = employeeDetails[i].age/2;
        console.log(`The corrected age of the employee is ${correctedAge}`);
    }
}