const readButton = document.querySelector('.bk-check');

readButton.addEventListener('click', () => {
    const uncheck = document.querySelector('.bi-check-circle');
    const check = document.querySelector('.bi-check-circle-fill'); 

    if(check.style.display === 'none'){
        uncheck.style.display = 'none';
        check.style.display = 'inline';
        readButton.title = 'Mark as Unread';
    }

    else if(uncheck.style.display === 'none'){
        check.style.display = 'none';
        uncheck.style.display = 'inline';
        readButton.title = 'Mark as Read';
    }
});