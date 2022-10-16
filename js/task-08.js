
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
     
    const obj = {
        email: email.value,
        password: password.value,
    };

// попередження при незаповненому полі
    if (email.value === "" || password.value === "") {
    return alert("Будь-ласка, заповніть усі поля!");
    }

// Вивід у консоль і очистка значення полів
    console.log(obj);
    event.currentTarget.reset();

};
