const myLibrary = [];

document.getElementById('submit').addEventListener('submit', (event) => {
    event.preventDefault(); 
    alert('hi'); 
});

function Book(title, author, pages, read){
    this.title = title;
    this.author = author; 
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(){
    const bookTitle = document.getElementById('title').value;
    const bookAuthor = document.getElementById('author').value;
    const bookPages = document.getElementById('pages').value; 
    const bookRead = document.getElementById('read').checked; 

    const newBook = new Book(bookTitle, bookAuthor, bookPages);
    console.log(newBook);
}


