// //- Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)

function User (id, name, surname , email, phone){
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}
let usersArray =[
    new User(12,'ola','xsajsxna' , 'klajcj@.gmail' , 1373198),
    new User(20,'kolya','sa' , 'scc@.gmail' , 2524646),
    new User(3,'andrij','aeca' , 'dvs@.gmail' , 64353),
    new User(14,'vasya','acedcae' , 'sdv@.gmail' , 55768),
    new User(55,'petya','case' , 'vsv@.gmail' , 54656),
    new User(63,'roma','ceqdv' , 'savn@.gmail' , 65577),
    new User(7,'sasha','vfrr' , 'nhmkj@.gmail' , 57756884),
    new User(81,'katya','tre' , 'ghn@.gmail' , 2435548),
    new User(9,'ira','tkoi' , 'mygu@.gmail' , 749473),
    new User(10,'vika','dvv ' , 'hg@.gmail' , 6786767),
];
console.log(usersArray);

// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти
// з парними id (filter)
const filteredUsersById =   usersArray.filter(value => value.id % 2 === 0);
console.log(filteredUsersById);

// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

const sortedUsersBuID =  usersArray.sort((user1 , user2) => user1.id - user2.id);
console.log(sortedUsersBuID);
// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
class Client {
    constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}
let clientsArray =[
    new Client(12,'ola','xsajsxna' , 'klajcj@.gmail' , 1373198 , ['coffee','oil']),
    new Client(20,'kolya','sa' , 'scc@.gmail' , 2524646, ['sugar'],),
    new Client(3,'andrij','aeca' , 'dvs@.gmail' , 64353, ['coffee','bread','tomato','potato','orange']),
    new Client(14,'vasya','acedcae' , 'sdv@.gmail' , 55768, ['orange','oil']),
    new Client(55,'petya','case' , 'vsv@.gmail' , 54656, ['coffee','apple']),
    new Client(63,'roma','ceqdv' , 'savn@.gmail' , 65577, ['juice','oil','paper','soil' ]),
    new Client(7,'sasha','vfrr' , 'nhmkj@.gmail' , 57756884, ['coffee']),
    new Client(81,'katya','tre' , 'ghn@.gmail' , 2435548, ['coffee','oil','cucumber']),
    new Client(9,'ira','tkoi' , 'mygu@.gmail' , 749473, ['coffee','oil']),
    new Client(10,'vika','dvv ' , 'hg@.gmail' , 6786767, ['coffee','oil','juice']),
]
console.log(clientsArray);

// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по
// зростанню. (sort)

const sortedClientsByOrders = clientsArray.sort((client1,client2) => client1.order.length - client2.order.length);
console.log(sortedClientsByOrders);

// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник,
// рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
function Car1(model,manufacturer,year,maxSpeed ,engineVolume){
        this.model = model;
        this.manufacturer = manufacturer;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.enginVolume = engineVolume;
        this.drive = function (){
            console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
        };
        this.info = function (){
            console.log({
                Model:this.model,
                Manufacturer: this.manufacturer,
                Year:this.year,
                MaxSpeed:this.maxSpeed,
                engineVolume:this.enginVolume,
                driver:this.driver,
            });
        };
        this.increaseMaxSpeed = function (newSpeed){
          return this.maxSpeed += newSpeed;
        };
        this.changeYear = function (newValue){
            return this.year = newValue;
        }
        this.addDriver = function (driverName , driveAge ){
            this.driver = {
                name:driverName,
                age: driveAge,
            }
          return this.driver;
        }
}
let car1 = new Car1('Toyota' ,'Toyota Motor Corporation',  1933 , 190 ,1.8 );
console.log(car1);
//     -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
car1.drive();
//     -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
car1.info();
//     -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
car1.increaseMaxSpeed(50);
car1.info();
//     -- changeYear (newValue) - змінює рік випуску на значення newValue
car1.changeYear(1999);
car1.info();
//     -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
car1.addDriver('Vasya' , 34);
car1.info();

// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
class Car2{
    constructor(model, manufacturer, year, maxSpeed, engineVolume) {
        this.model = model;
        this.manufacturer = manufacturer;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.engineVolume = engineVolume;
    }
    drive(){
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
    };
    info (){
        console.log({
            Model:this.model,
            Manufacturer: this.manufacturer,
            Year:this.year,
            MaxSpeed:this.maxSpeed,
            engineVolume:this.engineVolume,
            driver:this.driver,
        });
    };
    increaseMaxSpeed (newSpeed){
        return this.maxSpeed += newSpeed;
    };
    changeYear (newValue){
        return this.year = newValue;
    };
    addDriver (driverName , driveAge ){
        this.driver = {
            name:driverName,
            age: driveAge,
        }
        return this.driver;
    }
}
const car2 = new Car2('Hyundai ' ,'Hyundai Motor Corporation',  1967 , 180 ,2 );
console.log(car2);
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
car2.drive();
//     -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
car2.info();
//     -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
car2.increaseMaxSpeed(20);
car2.info();
//     -- changeYear (newValue) - змінює рік випуску на значення newValue
car2.changeYear(1989);
car2.info();
//     -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
car2.addDriver('Sasha' , 40);
car2.info();


// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// За допомоги циклу знайти яка попелюшка повинна бути з принцом.
// Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
class Cinderella{
    constructor(name, age, footSize) {
        this.name = name;
        this.age = age;
        this.footSize = footSize;
    }
}
let cinderellasArray =[
    new Cinderella('olya',20,39),
    new Cinderella('vika',19,38),
    new Cinderella('katya',17,37),
    new Cinderella('ira',21,40),
    new Cinderella('olena',22,41),
    new Cinderella('sophia',18,39),
    new Cinderella('kira',19,40),
    new Cinderella('luba',23,37),
    new Cinderella('sasha',20,38),
    new Cinderella('yulia',19,39)
];
class Prince{
    constructor(name, age, shoeSizeCinderella) {
        this.name = name;
        this.age = age;
        this.shoeSizeCinderella = shoeSizeCinderella;
    }
}
let prince1 = new Prince('kolya' , 25, 41);
cinderellasArray.forEach(value => {
     if(value.footSize === prince1.shoeSizeCinderella){
         console.log(value);
     }
});
// Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

//За допомогою функції find:
const find =  cinderellasArray.find(value => value.footSize === prince1.shoeSizeCinderella );
console.log(find);

//За допомогою callback function:
const searchCinderella =  ((arr,callback) =>{
    for (const arrElement of arr) {
        if(callback(arrElement)){
            console.log(arrElement);
        }
    }
});
searchCinderella(cinderellasArray,(item) => item.footSize === prince1.shoeSizeCinderella);


// Через Array.prototype. створити власний foreach, filter, map
let arrayNum = [11,22,33,44,55,66,77,88];

// //створити власний foreach
Array.prototype.myForEach = function (callback){
    for (const item of this) {
        if(callback(item)){
           console.log(item);
        }
    }
}
arrayNum.myForEach((value) => value);

// //створити власний filter
Array.prototype.myFilter = function (callback){
    let arr =[];
    for (const item of this) {
        if(callback(item)){
            arr.push(item);
        }
    }
    return arr;
};
console.log(arrayNum.myFilter((item) => item > 50));

// //створити власний map
Array.prototype.myMap = function ( callback){
    let arr =[];
    for (const item of this) {
        if(callback(item)){
            arr.push(item);
        }
    }
    return arr;
};
console.log(arrayNum.myMap(num => num > 60));
