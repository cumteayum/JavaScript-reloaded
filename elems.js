let element = document.createElement('li');

let elem2 = document.createElement('li');

let parent = document.getElementById("this");

element.className = "red";
element.innerText = "5";
parent.appendChild(element)

elem2.className = "blue";
elem2.innerText = "6";
// parent.appendChild(elem2)

element.replaceWith(elem2);

console.log(element);