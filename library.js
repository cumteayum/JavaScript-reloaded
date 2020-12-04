class Library{
  constructor(bookList){
    this.bookList = Array.from(bookList);
    this.bookListLength = this.bookList.length;
    this.issuedBooks = [];
    this.users = [];
  }

  getBookList() {
    for(let book in bookList){
      console.log(`${book}. ${bookList[book]}`);
    }
  }

  issueBook(bookName, user){
    let index = this.bookList.indexOf(bookName);
    this.bookList.splice(index, 1);
    this.issuedBooks.push(bookName);
    this.users.push(user);
    console.log(`Book ${bookName} issued !`);
  }

  returnBook(bookName) {
    let index = this.issuedBooks.indexOf(bookName);
    this.issuedBooks.splice(index,1);
    this.bookList.unshift(bookName);
    console.log(`Book ${bookName} returned!`);
  }
};

let bookList = ["Book1", "book2", "book3", "C", "Ruby"];
let lib = new Library(bookList);
