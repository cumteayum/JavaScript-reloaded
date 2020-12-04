console.log("This is storagejs");

// LOCALSTORAGE
localStorage.setItem("name", "ishan");
localStorage.setItem("name2", "chotu");

localStorage.getItem('name');
// localStorage.clear()
localStorage.removeItem('name');

let array = ['adrak', 'aalu', 'pyaz', 'tamatar'];
localStorage.setItem('Sabzi', JSON.stringify(array));

let sabzis = JSON.parse(localStorage.getItem('Sabzi'));

//session storage
sessionStorage.setItem("session", "javascript");