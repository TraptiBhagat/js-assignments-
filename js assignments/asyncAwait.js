const employeeDetails = [
  {
    fullName: "Trapti Bhagat",
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

function getRandomNumbers(minTime,maxTime){
  minTime = Math.ceil(minTime);
  maxTime = Math.floor(maxTime);
  return Math.floor(Math.random() * (maxTime - minTime + 1)) + minTime;
}

const printEmployeeDetails = () => {
  return new Promise((resolve, reject) => {
      setTimeout(() => {
          console.log(employeeDetails)
      }, getRandomNumbers(1000, 2000))
      resolve(employeeDetails)
  })
}

const sortEmployeeNames = (employees) => {
  return new Promise((resolve, reject) => {
    employees.sort(function (a, b) {
      a1 = a['fullName'];
      b1 = b['fullName'];
      if (a1 < b1) {
        return -1;
      }
      if (a1 > b1) {
        return 1;
      }
      if (a1 == b1) {
        return 0;
      }
    }) 
    resolve()
  })
}

async function printSortedEmployees() {
  const resultantEmployeeArray = await printEmployeeDetails();
  await sortEmployeeNames(resultantEmployeeArray);
}

printSortedEmployees();