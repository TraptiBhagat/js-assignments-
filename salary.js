
/*const salaryInLacs = function (empData) {
   empData.forEach(employeeDetails => {
    return {
       // ...employeeDetails,
        salary: (employeeDetails.salary / 100000).toFixed(2) + 'lacs'
   }
  })
}*/


const salaryInLacs = function (empData) {
    return empData.filter((empData) => { 
        return {
           //...employeeDetails,
            salary: (empData.salary>500000 ? empData.salary = (empData.salary / 100000).toFixed(2) + 'lacs' : empData)
        }
    });
} 

module.exports = salaryInLacs;
/*const salaryInLacs = function (empData) {
for (let employeeDetails of empData)
    for (let salary in employeeDetails)
        if (employeeDetails.salary > 500000) {
            employeeDetails.salary = (employeeDetails.salary / 100000).toFixed(2) + 'lacs';
        }
    } 

module.exports = salaryInLacs;*/

