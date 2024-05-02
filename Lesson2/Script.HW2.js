// //Масиви та об'єкти:
// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль

let arr = [10,20,12,true,{},[],'name',21,false,[]];
console.log(arr);
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);
console.log(arr[4]);
console.log(arr[5]);
console.log(arr[6]);
console.log(arr[7]);
console.log(arr[8]);
console.log(arr[9]);

// //- Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.

// let book1={
//     title: 'Harry potter',
//     pageCount: 345,
//     genre: 'fantasy'
// }
// let book2={
//     title: 'Romeo and Juliet ',
//     pageCount: 1563,
//     genre: 'tragedy'
// }
// let book3={
//     title: 'Marry poppins',
//     pageCount: 697,
//     genre: 'fantasy'
// }
// //- Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється
// // масивом. Кожен автор має поля name та age.
let book1={
    title: 'Harry potter',
    pageCount: 345,
    genre: 'fantasy',
    authors:[
        {
            name:'Joan',
            age: 50
        },
        {
            name:'Rowling',
            age: 60
        },
    ]
}
let book2={
    title: 'Romeo and Juliet ',
    pageCount: 1563,
    genre: 'tragedy',
    authors:[
        {
            name:'William',
            age: 55
        },
        {
            name:'Rowling',
            age: 60
        },
    ]
}
let book3={
    title: 'Marry poppins',
    pageCount: 697,
    genre: 'fantasy',
    authors:[
        {
            name:'Pamela',
            age: 57
        },
        {
            name:'Rowling',
            age: 60
        },
    ]
}
// //- Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль
// // пароль кожного користувача

let users = [
    {
        name:'vasia',
        username:'2jd',
        password:'3464293'
    },
    {
        name:'olya',
        username:'cdq1',
        password:'317fcssfcwe33'
    },
    {
        name:'kolya',
        username:'1dc',
        password:'317szcewws593'
    },
    {
        name:'sergii',
        username:'2dqfc',
        password:'31tethy784793'
    },
    {
        name:'katya',
        username:'csc1',
        password:'317rgtytr46493'
    },
    {
        name:'vika',
        username:'223dc',
        password:'3174t2rhetnj93'
    },
    {
        name:'sasha',
        username:'2cf78',
        password:'317tethneth93'
    },
    {
        name:'ihor',
        username:'65h',
        password:'317w3eda93'
    },
    {
        name:'andrij',
        username:'5fhyt',
        password:'317ngjhyt93'
    },
    {
        name:'olena',
        username:'6ngfn',
        password:'317srnt93'
    }
];
console.log(users[0].password);
console.log(users[1].password);
console.log(users[2].password);
console.log(users[3].password);
console.log(users[4].password);
console.log(users[5].password);
console.log(users[6].password);
console.log(users[7].password);
console.log(users[8].password);
console.log(users[9].password);

// //- описати масив, в якому буде зберігатись інформація про температуру вранці, вдень і ввечері за термін в 7 днів.
// // Як зробити цей масив - вам потрібно подумати. Нормальних варіантів опису - 2. Варіант, коли в вас буде одновимірний масив
//  // з 21 значенням вичключаємо одразу.

let temps = [
    {
        title:'Monday',
        Morning:15,
        Day:20,
        Evening:17,
     },
    {
        title:'Tuesday',
        Morning:13,
        Day:17,
        Evening:12,
     },
    {
        title:'Wednesday',
        Morning:19,
        Day:22,
        Evening:14,
     },
    {
        title:'Thursday',
        Morning:18,
        Day:14,
        Evening:10,
     },
    {
        title:'Friday',
        Morning:15,
        Day:22,
        Evening:17,
     },
    {
        title:'Saturday',
        Morning:17,
        Day:22,
        Evening:19,
     },
    {
        title:'Sunday',
        Morning:16,
        Day:20,
        Evening:14,
     }
];

// //Логічні розгалуження:
// - Є змінна х, якій ви надаєте довільне числове значення.
// Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3

let x = -3;
if(x !== 0){
    console.log('Вірно');
}
else {
    console.log('Невірно');
}
// //- Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
let time = 16;
if(time >= 1 && time <= 15 ){
    console.log('Час в першій чверті години');
}else if(time > 15 && time <= 30){
    console.log('Час в другій чверті години');
}
else if(time > 30 && time <=45){
    console.log('Час в третій чверті години');
}
else{
    console.log('Час в четвертій чверті години');
}

// //- У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє
// // це число (у першу, другу чи третю).

let day = 31;
if(day <= 10){
    console.log('Число є в першій декаді');
}
else if(day > 10 && day <=20){
    console.log('Число є в другій декаді');
}
else {
    console.log('Число є в третій декаді');
}

// //- Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається
// /інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).

let dayInWeek = prompt('Enter your day');
switch (dayInWeek){
    case '1':
        console.log('Monday');
        break;
    case '2':
        console.log('Tuesday');
        break;
    case '3':
        console.log('Wednesday');
        break;
    case '4':
        console.log('Thursday');
        break;
    case '5':
        console.log('Friday');
        break;
    case '6':
        console.log('Saturday');
        break;
    case '7':
        console.log('Sunday');
        break;
    default:
        console.log('Enter correct day');
}

// //- Користувач вводить або має два числа. Потрібно знайти та вивести максимальне число з тих двох .
// Також потрібно врахувати коли введені рівні числа.

let firstNum = 5;
let secondNum = 10;

if(firstNum > secondNum){
    console.log('Max number is', + ' ' + firstNum);
}else if(firstNum < secondNum){
    console.log('Max number is', + ' ' + secondNum);
}else{
    console.log('Numbers are similar');
}

// //- є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
// // буде присвоювати змінній х значення "default"  якщо ви намагаєтесь присвоїти в неї falsy-значення (хибноподібні, тобто ті,
// // які приводиться до false, а це 0 null undefined і тд).

let a = 1;
if(! !!a){
    a = 'default';
}
console.log(a);

// // - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити кожен його елемент на
// // тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

if(coursesAndDurationArray[0].monthDuration > 5){
    console.log('Супер');
}if(coursesAndDurationArray[1].monthDuration > 5){
    console.log('Супер');
}if(coursesAndDurationArray[2].monthDuration > 5){
    console.log('Супер');
}if(coursesAndDurationArray[3].monthDuration > 5){
    console.log('Супер');
}if(coursesAndDurationArray[4].monthDuration > 5){
    console.log('Супер');
}if(coursesAndDurationArray[5].monthDuration > 5){
    console.log('Супер');
}
