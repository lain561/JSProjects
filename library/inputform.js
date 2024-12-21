const myLibrary = [];
deleteBook(0);

document.querySelector('form').addEventListener('submit', (event) => {
    event.preventDefault(); // prevent send request to back end
    addBookToLibrary();
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

    const newBook = new Book(bookTitle, bookAuthor, bookPages, bookRead);
    myLibrary.push(newBook);
    renderBook();
}

function deleteBook(index){
    myLibrary.splice(index, 1);
    renderBook();
}  

function renderBook(){
    const bookLibrary = document.querySelector('main');

    bookLibrary.innerHTML = "";
    for(let i = 0; i < myLibrary.length; i++){
        const bookCard = document.createElement('div');
        bookCard.classList.add('book');

        bookCard.innerHTML = 
        `<h5 class="bk-title">
                ${myLibrary[i].title}
            </h5>
            <h6 class="bk-author">
                by ${myLibrary[i].author}
            </h6>
            <h6 class="bk-pages">
                Pages: ${myLibrary[i].pages}
            </h6>
            <div class="bk-menu">
                <button class="bk-button bk-check" title="Mark as Read">
                    <svg xmlns="http://www.w3.org/2000/svg" width="27" height="30" fill="currentColor" class="bi bi-check-circle" viewBox="0 0 16 16" style="display:inline">
                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                        <path d="m10.97 4.97-.02.022-3.473 4.425-2.093-2.094a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05"/>
                      </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="27" height="30" fill="currentColor" class="bi bi-check-circle-fill" viewBox="0 0 16 16" style="display:none">
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
                    </svg>
                </button>
                <button class="bk-button bk-trash" title="Delete" onclick="deleteBook(${i});">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
                    <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
                  </svg>
                </button>
            </div>`;    


        const button = bookCard.querySelector('.bk-button');
        const uncheck = button.querySelector('.bi-check-circle');
        const check = button.querySelector('.bi-check-circle-fill'); 

        readStatus(button, check, uncheck, false, i);
        
        bookCard.querySelector('.bk-button').addEventListener('click', () => {
            readStatus(button, check, uncheck, true, i);
        });

        bookLibrary.appendChild(bookCard);
    }
}

function readStatus(button, check, uncheck, click, index){
    if(myLibrary[index].read){
        if(click){
            check.style.display = 'none';
            uncheck.style.display = 'inline';
            button.title = 'Mark as Unread';
        }
        else{
            uncheck.style.display = 'none';
            check.style.display = 'inline';
            button.title = 'Mark as Read';
        }
    } 
    
    else{
        if(click){
            uncheck.style.display = 'none';
            check.style.display = 'inline';
            button.title = 'Mark as unread';
        }
        else{
            check.style.display = 'none';
            uncheck.style.display = 'inline';
            button.title = 'Mark as Read';
        }
        
    }

    myLibrary[index].read = !myLibrary[index].read;
}
