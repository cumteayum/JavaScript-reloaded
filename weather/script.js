// api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
// faade3467ca5fb37b5ccaed84212b24a
let btn = document.getElementById('btn');
let input = document.getElementById('inp');
let div = document.getElementsByClassName('container');

btn.addEventListener('click', ()=>{
  getWeatherData(input.value).then((data) => {
    // let temp = data.main.temp;
    div.innerHTML = data;
  })
})

async function getWeatherData(cityName) {
  let api = 'e44148a57cf9412213451870242474f4';
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${api}`;
  let response = await fetch(url);
  let data = await response.json();
  return data;
}
