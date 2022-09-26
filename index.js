"use strict"
// function calcSum(from,to) {
//     let sum = 0;
//     while (true) {
//         const number = +prompt(`Please enter your number`);
//
//         if (!isNaN(number))
//
//             if (number >= from && number <= to) {
//                 sum = sum + number
//             } else {
//                 return sum;
//             }
//         ;
//     }
// }
// const result=calcSum(4,20)
// console.log(result)
// const str=`Anatolii`
// str.toUpperCase()
// // str[1].toLowerCase()
// function capitalazeWord(word){
//     return`${word[0].toUpperCase()}${word.slice(1).toLowerCase()}`
// }
// const str=`   Anatolii     `;
// str.trim()

// Функция очистки строки от пробела


// function middleTrim(str){
//     for(let index=0;index<str.legth;index++){
// console.log(index)
//     }
// }
// function middleTrim(str){
//     let result=``;
//     for( let index=0;index<str.length;index++){
//         const char=str[index];
//         if(char===` `){
//             continue;
//         }
//         result=`${result}${char}`
//         console.log(str[index]);
//
//     }
//     return result;
// }
// for (let i=0;i<3;i++){
//     console.log(i)
// }
// const str=`123`
// str.length
// Треба зробити функцію, яка не буду приймати аргументів.
//     В ній ви маєте запитати користувача імейл і пароль
// Якщо імейл не дорівнює admin@test.io, то виводьте текст невірний імейл
// Якщо пароль не дорівнює admin1234, то маєте вивести невірний пароль.
//     Якщо все підходить, пишите успішний логін
// Важливо, що ми перевіряємо пароль тільки в тому випадку, якщо імейл був вірний, інакше навіть не повинні дійти до цього кроку
// const correctEmail=`admin@test.io`;
// const correctPassword=`admin1234`;
// const checkEmail=()=>{
//     const email=prompt(`please enter your email`);
//     if(email!==correctEmail){
//         alert(`невірний імейл`)
//     }
//     const password=prompt(`Please enter your password`);
//     if(password!==correctPassword){
//         return `невірний пароль`
//     }
//     if(email===correctEmail&&password===correctPassword){
//         return `Your login correct`
//     }
// }
// const str=`string`;
// function sum(a,b){
//     return a+b;
// }
// str.toUpperCase(str)
//
// sum(1,2);
// let number=`1tg8yhi`;
// // // function system (){
// // //     return +number.toString(2)
// // // }
// // parseInt(number,2);

// Напишите функцию ucFirst(str), возвращающую строку str с заглавным первым символом
// let str=`anatolii`;
// function ucFirst(str) {
//     if (!str) return str;
//
//     return str[0].toUpperCase() + str.slice(1);
// }
//
// alert( ucFirst("anatolii") )

// Создайте функцию truncate(str, maxlength), которая проверяет длину строки str и,
//     если она превосходит maxlength, заменяет конец str на "…",
//     так, чтобы её длина стала равна maxlength.
//
//     Результатом функции должна быть та же строка, если усечение не требуется,
//     либо, если необходимо, усечённая строка.


// function truncate(str, maxlength) {
//     const maxlength=`Создайте функцию`;
//     if(str>maxlength){
//         return str.slice(maxlength)
//     }
// }
// let str=`Создайте функцию truncate(str, maxlength), которая проверяет длину строки str и,`
// function truncate(str, maxlength) {
//     return (str.length > maxlength) ?
//         str.slice(0, maxlength - 1) + '…' : str;
// }
// Есть стоимость в виде строки "$120". То есть сначала идёт знак валюты, а затем – число.
//     Создайте функцию extractCurrencyValue(str),
//     которая будет из такой строки выделять числовое значение и возвращать его.
// let str="$120";
// function extractCurrencyValue(str){
// return +str.slice(1)
// }
// extractCurrencyValue(str);
