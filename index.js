"use strict"
// Треба зробити функцію, яка не буду приймати аргументів.
//     В ній ви маєте запитати користувача імейл і пароль
// Якщо імейл не дорівнює admin@test.io, то виводьте текст невірний імейл
// Якщо пароль не дорівнює admin1234, то маєте вивести невірний пароль.
//     Якщо все підходить, пишите успішний логін
// Важливо, що ми перевіряємо пароль тільки в тому випадку, якщо імейл був вірний, інакше навіть не повинні дійти до цього кроку

// const correctEmail=`admin@test.io`;
// const correctPassword=`admin1234`;
// const loginUser=()=>{
//     const email=prompt(`Please enter your email`)
//     if(email!==correctEmail){
//         return(`your email ist correct`)
//     }
//     const password=prompt(`Please enter your password`)
//     if(password!==correctPassword){
//         return(`your password ist correct`)
//     }
//     else (email===correctEmail&&password===correctPassword){
//         alert(`Your login sucsessful`)
//     }
// }
// loginUser()
// const correctEmail=`admin@test.io`;
// const correctPassword=`admin1234`;
// const loginUser=()=>{
//     const email=prompt(`Please enter your email`);
//     if(email!==correctEmail){
//         return(`невірний імейл`)
//     }
//     const password=prompt(`Please enter your password`)
//     if(password!==correctPassword){
//         return(`невірний пароль`)
//     }
//     else if(correctEmail===`admin@test.io`&&correctPassword===`admin1234`){
//         alert(`your login sucsses`)
//     }
// }
// loginUser()
// const correctEmail = `admin@test.io`;
// const correctPassword = `admin1234`;
// const loginUser = () => {
//     const email = prompt(`Enter your email`);
//     if (email === correctEmail) {
//         const password = prompt(`Enter your password`);
//         if (password === correctPassword) {
//             alert(`Your login is sucsessful`)
//         } else {
//             alert(`Your password incorrect`)
//         }
//     } else {
//         alert('Your email is incorrect')
//     }
// }
// loginUser();

// function declaration

// calcSum();
// function CalcSum(){
// alert(`hi`)
// }
// const name=`Anatolii';

// const firstNumber=+prompt(`Please enter your first number`);
// const secondNumber=+prompt(`Please enter your second number`);
// function calcSum(first,second){
//     console.log(first+second);
// }
// calcSum(3,2);

// Перепишите функцию, используя оператор '?' или '||'
// function checkAge(age) {
//     if (age > 18) {
//         return true;
//     } else {
//         return confirm('Родители разрешили?');
//     }
// }
// Перепишите функцию, чтобы она делала то же самое, но без if, в одну строку
// function checkAge(age){
//
// }
// function checkAge(age) {
//     return (age > 18) ? true : confirm('Родители разрешили?');
// }
// function checkAge(age) {
//     return (age > 18) || confirm('Родители разрешили?');
// }

// Напишите функцию min(a,b), которая возвращает меньшее из чисел a и b.
//     function min(a,b){
//     if(a<b){
//         return a
//     }
//     else if(b<a){
//         return b
//     }
//     }
//     min()
// function askUser(){
//     const firstNumber=+prompt(`Please enter your firs number`);
//     const operation=prompt(`Please enter your operation`);
// if (operation===``){
//     return ;
// }
//     if(operation==='*'){
//         return firstNumber*2
//     }
//     if(operation===`/`){
//         return (operation/2)
//     }
//     return `Incorrect value`
// }
// const result=askUser();
// console.log(result)

// Function EXPRESSION
//  const getCurrency=function(currency,price){
//     return`${currency}${price}`
//
//  }

// ARROW Function
// const currency2=(arg1,arg2)=>{
//
// }
// const calcSum=(a,b)=>a+b
// const calcSumExp=(a,b){
//     return a+b;
// }
// function filterWorld(world){
//
//     let accumulator=``;
//     while(true){
// const askedWorld=prompt(`Enter your world`);
// if(askedWorld===`break`){
//     break
// }
// if(askedWorld===world){
//     continue;
// }
//         accumulator=`${accumulator},${askedWorld}`
//     }
//     return accumulator
// }
// const result=filterWorld(`fuck`);
// console.log(result)

function calcSum(from,to) {
    let sum = 0;
    while (true) {
        const number = +prompt(`Please enter your number`);
        if (!isNaN(number))

            if (number >= from && number <= to) {
                sum = sum + number
            } else {
                return sum;
            }
        ;
    }
}
const result=calcSum(4,20)
console.log(result)