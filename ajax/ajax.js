/*
document.getElementById('buttonFetch').addEventListener('click', btnClickHandler);

function btnClickHandler() {
  console.log("Clicked");
  // Create a xhr object
  // First param = method
  // Second param = location
  // Third param = async boolean
  let xhr = new XMLHttpRequest();
  xhr.open('GET', 'http://numbersapi.com/4', true);
  //What to do on progress
  xhr.onprogress = function() {
    console.log("On progress...");
  }
  // What to do when it is loading
  xhr.onload = function() {
    //check status
    if(this.status !== 200){
      console.log("Went wrong..");
    }else {
      console.log("Went good :)");
    }
    console.log(this.responseText);
  }
  //send the request
  xhr.send();
}*/

// Create a number fetcher
let inp = document.getElementById('inp').value;
let btn = document.getElementById('buttonFetch');
let heading = document.getElementById('heading');

btn.addEventListener('click', fetchNumber);
function fetchNumber() {
  console.log("running");
  let xhr = new XMLHttpRequest();
  xhr.open('GET', `http://numbersapi.com/${inp}`, true);
  xhr.onload = function() {
    if(this.status == 200){
      heading.innerHTML = this.responseText;
    }else{
      console.log("Went wrong");
    }
  }
  xhr.send();
}
