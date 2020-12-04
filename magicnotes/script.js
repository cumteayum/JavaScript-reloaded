// if a user adds a note, add it to local storage
showNotes()
let addBtn = document.getElementById('btn');
addBtn.addEventListener('click', function () {
    let text = document.getElementById('text');
    let notes = localStorage.getItem('notes');

    if (notes == null) {
        notesArray = [];
    }
    else {
        notesArray = JSON.parse(notes);
    }
    notesArray.push(text.value);
    localStorage.setItem('notes', JSON.stringify(notesArray));
    text.value = "";
    console.log(notesArray);
    showNotes()
});

function showNotes() {
    let notes = localStorage.getItem('notes');
    if (notes == null) {
        notesArray = [];
    }
    else {
        notesArray = JSON.parse(notes);
    }
    let html = "";

    notesArray.forEach(function (ele, index) {
        html += `<div class="noteCard my-2 mx-2 card" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">Note ${index + 1}</h5>
            <p class="card-text">${ele}</p>
            <button id="${index}" onclick="deleteNote(this.id)" type="button" class="btn btn-primary">Delete</button>
            <button id="${index}" onclick="Important(this.id)" type="button" class="btn btn-primary">Mark as important</button>
        </div>
    </div>`
    
    let notesElem = document.getElementById('notes');
    
    if(notes.length != 0) {
        notesElem.innerHTML = html; 
    }

});
}

function deleteNote(index){
    let notes = localStorage.getItem('notes');
    if (notes == null) {
        notesArray = [];
    }
    else {
        notesArray = JSON.parse(notes);
    }
    notesArray.splice(index, 1);
    localStorage.setItem('notes', JSON.stringify(notesArray));
    showNotes();
}

let search = document.getElementById('search');
search.addEventListener('input', function(){
    let val = search.value;
    let noteCards = document.getElementsByClassName('noteCard');
    Array.from(noteCards).forEach(function(ele) {
        let cardText = ele.getElementsByTagName('p')[0].innerText;

        if(cardText.toLowerCase().includes(val.toLowerCase())){
            ele.style.display = "block";
        }else{
            ele.style.display = "none";
        }

    });        
});

function Important(id){
    let element = document.getElementById(id).parentElement;
    element.style.backgroundColor = "#26ff9a";
    element.style.color = "white";
    element.style.borderRadius = "2.6%";
    console.log(element);
}