let btn = document.getElementById('btn');
let container = document.getElementById('container');
let input = document.getElementById('inp');
btn.addEventListener('click', ()=>getData(input.value))

function getData(name) {
  let url = `https://restcountries.eu/rest/v2/name/${name}`
  fetch(url).then(res => res.json()).then(data => {
    let newd = data;
    console.log(newd[0].demonym);
  });
}
// let countries = ["India", "Russia", "Australia", "Britain", "China"];
// countries.map((n)=>getData(n));
