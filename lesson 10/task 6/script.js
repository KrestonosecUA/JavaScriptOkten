
// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він
// ніж 18, та повідомити про це користувача

let myForm = document.createElement('form');

let age = document.createElement('input');

let button = document.createElement('button');

myForm.classList.add('form');
age.classList.add('age');

age.placeholder = 'Введіть свій вік';

button.innerText = 'Опрацювати';

myForm.append(age, button);
document.body.appendChild(myForm);

button.addEventListener('click', (event) => {
    event.preventDefault();

    let myAge = Number(age.value);
    let block = document.getElementById('block');

    if (myAge < 18 ) {
        return alert('Вам менше ніж 18 років');
    } else {
        block.innerText = 'більше 18 років';
    }
})