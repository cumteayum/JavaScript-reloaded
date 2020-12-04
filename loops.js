let friends = ["Ishan", "Pratham", "Yatharth", "Mayank"];
// for (let i = 0; i < friends.length; i++) {
//     const element = friends[i];
//     console.log(element);
// }

// FOREACH
// friends.forEach(function func(element) {
//     console.log("Hello "+element);
// });

// // MATH OBJECT
// console.log(Math.pow(2,5));
// console.log(Math.round(10.22));
// console.log(Math.sqrt(2));
// console.log(Math.tanh(2));
// console.log(Math.sin(2));
// console.log(Math.cos(2));
// console.log(Math.floor(2.55));
// console.log(Math.ceil(2.55));
// console.log(Math.imul(2.22));
// console.log(Date());


// CREATE ELEMENTSSS
let elem = document.createElement("li");
// METHOD 1;
let text = document.createTextNode("I am a text node");
elem.appendChild(text);

//METHOD 2;
elem.className = "blue";
elem.setAttribute('title', 'mytitle');
// elem.innerHTML = "<b>I am a blue li</b>";

let ul = document.querySelector('ul.this');
ul.appendChild(elem)
console.log(elem);

let elem2 = document.createElement('h2');
elem2.id = "elem2";
elem2.className = "elem2";
let tnode = document.createTextNode("THIS IS A HEADING");
elem2.appendChild(tnode);
