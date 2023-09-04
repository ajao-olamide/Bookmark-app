// book class: Represent a Book
class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}

// UI Class : Handle UI Tasks
class UI {
  static displayBooks() {
    const StoredBooks = [
      {
        title: "Book One",
        author: "John Doe",
        isbn: "345324",
      },
      {
        title: "Book Two",
        author: "Jane Doe",
        isbn: "5324",
      },
    ];
    const books = StoredBooks;

    books.forEach((book) => UI.addBookToList(book));
  }

  static addBookToList(book) {
    const list = document.getElementById("book-list");

    const row = document.createElement("tr");

    row.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td><a href="#" class ="btn btn-danger btn-sm delete">X</a></td>`;

    list.appendChild(row);
  }

  static deleteBook(el){
    if(el.classList.contains('delete')){
        el.parentElement.parentElement.remove()
    }
  }

  static clearFields(){
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('isbn').value = '';

  }
}

// Store Class : Handles Storage

// Event : Display Books
document.addEventListener("DOMContentLoaded", UI.displayBooks);

// Event : add a Book
document.querySelector("#book-form").addEventListener("submit", submitBtn);

function submitBtn(e) {
  e.preventDefault();
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const isbn = document.getElementById("isbn").value;

  // instatiate book
  const book = new Book(title, author, isbn);
 
  // add Book to UI

  UI.addBookToList(book);

  // clear fields

  UI.clearFields()

}
// Event : Remove  a Book

document.getElementById('book-list').addEventListener('click', (e)=> {
    UI.deleteBook(e.target)
})