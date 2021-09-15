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

function sortEmployees(employeeDetails, attribute) {
  let type = typeof attribute;
  
  switch (type) {
      case 'string':
          return sortToString(employeeDetails, attribute);
      case 'number':
          return sortToNumber(employeeDetails, attribute);
      case 'boolean':
          return sortToBoolean(employeeDetails, attribute);
      default:
          console.log("Others!");
  }
}

function sortToString(employeeDetails, attribute) {
  return employeeDetails.sort(function (a, b) {
    let nameA = a.name.toUpperCase();
    let nameB = b.name.toUpperCase();
      if (nameA < nameB) {
          return -1;
      }
      if (nameA > nameB) {
          return 1;
      }
      return 0;
  });
}

function sortToNumber(employeeDetails, attribute) {
  return employeeDetails.sort(function (a, b) {
      return a.attribute - b.attribute;
  });
}

function sortToBoolean(employeeDetails, attribute) {
  return employeeDetails.sort(function (a, b) {
       return (a.attribute === b.attribute)? 0 : a.attribute? 1 : -1;

  });
}

/*sortEmployees(employeeDetails, "fullName");
sortEmployees(employeeDetails, "age");
sortEmployees(employeeDetails,"areYouMarried");*/
console.log(function sortEmployees(){});
//console.log(employeeDetails);

