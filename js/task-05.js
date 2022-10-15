const inputEl = document.querySelector('#name-input');
const outputEl = document.querySelector('#name-output');

inputEl.addEventListener('input', (e) => {
    if (e.target.value !== "") {
        outputEl.textContent = e.target.value
    } else {
        outputEl.textContent = 'Anonymous';
    }
});
