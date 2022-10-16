
// вибірка елемента
const form = document.querySelector('.login-form');

// підписка елемента
form.addEventListener('submit', onFormSubmit);

// обробка елемента
function onFormSubmit(event) {
    // відміна перезавантаження сторінки
    event.preventDefault();

// збір значення полів в об'єкт
    const {
    elements: { email, password }
    } = event.currentTarget;
// попередження при незаповненому полі
    if (email.value === "" || password.value === "") {
    return alert("Будь-ласка, заповніть усі поля!");
    }
// Вивід у консоль і очиста значення полів
    console.log(`Login: ${email.value}, Password: ${password.value}`);
    event.currentTarget.reset();

};
