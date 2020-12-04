// We will look into objects in javascript
//using object literal
//
// let myObj = {
//   name: "Object",
//   type: "MyAwesomeObject",
//   number: 10,
//   character: "N",
// };

// Using constructor
function createMyObject(name, type, number, character){
  this.name = name;
  this.type = type;
  this.number = number;
  this.character = character;
  this.introduce = function() {
    return `I am an ${this.name}, of ${this.type} type and my favorite number is ${this.number}`;
  }
};

let obj = new createMyObject("Object", "Object", 13, "C");

console.log(obj);
