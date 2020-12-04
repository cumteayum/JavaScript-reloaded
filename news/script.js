// 324a60d4023c4193af75bb99613b2c47
let accordion = document.getElementById('accordion');
let apiKey = '324a60d4023c4193af75bb99613b2c47';
let source = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`

const xhr = new XMLHttpRequest();
xhr.open('GET', source, true);
// xhr.getResponseHeader('Content-type', 'application/json');
// xhr.onprogress = () => console.log("running...");
xhr.onload = () => {
  if(this.status===200){
    let json = JSON.parse(this.responseText);
    console.log(json);
  }
};
xhr.send();
