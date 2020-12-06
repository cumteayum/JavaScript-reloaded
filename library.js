class Library{
  constructor(name, bookList){
    this.name = name;
    this.bookList = bookList;
    this.issuedBooks = [];
  }

  issueBook(bookName){
    this.issuedBooks.push(bookName);
    let bookIndex = this.bookList.indexOf(bookName);
    this.bookList.splice(bookIndex, 1);
    console.log(`Book ${bookName} issued`);
  }

  returnBook(bookName){
    let index = this.issuedBooks.indexOf(this.bookName);
    this.issuedBooks.splice(index, 1);
    this.bookList.push(bookName);
    console.log(`Book ${bookName} returned`);
  }

  listBooks(){
    for (let b in this.bookList) {
      console.log(`${b}. ${this.bookList[b]}`);
    }
  }

  calculateValue(){
      let books = this.bookList;
      let flag;
      if(books.length > 3){
        flag=true;
      }else{
        flag=false
      }
      return flag
  }

}

let lib = new Library("ishan", ["C", "Python", "Java", "ML"])
lib.listBooks();
lib.issueBook("C");
lib.issueBook("Java");
lib.returnBook("C");
lib.listBooks();
console.log(lib.calculateValue())
