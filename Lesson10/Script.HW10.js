// Стоврити форму з трьома полями для name,surname,age та кнопкою. При натисканні на кнопку
// зчитати данні з полів, та вивести об'єкт в документ. Іншими словами : заповниои форму, натиснули кнопку,
// під формою з'явився блок з вашим об'єктом

let f1 = document.getElementById('f1');
let divDescription =  document.getElementById('description');
divDescription.classList.add('mainDiv');
f1.onsubmit = function (e){
    e.preventDefault();
    let username = this.username.value;
    let surname = this.surname.value;
    let age = this.age.value;

    let div = document.createElement('div');
    div.innerHTML = ` Name: ${username} <br> Surname: ${surname} <br> Age: ${age}`;
    divDescription.appendChild(div);
}
document.body.appendChild(divDescription);
// ==========================

// є сторінка, на якій є блок, я кому знаходится цифра. написати код, який при кожному
// перезавантажені сторінки буде додавати до неї +1;

let divNum = document.getElementById('divNum');

let currentNum = JSON.parse(localStorage.getItem('number')) || 0;
currentNum +=1;
divNum.innerText =`${currentNum}`;
localStorage.setItem('number' , currentNum);
// ==========================
// Є сторінка index.html (назва довільна), при відвідуванні якої в локальне сховще,
// в масив sessions зберігається інформація про дату та час відвідування сторінки.
// Є ще сторінка sessions.html (назва довільна), при відвідуванні якої потрібно
// відмалювати всю інформацію про відвідування сторінки index.html. Інфу НЕ виводити
// в консоль, а побудувати дом структуру під кожну сессію


let index = document.getElementById('index');

index.onclick = function (e){
    e.preventDefault()
    // console.log(e);
    let date = new Date();
    let dateClick = date.getDate();
    let timeClick = date.getSeconds();
    let obj ={date:dateClick,seconds:timeClick}
    let sessionsFromStorage = localStorage.getItem('sessions');
    if(!sessionsFromStorage){
        localStorage.setItem('sessions', JSON.stringify([obj]));
    }
    if(sessionsFromStorage){
        let sessionArr = JSON.parse(sessionsFromStorage);
        sessionArr.push(obj);
        localStorage.setItem('sessions',JSON.stringify(sessionArr));

    }
}

// - Створити довільний елемент з id = text та створити кнопку.Використовуючи JavaScript,
// зробіть так, щоб при натисканні на кнопку зникав елемент з id="text".

let divText = document.getElementById('text');
divText.innerText ='Створити довільний елемент з id = text та створити кнопку.Використовуючи JavaScript,\n' +
    ' зробіть так, щоб при натисканні на кнопку зникав елемент з id="text".'

let btn = document.getElementById('btnText');

btn.onclick = function (){
    divText.hidden = true;
}

// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.
// При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи
// меньше він ніж 18, та повідомити про це користувача

let f2 = document.getElementById('f2');
let span = document.getElementById('CheckAge');
f2.onsubmit = function (e){
    e.preventDefault();
    let userAge = this.ageUser.value;
    if(userAge > 0 && userAge < 18){
        span.innerText = 'Your age is less than 18'
    }
    else if(userAge === '18'){
        span.innerText = 'Your age is 18'
    }
    else if(userAge > 18){
        span.innerText = 'Your age is over 18'
    }
    else{
        span.innerText = 'Sorry , you enter wrong age'
    }
}

// *** Створити 3 інпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
// При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)

let table = document.getElementById('table')
table.classList.add('table-block')
console.log(table.attributes);

let f3 = document.getElementById('f3')
f3.onsubmit = function (e){
    e.preventDefault()
    let lines = this.countLines.value;
    let columns = this.countColumns.value;

    console.log(lines , columns);
    for (let i = 0; i < lines; i++) {
        let tr = document.createElement('tr');
        tr.classList.add('tr-flex')
        for (let i = 0; i < columns; i++) {
            let td = document.createElement('td');
            td.classList.add('td-flex')
            td.innerText = `${this.textColumns.value}`
            tr.appendChild(td);
            table.appendChild(tr);
        }
    }
    document.body.appendChild(table);
}

// *** (подібне було вище, але...будьте уважні в другій частині) створити сторінку з довільним блоком,
// в середині якого є значення "100грн"
// при перезавантаженні сторінки до значаення додається по 10грн, але !!!
//  зміна ціни відбувається тільки на перезавантаження, які відбулись пізніше ніж 10 секунд після попереднього.
//  При перезавантаженні, яке відбулось раніше ніж минуло 10 секунд - нічого не відбувається;



