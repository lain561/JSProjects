const readButton = document.querySelector('.bk-check');

readButton.addEventListener('click', () => {

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