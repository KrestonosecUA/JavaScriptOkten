
// - Створити довільний елемент з id = text та створити кнопку.Використовуючи JavaScript, зробіть так, щоб при натисканні на кнопку зникав елемент з id="text".

const textField = document.getElementById('text');
const btn = document.getElementById('delete');

//btn.onclick = function(event) {
//    textField.style.display = 'none';
//}

btn.addEventListener('click', () => {
    textField.style.display = 'none';
})