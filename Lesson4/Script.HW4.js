// //- створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
function square(a, b) {
    return a * b;
}

console.log(square(10, 10));

// //- створити функцію яка обчислює та повертає площу кола з радіусом r
function areaCircle(r) {
    return r * r * 3.14;
}

console.log(areaCircle(4));

// //- створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
function areaCylinder(h, r) {
    return 2 * h * r * 3.14;
}

console.log(areaCylinder(5, 3));

// //- створити функцію яка приймає масив та виводить кожен його елемент
function printArray(usersArray) {
    for (const user of usersArray) {
        console.log(user);
    }
    return usersArray;
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
printArray(users);

// //- створити функцію яка створює параграф з текстом. Текст задати через аргумент
function createText(p) {
    document.write(`<div>
                        <p>${p}</p>
                   </div>`);
}

createText("Lorem ");

// //- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
function createList(li) {
    document.write(`<ul>
                    <li>${li}</li> 
                    <li>${li}</li>
                    <li>${li}</li>
                    </ul>`);
}

createList("hello");

// //- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
function createMoreList(li, num) {
    document.write(`<ul>`);
    for (let i = 0; i < num; i++) {
        document.write(`<li>${li}</li>`);
    }
    document.write(`</ul>`);
}

createMoreList("world", 5);

// //- створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та
// будує для них список
function getPrimitiveArray(array) {
    document.write(`<ul>`);
    for (const arrayElement of array) {
        document.write(`<li>${arrayElement}</li>`);
    }
    document.write(`</ul>`);
}

let array = [3, 5, "hello", true, 6, 10, false];
getPrimitiveArray(array);
// //- створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в
// документ. Для кожного об'єкту окремий блок.

function getObjects(users) {

    for (const user of users) {
        document.write(`<div>`);
        for (const userName in user) {
            document.write(` ${userName}:   ${user[userName]} <br>`);
        }
        document.write(`</div> <br>`);
    }
}

getObjects(users);

// //- створити функцію яка повертає найменьше число з масиву
function minValue(array) {
    let min = array[0];
    for (let i = 0; i < array.length; i++) {
        if (array[i] < min) {
            min = array[i];
        }
    }
    return min;
}

let arrayNum = [4, 6, 1, 10, 4, 3, 10];
console.log(minValue(arrayNum));

// //- створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву
// та повертає його. Приклад sum([1,2,10]) //->13
function sumArr(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum;
}

let arraySum = [3, 2, 8, 1, 5, 4, 7, 5]
console.log(sumArr(arraySum));
// //- створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// //Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
function swap(array, index1, index2) {
    let tmp = array[index1];
    array[index1] = array[index2];
    array[index2] = tmp;

    return array;
}

let arrChanged = [4, 20, 10, 3, 100, 29];

console.log(swap(arrChanged, 3, 4));

// //- Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// //Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250

function exchange(sumUAH, currencyValues, exchangeCurrency) {
            for (const item of currencyValues) {
                for (const itemKey in item) {
                    if(exchangeCurrency === item[itemKey]){
                        return sumUAH / item.value;
                    }
                }
            }
}

console.log(exchange(12600,[{currency:'USD',value:40},{currency:'EUR',value:42}] ,'EUR'));