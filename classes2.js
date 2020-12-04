class Employee{
  constructor(name, exp, salary){
    this.name = name;
    this.exp = exp;
    this.salary = salary;
  }

  introduce() {
    return "Hello!";
  }

  getYear() {
    return 2020-this.exp;
  }

  static add(a, b) {
    return a+b;
  }
};

class Dev extends Employee{
  constructor(name, exp, salary, language){ //i gave an extra param "language"
    super(name, exp, salary); //give the formal params
    this.language = language;
  };
  analyseLanguage() {
    if(this.language=="Scala" || this.language == "C++"){
      return `${this.name}'s language is not good`;
    }else{
      return `${this.name}'s language is good`;
    }
  }
  static multiply(num, num2){
    return num*num2;
  }
};

let ishan = new Dev("Ishan", 6, 12000, "Python");
console.log(ishan);
console.log(Dev.multiply(4,6));
