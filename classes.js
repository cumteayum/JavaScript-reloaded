// We will make a class and inherit it :)

class Employee{
  constructor(name, salary){
    this.name = name;
    this.salary = salary;
    this.introduce = function () {
      return `I am ${this.name} and my salary is ${this.salary}rs`;
    }
  }
};
// Inherit it
class Developer extends Employee{
  constructor(lang, salary, name) {
    super(name, salary);
    this.lang = lang;
  }
}

let dev = new Developer("Python", 20, "Ishan")
console.log(dev);
