//- За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
document.write(`<h1 class="hw_title">Homework 1</h1>`)
for (let i = 1; i <= 10; i++) {
    document.write(`
    <div class="block_hw1" >
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
    </div>`);
}

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
document.write(`<h1 class="hw_title">Homework 2</h1>`)
for (let i = 1; i <= 10; i++) {
    document.write(`
    <div class="block_hw2" >
        Блок номер ${i}
    </div>`);
}
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
document.write(`<h1 class="hw_title">Homework 3</h1>`)
i = 1;
while (i <= 10) {
    document.write(`
    <h1 class="title_hw3">
        Okten School
    </h1>`);
    i++;
}

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
document.write(`<h1 class="hw_title">Homework 4</h1>`)
i = 1;
while (i <= 10) {
    document.write(`
    <h1 class="title_hw4">
        Заголовок номер ${i}
    </h1>`);
    i++;
}

// - Використовуючи данні з масиву, за допомоги document.write та циклу
// побудувати структуру по шаблону
// Масив:
//
// let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];
//
// ШАБЛОН:
//  <ul>
//     <li>ITEM OF ARRAY</li>
//     <!--
//         і тд інші об'єкти масиву
//          ...
//          ...
//          ...
//     -->
// </ul>
//
// замість 'ITEM OF ARRAY' підставити елемент з масиву щоб получився цілий список з даними з масиву

document.write(`<h1 class="hw_title">Homework 5</h1>`)

let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];
document.write(`<ul class="list_hw5">`)
    for (let i = 0; i < listOfItems.length; i++) {
        document.write(`<li>${listOfItems[i]}</li>`)
    }
document.write(`</ul>`)
// -----------------------------------------------
//
// Використовуючи данні з масиву, за допомоги document.write та циклу
// побудувати структуру по шаблону
// Великими літерами прописанні властивості об'єкту які потрібно впровадити в шаблон
//
// 			let products = [
// 				{
// 					title: 'milk',
// 					price: 22,
// 					image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
// 				},
// 				{
// 					title: 'juice',
// 					price: 27,
// 					image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
// 				},
// 				{
// 					title: 'tomato',
// 					price: 47,
// 					image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
// 				},
// 				{
// 					title: 'tea',
// 					price: 15,
// 					image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
// 				},
// 			];
//
// ШАБЛОН
//  <div class="product-card">
//         <h3 class="product-title">TITLE. Price - PRICE</h3>
//         <img src="IMAGE" alt="" class="product-image">
// </div>
// Замість TITLE PRICE IMAGE - підставити відповідні поля з об'єкту

document.write(`<h1 class="hw_title">Homework 6</h1>`)

let products = [
 				{
 					title: 'milk',
 					price: 22,
 					image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
 				},
 				{
 					title: 'juice',
 					price: 27,
 					image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
				},
 				{
 					title: 'tomato',
 					price: 47,
 					image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
 				},
 				{
 					title: 'tea',
 					price: 15,
 					image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
 				},
 			];

for (let i = 0; i < products.length; i++) {
    document.write(`
        <div class="product-card">
            <h3 class="product-title">${products[i].title} <br> Price - ${products[i].price}</h3>
            <img src="${products[i].image}" alt="" class="product-image">
        </div>
    `)
}



// --------------------
// є масив
// let users = [
//     {name: 'vasya', age: 31, status: false},
//     {name: 'petya', age: 30, status: true},
//     {name: 'kolya', age: 29, status: true},
//     {name: 'olya', age: 28, status: false},
//     {name: 'max', age: 30, status: true},
//     {name: 'anya', age: 31, status: false},
//     {name: 'oleg', age: 28, status: false},
//     {name: 'andrey', age: 29, status: true},
//     {name: 'masha', age: 30, status: true},
//     {name: 'olya', age: 31, status: false},
//     {name: 'max', age: 31, status: true}
// ];
//  за допомоги циклу вивести:
//  - користувачів зі статусом true
//  - користувачів зі статусом false
//  - користувачів які старші за 30 років

document.write(`<h1 class="hw_title">Homework 7</h1>`)

let users = [
     {name: 'vasya', age: 31, status: false},
     {name: 'petya', age: 30, status: true},
     {name: 'kolya', age: 29, status: true},
     {name: 'olya', age: 28, status: false},
     {name: 'max', age: 30, status: true},
     {name: 'anya', age: 31, status: false},
     {name: 'oleg', age: 28, status: false},
     {name: 'andrey', age: 29, status: true},
     {name: 'masha', age: 30, status: true},
     {name: 'olya', age: 31, status: false},
     {name: 'max', age: 31, status: true}
    ];

document.write(`<h1>користувачі зі статусом true: </h1>`)
for (let i = 0; i < users.length; i++) {
    if (users[i].status) {
        document.write(`
         <p class="user_info">${users[i].name} ${users[i].age}</p>
    `)
        console.log(users[i])
    }
}

document.write(`<h1>користувачі зі статусом false: </h1>`)
for (let i = 0; i < users.length; i++) {
    if (!users[i].status) {
        document.write(`
         <p class="user_info">${users[i].name} ${users[i].age}</p>
    `)
        console.log(users[i])
    }
}

document.write(`<h1>користувачі які старші за 30 років: </h1>`)
for (let i = 0; i < users.length; i++) {
    if (users[i].age > 30) {
        document.write(`
         <p class="user_info">${users[i].name} ${users[i].age}</p>
    `)
        console.log(users[i])
    }
}