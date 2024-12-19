const myLibrary = [];

const bookTitle = document.getElementById('title');
const bookAuthor = document.getElementById('author');
const bookPages = document.getElementById('pages'); 

document.querySelector('.submit').addEventListener('click', addBookToLibrary);

function Book(title, author, pages){
    this.title = title;
    this.author = author; 
    this.pages = pages;
}

function addBookToLibrary(){
    myLibrary.push(new Book(bookTitle.value, bookAuthor.value, bookPages.value));

    console.log(myLibrary[0].bookTitle);
    console.log(myLibrary[0].author);
    console.log(myLibrary[0].pages);
}