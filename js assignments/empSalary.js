const empData = require('./empDetails.json');
const salaryInLacs = require('./salary');
const convertedArray = salaryInLacs(empData.employeeDetails);

console.log(convertedArray);