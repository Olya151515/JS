// //- За допомогою циклу for і document.write() вивести 10 блоків div c
// довільним текстом всередині
for (let i = 0; i < 10; i++) {
   document.write('<div class="boxDiv"><p>Lorem ipsum dolor sit amet.</p>' +
                     '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa, perferendis?</p>' +
                '</div>');
}

// //- За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині

for (let i = 0; i < 10; i++) {
    document.write(`<div class="boxDiv"><h4> Index ${i}</h4> <p>Lorem ipsum dolor sit amet.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa, perferendis?</p></div>`);

}

// //- За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
//
let count = 0;
while (count < 20){
    document.write(`<h1>Lorem ipsum dolor.</h1>`);
    count++;
}

// //- За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
let index = 0;
while (index < 20){
    document.write(`<div><h1> Index ${index} .  Lorem ipsum dolor.</h1></div>`);
    index++;
}

// //- Використовуючи данні з масиву, за допомоги document.write та циклу побудувати структуру по шаблону
//
let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];

document.write(`<ul>`);
for (const listOfItem of listOfItems) {
    document.write(`<li> ${listOfItem}</li>`)
}
document.write(`</ul>`);

// // Використовуючи данні з масиву, за допомоги document.write та циклу побудувати структуру по шаблону
// Великими літерами прописанні властивості об'єкту які потрібно впровадити в шаблон
let products = [
    {
        title: 'Milk',
        price: 22,
        image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
    },
    {
        title: 'Juice',
        price: 27,
        image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
    },
    {
        title: 'Tomato',
        price: 47,
        image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
    },
    {
        title: 'Tea',
        price: 15,
        image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
    },
];
document.write('<div class="flex">')
for (const product of products) {
    document.write(`<div class="product-card">
                        <h3 class="product-title">${product.title}. Price - ${product.price}</h3>
                        <img src="${product.image}" class="product-image" alt="photo" >
               </div>`)
}
document.write('</div>')

// //за допомоги циклу вивести:
//  - користувачів зі статусом true
//  - користувачів зі статусом false
//  - користувачів які старші за 30 років
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

for (const user of users) {
    if(user.status){
        console.log(user);
    }
}
for (const user of users) {
    if(!user.status){
        console.log(user);
    }
}
for (const user of users) {
    if(user.age > 30){
        console.log(user);
    }
}