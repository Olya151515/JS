// //- створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
const square = (a,b) => a * b;

console.log(square(10, 20));

// //- створити функцію яка обчислює та повертає площу кола з радіусом r
const sqCircus = (r) => r * r * 3.14;
console.log(sqCircus(5));
// // - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
const sqCylinder = (r,h) => 2 * r * h * 3.14;
console.log(sqCylinder(5,15));

// // - створити функцію яка приймає масив та виводить кожен його елемент

const  getArray = (arr) =>{
    for (const item of arr) {
        console.log(item);
    }
}
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
getArray(users);
// // - створити функцію яка створює параграф з текстом. Текст задати через аргумент

const createText = (p) =>{
    document.write(`<p>${p}</p>`);
}
createText('Hello');

// // - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

const  createList = (li) =>{
    document.write(`<ul>
                    <li>${li}</li>
                    <li>${li}</li>
                    <li>${li}</li>
                    </ul>`)
}
createList('List');
// // - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
const createMoreList = (li,num) =>{
    document.write(`<ul>`);
    for (let i = 0; i < num; i++) {
        document.write(`<li>${li}</li>`);
    }
    document.write(`</ul>`);
}
createMoreList('More' ,10);

// // - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
const listArrayElements = (arr) =>{
    document.write(`<ul>`);
    for (const arrElement of arr) {
        document.write(`<li>${arrElement}</li>`);
    }
    document.write(`</ul>`);
}
let arr =[36,12,'kjxcna', true,8192,false];
listArrayElements(arr);
// // - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.
// Для кожного об'єкту окремий блок.
const getArrayObjects = (arr) =>{
    for (const arrElement of arr) {
        document.write(`<div>`);
        for (const arrElementKey in arrElement) {
            document.write(`${arrElementKey} : ${arrElement[arrElementKey]} <br>`)
        }
        document.write(`</div> <br>`);
    }
}
getArrayObjects(users);

// // - створити функцію яка повертає найменьше число з масиву
const minValue = (arr) =>{
    let min = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] < min){
            min = arr[i];
        }
    }
    return min;
}
let arrNum = [42,54,1,23,6,9,99];
console.log(minValue(arrNum));
// // - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його.
// Приклад sum([1,2,10]) //->13
const sumArrElements = (arr) =>{
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}
console.log(sumArrElements(arrNum));

// // - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// // Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
const swapArrElements = (arr , index1, index2) =>{
    let tmp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = tmp;
    return arr;
}
console.log(swapArrElements(arrNum, 3, 4));
// // - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// // Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250

const exchange = (sumUAH,currencyValues,exchangeCurrency) =>{
    for (const item of currencyValues) {
        for (const itemKey in item) {
            if(item[itemKey] === exchangeCurrency){
                return sumUAH / item.value;
            }
        }
    }
}
console.log(exchange(12000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD'));