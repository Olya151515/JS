// //- Знайти та вивести довижину настипних стрінгових значень
//     'hello world', 'lorem ipsum', 'javascript is cool'
const string1 = 'hello world';
console.log(string1.length);
const string2 = 'lorem ipsum';
console.log(string2.length);
const  string3 = 'javascript is cool';
console.log(string3.length);

// - Перевести до великого регістру наступні стрінгові значення
//       'hello world', 'lorem ipsum', 'javascript is cool'
console.log(string1.toUpperCase());
console.log(string2.toUpperCase());
console.log(string3.toUpperCase());

// - Перевести до нижнього регістру настипні стрінгові значення
//       'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
const string1Upper =  'HELLO WORLD';
const string2Upper = 'LOREM IPSUM';
const string3upper = 'JAVASCRIPT IS COOL';
console.log(string1Upper.toLowerCase());
console.log(string2Upper.toLowerCase());
console.log(string3upper.toLowerCase());

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
//
let dirtyStr = ' dirty string   ';
console.log(dirtyStr.trim());

// let indexStart;
// let indexEnd;
// for (let i = 0; i < dirtyStr.length; i++) {
//     if(dirtyStr[i] !== ' '){
//         indexStart = i;
//         break;
//     }
// }
// for (let i = dirtyStr.length-1; i >=0 ; i--) {
//     if(dirtyStr[i] !== ' '){
//         indexEnd = i+1;
//         break;
//     }
// }
// let cleanStr = dirtyStr.substring(indexStart,indexEnd);
// console.log(cleanStr);


// - Напишіть функцію stringToArray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
//     let arr = stringToArray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']

let str = 'Ревуть воли як ясла повні';
const array = (arr) => arr.split(' ');
console.log(array(str));

// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.

let arrayNum = [10,8,-7,55,987,-1011,0,1050,0];
console.log(  arrayNum);
 const stringArray = arrayNum.map(value => `${value}`);
console.log(stringArray);

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
// let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]
let numsArray = [11,21,3,34,100];
const  sortNums = (nums , direction) =>{
   const sort = nums.sort((a,b) =>{
        if(direction === 'ascending') return a - b;
        else return b-a;
    })
    console.log(sort);
}
sortNums(numsArray,'ascending');
sortNums(numsArray,'descending');

// //- є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
//  -- відсортувати його за спаданням за monthDuration
 const sortedArr  =  coursesAndDurationArray.sort((a,b) => b.monthDuration - a.monthDuration);
console.log(sortedArr);

//  -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
const  filtered = coursesAndDurationArray.filter(value=> value.monthDuration > 5);
console.log(filtered);

//  -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}
const  mapFunc = coursesAndDurationArray.map((value,index )=> {
    return { id:index+1,...value};
})
console.log(mapFunc);

//  =========================
//  описати колоду карт (від 6 до туза без джокерів)
//  const card ={
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//     value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }
const cardSuit = ['spade', 'diamond','heart', 'clubs'];
const value = [6,7,8,9,10,'ace','jack','queen','king','joker'];

let cards = cardSuit.reduce((acc , card) => {

    value.forEach(item=>{
        let color = (card === 'heart' || card === 'diamond')?'red':'black';
        acc.push({
            cardSuit: card,
            value: item,
            color: color
        })
    })
    return acc
} ,[ ]);
console.log(cards);

function searchCard(arr, callback){
    arr.forEach(item =>{
        if(callback(item)){
            console.log(item);
        }
    })
}
//  - знайти піковий туз
searchCard(cards , (item) => item.cardSuit === 'spade' && item.value === 'ace')
//  - всі шістки
searchCard(cards, (item) => item.value === 6);
//  - всі червоні карти
searchCard(cards, (item) => item.color === 'red');
//  - всі буби
searchCard(cards , (item) => item.cardSuit === 'diamond');
//  - всі трефи від 9 та більше
searchCard(cards,(item) =>  item.cardSuit === 'clubs'&& item.value !== 6 && item.value !== 7 && item.value !== 8 )

// =========================
//
// Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//     diamonds:[],
//     hearts:[],
//     hearts:[],
// }
const suitsOfCards = cards.reduce((acc, card ) =>{

    if (acc.hasOwnProperty(card.cardSuit)) {
        acc[card.cardSuit].push(card);
    } else {
        acc[card.cardSuit] = [card];
    }
    return acc;

},{});
console.log(suitsOfCards);

// =========================

///  взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray

let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules:['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'QA/QC'],
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];
const filter = function (arr, callback){
    let newArr =[];
    for (const item of arr) {
        item.modules.forEach((itemKey) =>{
            if(callback(itemKey)){
                newArr.push(item);
            }
        })
    }
    return newArr;
}
// --написати пошук всіх об'єктів, в який в modules є sass
console.log(filter(coursesArray,  (itemKey) =>{
    return itemKey === 'sass'
}));
// // --написати пошук всіх об'єктів, в який в modules є docker
console.log(filter(coursesArray,(itemKey) =>{
    return  itemKey === 'docker'
}));



