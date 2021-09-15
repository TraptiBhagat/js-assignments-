const data = require("./empDetails.json");
const searchStringValue = require("./searchFunc.js");
const filteredData = searchStringValue(data.employeeDetails)
console.log(filteredData);