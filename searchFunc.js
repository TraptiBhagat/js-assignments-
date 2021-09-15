const searchStringValue = function (data) {
  return data.filter((data) => { 
      return {
        // ...employeeDetails,
          fullName: ( empData = data.fullName.includes("an") ? console.log(empData)  : -1)
      }  
  });
} 
 
module.exports = searchStringValue; 