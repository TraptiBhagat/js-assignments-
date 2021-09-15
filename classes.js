const empArray = [];
class employee {
 
  getDetails(userID, fullName, email, age, address, phone, gender, areYouMarried, salary) {
        this.userID = userID;
        this.fullName = fullName;
        this.email = email;
        this.age = age;
        this.address = address;
        this.phone = phone;
        this.gender = gender;
        this.areYouMarried = areYouMarried;
        this.salary = salary;
 
        empArray.push(this);
    }

  
  sortByParameter(parameter) {
    if (typeof parameter == 'string') {
        return empArray.sort(function (a, b) {
            if (a[parameter] < b[parameter]) {
                return -1;
            }
            if (a[parameter] > b[parameter]) {
                return 1;
            }
            return 0;
        })
    } else if (typeof parameter == 'number') {
        return empArray.sort(function (a, b) {
            return a[parameter] - b[parameter];
        });
    } else if (typeof parameter == 'boolean') {
        return empArray.sort(function (a, b) {
            return !a[parameter] && b[parameter];
            
        });
    }
  }
}


module.exports = { employee, empArray };








