// Take an array of objects of employees created above and print those employees whose age is less than 50.
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

let i = 0;
while(i < employeeDetails.length){
    if (employeeDetails[i].age < 50) {
        console.log(employeeDetails[i])
       }
    i++;
}

