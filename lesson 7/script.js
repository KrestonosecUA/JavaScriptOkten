//- Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)

function User(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}

let users = [
    new User(1, 'Natalia', 'Pokotilo', 'natalia123@gmail.com', '+380987667543'),
    new User(2, 'Oleksandr', 'Lazarets', 'sanya_f@gmail.com', '+380677967946'),
    new User(3, 'Mykuta', 'Pogorilets', 'm_m23@ukr.net', '+380984545455'),
    new User(5, 'Mary', 'Lopachuk', 'mariya_pp@gmail.com', '+380978649541'),
    new User(7, 'Ivan', 'Ivanchyk', 'vanya@gmail.com', '+380677967342'),
    new User(6, 'Kolya', 'Petrenko', 'kkkfffppp@gmail.com', '+380677945366'),
    new User(4, 'Nataliya', 'Letsyk', 'nata456@gmail.com', '+380686767677'),
    new User(8, 'Mariya', 'Kopets', 'mary_k@ukr.net', '+380981212122'),
    new User(9, 'Yuriy', 'Nazarenko', 'yura34@gmail.com', '+380677967343'),
    new User(10, 'Larusa', 'Vitkovets', '123_lara_123@gmail.com', '+380986756453')
]

console.log(users);

//- Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

let filterUsers = users.filter(function (user) {
    if (user.id % 2 === 0) {
        return true;
    }
});

console.log(filterUsers);

//- Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

let sortUsers = users.sort((a, b) => a.id - b.id);

console.log(sortUsers);

//- створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client





// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)