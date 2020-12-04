let btn = document.getElementById("btn");
btn.addEventListener('click', getMeaning);

function getMeaning(e) {
  e.preventDefault();
  let word = document.getElementById("word").value;
  let div = document.getElementById("id");
  console.log(word);
  // Make an xhr instance
  let xhr = new XMLHttpRequest();
  xhr.open(
    "GET",
    `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`,
    true
  );
  xhr.onprogress = () => {
    console.log("working...");
  }
  xhr.onload = () => {
    if (this.status == 200) {
      id.innerHTML = JSON.parse(this.responseText);
      console.log(this.responseText);
    }else{
      console.log("Error");
    }
  };
  xhr.send();
}
