
// Є сторінка index.html (назва довільна), при відвідуванні якої в локальне сховище, в масив sessions зберігається інформація про дату та час
// відвідування сторінки. Є ще сторінка sessions.html (назва довільна), при відвідуванні якої потрібно відмалювати всю інформацію про відвідування
// сторінки index.html. Інфу НЕ виводити в консоль, а побудувати дом структуру під кожну сессію

const sessions = localStorage.getItem('sessions');
const data = sessions ? JSON.parse(sessions) : [];

for (const item of data) {
    let block = document.createElement('div');
    block.innerText = item.date;

    document.body.append(block);
}