const inputEl = document.querySelector('#font-size-control');
const spanEl = document.querySelector('#text');

inputEl.addEventListener('input', (e) => {
    let size = e.target.value;
    spanEl.style.fontSize = size +"px";
});

