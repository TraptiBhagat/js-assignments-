
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
        age: 19,
        address: "401 B, Mall Road, Manali",
        phone: 1234567890,
        gender: "Female",
        areYouMarried: true
    }
  ]
  
  /*employeeDetails.sort(function (a, b) {
    return a.age - b.age;
  });

  employeeDetails.sort(function(a, b) {
    const nameA = a.fullName.toUpperCase(); 
    const nameB = b.fullName.toUpperCase(); 
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
      
      return 0;
  });

  employeeDetails.sort(function(a,b){
    return (a.areYouMarried === b.areYouMarried)? 0 : a.areYouMarried? 1 : -1;
  });


console.log(employeeDetails);*/

function sortEmployee(givenArray, attribute) {
  const type = typeof attribute ;

  // console.log(type);

  switch (type) {
      case 'string':
          return sortString(givenArray, attribute);
      case 'number':
          return sortNumber(givenArray, attribute);
      case 'boolean':
          return sortBoolean(givenArray, attribute);
      default:
          console.log("INVALID");
  }
}

function sortString(employeeDetails, attribute) {
  return employeeDetails.sort(function (a, b) {
      const nameA = a[attribute];
      const nameB = b[attribute];
      if (nameA < nameB) {
          return -1;
      }
      if (nameA > nameB) {
          return 1;
      }
      return 0;
  });
}

function sortNumber(employeeDetails, attribute) {
  return employeeDetails.sort(function (a, b) {
      return a[attribute] - b[attribute];
  });
}

function sortBoolean(employeeDetails, attribute) {
  return employeeDetails.sort(function (a, b) {
      return !a[attribute] && b[attribute];
 });
}

console.log(sortEmployee(employeeDetails, "areYouMarried"));
console.log(sortEmployee(employeeDetails, "fullName"));
console.log(sortEmployee(employeeDetails, "age"));
 





