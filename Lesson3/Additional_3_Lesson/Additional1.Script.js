// //--створити масив з:
// - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль

let arr1 =[3,10,3,9,6,'cj','ed','qs','wqd','qwe',23,1,'wsd',true,false];

for (let i = 0; i < arr1.length; i++) {
    console.log(arr1[i]);
}

// //-- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу.
// Вивести в консоль
//
let arrEmpty=[];

arrEmpty[0] = 7327;
arrEmpty[1]='dcwdc';
arrEmpty[2] = true;
arrEmpty[3] = 2472;
console.log(arrEmpty);

// //- є масив [2,17,13,6,22,31,45,66,100,-18] :
// 1. перебрати його циклом while
// 2. перебрати його циклом for
// 3. перебрати циклом while та вивести  числа тільки з непарним індексом
// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
// 5. перебрати циклом while та вивести  числа тільки парні  значення
// 6. перебрати циклом for та вивести  числа тільки парні  значення
// 7. замінити кожне число кратне 3 на слово "okten"
// 8. вивести масив в зворотньому порядку.

let arr2 =[2,17,13,6,22,31,45,66,100,-18];
// // 1.перебрати його циклом while
let i = 0;
while (i < arr2.length){
    console.log(arr2[i]);
    i++;
}

// // 2.перебрати його циклом for
for (const number of arr2) {
    console.log(number);
}

// // 3. перебрати циклом while та вивести  числа тільки з непарним індексом
let a = 0;
while (a < arr2.length){
    if (a % 2 !== 0){
        console.log(arr2[a]);
    }
    a++;
}

// //4. перебрати циклом for та вивести  числа тільки з непарним індексом
for (let i = 0; i < arr2.length; i++) {
    if(i%2 !== 0){
        console.log(arr2[i]);
    }
}

// //5. перебрати циклом while та вивести  числа тільки парні  значення
let index = 0;
while (index < arr2.length){
    if(index % 2 === 0){
        console.log(arr2[index]);
    }
    index++;
}

// // 6. перебрати циклом for та вивести  числа тільки парні  значення
for (let i = 0; i < arr2.length; i++) {
    if(i%2 === 0){
        console.log(arr2[i]);
    }
}

// // 7. замінити кожне число кратне 3 на слово "okten"
for (let i = 0; i < arr2.length; i++) {
    if(arr2[i] % 3 === 0){
        arr2[i] = 'okten';
    }
}
console.log(arr2);

// // 8. вивести масив в зворотньому порядку.

for (let i = arr2.length - 1; i >= 0 ; i--) {
    console.log(arr2[i]);
}

// //- Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.

let arr3 = [32,4,67,2,4,34,6,7,8,9];
for (const number of arr3) {
    console.log(number);
}
// //- Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
let arr4 = ['qwsx','eae','qwsawsx','pop','asw','qqq','qwplosx','nnnn','mlk','olp'];
for (const string of arr4) {
    console.log(string);
}

//- Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
let arr5 = [32,54,'cac',true,false,332,313,'dx','dxqax',true];
for (const arr5Element of arr5) {
    console.log(arr5Element);
}

// //- Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof
// вивести тільки булеві елементи
let arr6 =[37,10,'cikc',true,false,17,20,true,true,'sxxqw'];
for (let i = 0; i < arr6.length; i++) {
    if( typeof arr6[i] === 'boolean'){
        console.log(arr6[i]);
    }
}
// //- Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof
// вивести тільки числові елементи
for (let i = 0; i < arr6.length; i++) {
    if(typeof arr6[i] === 'number'){
        console.log(arr6[i]);
    }
}
// //- Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof
// вивести тільки рядкові елементи
for (let i = 0; i < arr6.length; i++) {
    if(typeof arr6[i] === 'string'){
        console.log(arr6[i]);
    }
}

// //- Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних
// індексів.Вивести в консоль всі його елементи в циклі.
let arrNew =[];
arrNew[0] = 317;
arrNew[1] = 'dcqe';
arrNew[2] = true;
arrNew[3] = 'asxWX';
arrNew[4] = 31;
arrNew[5] = false;
arrNew[6] = 'szq';
arrNew[7] = 'saa';
arrNew[8] = 313;
arrNew[9] = 7657;

for (const arrNewElement of arrNew) {
    console.log(arrNewElement);
}

// //- Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log
// та document.write
for (let i = 0; i < 10; i++) {
    console.log(i);
    document.write(`${i}`);
}
document.write('<br>')
// //- Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та
// document.write
for (let i = 0; i < 100; i++) {
    console.log(i);
    document.write(`${i}`);
}

// // Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та
// document.write
document.write('<br>');
for (let i = 0; i < 100 ; i+=2) {
    console.log(i);
    document.write(`${i}`)
}

// //- Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
document.write('<br>');
for (let i = 0; i < 100; i++) {
    if(i % 2 === 0){
        console.log(i);
        document.write(`${i}`);
    }
}
// //- Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
document.write('<br>')
for (let i = 0; i < 100; i++) {
    if(i % 2 !== 0){
        console.log(i);
        document.write(`${i}`);
    }
}

// //стоврити масив книжок (назва, кількість сторінок, автори , жанри).
// -знайти наібльшу книжку.
// - знайти книжку/ки з найбільшою кількістю жанрів
// - знайти книжку/ки з найдовшою назвою
// - знайти книжку/ки які писали 2 автори
// - знайти книжку/ки які писав 1 автор

let books = [
    {
        title: "Harry Potter and the Sorcerer's Stone",
        pageCount: 320,
        authors: ["J.K."," Rowling"],
        genres: ['fantasy','classic']
    },
    {
        title: "The Lord of the Rings",
        pageCount: 1178,
        authors: ["J.R.R."],
        genres: ["fantasy"]
    },
    {
        title: "Pride and Prejudice",
        pageCount: 279,
        authors: ["Jane Austen"],
        genres: ["romance"]
    }
];
// //// -знайти наібльшу книжку.

let bigBook = books[0];
for (const book of books) {
    if(book.pageCount > bigBook.pageCount){
        bigBook = book;
    }
}
console.log(bigBook);

// //// - знайти книжку/ки з найбільшою кількістю жанрів

let bigGenre = books[0];
for (const book of books) {
    if(book.genres.length > bigGenre.genres.length){
        bigGenre = book;
    }
}
console.log(bigGenre);