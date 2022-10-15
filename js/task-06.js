const inputEl = document.querySelector('#validation-input');

inputEl.addEventListener('blur', (e) => {
    if (!e.currentTarget.value.length) {
        inputEl.className = '';
    } else if (e.currentTarget.value.length == inputEl.getAttribute('data-length')) {
        inputEl.className = 'valid';
    } else {
        inputEl.className = 'invalid';
    }

});