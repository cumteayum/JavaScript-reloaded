// Using Prototypes
// Book constructor
function Book(name, author, category) {
  this.name = name;
  this.author = author;
  this.category = category;
}

// Display constructor
function Display() {

}

// Add methods
Display.prototype.add = function (book) {
  let html = `<tr>
                <th scope="row">3</th>
                <td>${book.name}</td>
                <td>${book.author}</td>
                <td>${book.category}</td>
              </tr>`;
  document.getElementById('tbody').innerHTML += html;
};


// Other stuff
let libForm = document.getElementById('form');
libForm.addEventListener('submit', submitForm);

function submitForm(e) {
  console.log("Submitted");
  let name = document.getElementById('name').value;
  let author = document.getElementById('author').value;
  let category = document.getElementById('category').value;

  let book = new Book(name, author, category);
  console.log(book);
  e.preventDefault();
  let display = new Display();
  display.add(book);
}
