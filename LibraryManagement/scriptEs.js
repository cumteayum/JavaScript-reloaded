class Book{
  constructor(name, author, category){
    this.name = name;
    this.author = author;
    this.category = category;
  }
  addToUI(book) {
    let html = `<tr>
                  <th scope="row">#</th>
                  <td>${book.name}</td>
                  <td>${book.author}</td>
                  <td>${book.category}</td>
                </tr>`;
    document.getElementById('tbody').innerHTML += html;
  }

  validate(book) {
    if(book.name.length<1 || book.name.length<1 || book.name.length<1){
      return false;
    }else{
      return true;
    }
  }

  error(m) {
    let message = document.getElementById('message');
    message.innerHTML = `<div class="alert alert-danger" role="alert">
                    ${m}
                  </div>`;
   setTimeout(function() {
     message.innerHTML = '';
   }, 3000);
  }

  success(m) {
    let message = document.getElementById('message');
    message.innerHTML = `<div class="alert alert-info" role="alert">
                    ${m}
                  </div>`;
   setTimeout(function() {
     message.innerHTML = '';
   }, 3000);
  }

};

let form = document.getElementById('form');
form.addEventListener('submit', libraryAddBook);

function libraryAddBook(e) {
  e.preventDefault();
  let name = document.getElementById('name').value;
  let author = document.getElementById('author').value;
  let category = document.getElementById('category').value;

  let book = new Book(name, author, category);
  if(book.validate(book)){
    book.addToUI(book);
    book.success("Book added !");
  } else {
    book.error("Please fill the form correctly");
  }
  document.getElementById('form').reset();
}
