const myLibrary = [];

const bookTitle = document.getElementById('title');
const bookAuthor = document.getElementById('author');
const bookPages = document.getElementById('pages'); 
const bookRead   = document.getElementById('pages'); 

document.querySelector('.submit').addEventListener('click', addBookToLibrary);

function Book(title, author, pages, read){
    this.title = title;
    this.author = author; 
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(){
    const newBook = new Book(bookTitle.value, bookAuthor.value, bookPages.value);
    myLibrary.push(newBook);
    console.log(myLibrary[0]); 
    console.log(myLibrary[0]); 
}


