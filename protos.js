/*
const proto = {
  func: function() {
    return "I got executed";
  }
}

let ishan = Object.create(proto);
ishan.name = "Ishan";
ishan.age = 20;
// console.log(ishan);


function Employee(name, age, salary){
  this.name = name;
  this.age = age;
  this.salary = salary;
}

Employee.prototype.slogan = function() {
  return "I am the best Employee ever born !";
}

let emp = new Employee("Emp", 50, 34000);
console.log(emp);

Programmer.prototype = Object.create(Employee.prototype);
function Programmer(name,age, language){
  Employee.call(this,name, age);
  this.name = name;
  this.age = age;
  this.language = language;
}

let pg = new Programmer("ishan", 10, "js");
console.log(pg);
*/

// This approach using ES6 classes
class Employee{
  constructor(name, age, salary){
    this.name = name;
    this.salary = salary;
    this.age = age;
  }
  slogan() {
    return "I AM THE BEST EMPLOYEE EVER BORN"
  }
};

class Programmer extends Employee{
  constructor(name, age, salary, exp, language){
    super(name, age, salary);
    this.exp = exp;
    this.lang = language;
  }

  getJoinYear() {
    return new Date().getFullYear() - this.exp;
  }

  isGoodLanguage() {
    if(this.lang != "Java" || this.lang != "CPP"){
      return true;
    }else{
      return false;
    }
  }

};

let ishan = new Programmer("Ishan", 15, 59000, 7, "JavaScript");
console.log(ishan);
