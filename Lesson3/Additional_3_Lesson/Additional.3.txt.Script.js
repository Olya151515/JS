// //1. Створити пустий масив та :
//        a. заповнити його 50 парними числами за допомоги циклу.
//        b. заповнити його 50 непарними числами за допомоги циклу.
//        c. Заповнити масив 20ма рандомними числами. (Google: Generate random number JS)
//        d. Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732 (Google: Generate random number JS)


// // a. заповнити його 50 парними числами за допомоги циклу.
let arr1 =[];
let a = 0;
for (let i = 0; i < 50; i++) {
    a+=2;
    arr1[i] = a;
}
console.log(arr1);
//  //   b. заповнити його 50 непарними числами за допомоги циклу.
let b = -1;
for (let i = 0; i < 50; i++) {
    b+=2;
    arr1[i] = b;
}
console.log(arr1);

// //  c. Заповнити масив 20ма рандомними числами. (Google: Generate random number JS)

for (let i = 0; i < 20 ; i++) {
    arr1[i] =Math.floor( Math.random() * 50);
}
console.log(arr1);

// // d. Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732 (Google: Generate random number JS)

for (let i = 0; i < 20; i++) {
    arr1[i] = Math.floor( Math.random() * 732) + 8;
}
console.log(arr1);

// // 2. Вивести за допомогою console.log кожен третій елемен

for (let i = 0; i < arr1.length; i+=3) {
    console.log(arr1[i]);
}
// // 3. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним.
for (let i = 0; i < arr1.length; i+=3) {
    if(arr1[i] % 2 === 0){
        console.log(arr1[i]);
    }
}
//  4. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним та записати їх в новий масив

let arrNew= [];
for (let i = 0; i < arr1.length; i+=3) {
    if(arr1[i] % 2 === 0){
        arrNew[i] = arr1[i];
        console.log(arrNew[i]);
    }
}

//  5. Вивести кожен елемент масиву, сусід справа якого є парним
//   EXAMPLE: [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ] -> Має бути виведено 1, 9, 56

for (let i = 0; i < arr1.length; i++) {
    if(arr1[i+1] % 2 === 0){
        console.log(arr1[i]);
    }
}
//  6. Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки.
//  Обрахувати середній чек.

let arrCost= [100,250,50,168,120,345,188];
let sum= 0;
for (let i = 0; i < arrCost.length; i++) {
    sum += arrCost[i];
}
console.log(sum/arrCost.length);

