// "use strict"
// const firstNumber=+prompt(`Please enter your first number`);
// const secondNumber=+prompt(`Please enter your first number`);
// const result=firstNumber+secondNumber;
// alert(result)
// const firstNumber= Number(prompt(`Please enter your number`));
// confirm(`Are you sure?`);
// const secondNumber=+prompt(`Please enter your second number`);
// confirm(`Are you sure?`);
// const result=firstNumber+secondNumber;
// const message=`It is your result = ${result}`
// alert(message);
// const radius=+prompt(`Please enter a circle radius`);
// confirm(`Are you sure?`)
// const result=radius*radius*Math.PI;
// const addedResult=`Your result is ${result}`
// alert(addedResult)
// const firstNumber=+prompt(`Please entre your first number`);
// const operation=+prompt(`Please entre your operation`);
// const number=3;
// const age=prompt(`Please enter your age`);
// confirm(`Are you sure?`)
// if (age===null){
//     alert(`Was clicked button cancel`)
// }
// if(+age >=18){
//     alert('You are old person');
// }
//
// if (+age<=18){
//     alert(`You so young`)
// }


// const firstNumber=+prompt(`Enter your first number`);
// // confirm(`Are you sure?`);
// // if(firstNumber===null){
// //     alert(`Was clicked cancel button`)
// // };
// // const operator= prompt(`Enter your operator + - / *`);
// // confirm(`Are you sure?`);
// // if(operator===null){
// //     alert(`Was clicked cancel button`)
// // };
// // const secondNumber=+prompt(`Enter your second number`);
// // if(secondNumber===null){
// //     alert(`Was clicked cancel button`)
// // };
// // const checkNumber=(num)=>{return !Number.isNaN(num)};
// // const result=()=>{
// //     const isFirstNumber= checkNumber(firstNumber);
// //     const isSecondNumber= checkNumber(secondNumber);
// //     const isAction=(operator==="*")||(operator==="/")||(operator==="+")||(operator==="-");
// //     if(isFirstNumber&&isSecondNumber&&isAction){
// // if (operator==="*"){
// //     return firstNumber*secondNumber}
// //
// // else if (operator==="/"){
// //     return firstNumber/secondNumber}
// // else if (operator==="+"){
// //     return firstNumber+secondNumber}
// // else if (operator==="-"){
// //     return firstNumber-secondNumber}
// // else {
// //         return `This operation doen't exist`
// //     }
// // }}
// // alert(result());

// const email=prompt(`Please type your correct email`);
// const password=prompt(`Please type your correct password`);
// const correctEmail=` admin@test.io`;
// const correctPassword=`admin1234`;
// const correctResultEmail=`Your email is correct`;
// const correctResultPassword=`Your email is not correct`;
// const notCorrectEmail=`Your email is not correct`;
// const notCorrectPassword=`Your password is not correct`;
// const result=()=>{
//     if (email===correctEmail){
//         return correctResultEmail}
//         else if (email!==correctEmail){
//             return notCorrectEmail
//         }
//     if (password===correctPassword){
//         return correctResultPassword}
//     else if (password!==correctPassword){
//             return notCorrectPassword
//         }
// }
// alert(result())
// const age=prompt(`Enter your age`);
// const number=Number(age);
// if (age===null){
//     alert(`Was clicked button cancel`)
// }
// else if (number<=8){
//     alert(`Young`)
// }
// else if (number>=18){
//     alert(`old man`)
// }
// else alert(`Value is nit correct`);
// Треба зробити функцію, яка не буду приймати аргументів.
//     В ній ви маєте запитати користувача імейл і пароль
// Якщо імейл не дорівнює admin@test.io, то виводьте текст невірний імейл
// Якщо пароль не дорівнює admin1234, то маєте вивести невірний пароль.
//     Якщо все підходить, пишите успішний логін
// Важливо, що ми перевіряємо пароль тільки в тому випадку, якщо імейл був вірний, інакше навіть не повинні дійти до цього кроку

// const email=prompt(`Please enter your email`);
// const correctEmail=`admin@test.io`;
// const password=prompt(`Please enter your password`);
// const correctPassword=`admin1234`;
// const check=()=>{
//     if(email!==correctEmail){
//         alert(`Your email isnt correct try again`)}
//     else if(password!==correctPassword) {
//             alert(`Your password isnt correct? try again`)
//         }
//         else if(email===correct&&Emailpassword===correctPassword) {
//                 alert(`Your login is sucsessful`)
//             }}


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
// const isAdmin= confirm(`You are admin?`);
// isAdmin ? alert(`Hello admin`):alert(`Your are not`);

// let anotherNumber=34;
// if(anotherNumber>20|| anotherNumber>21){ alert(`Your number i small`)}
// else if(anotherNumber<15|| anotherNumber<14){
//     alert(`cool`)
//     }

// Напишіть умову if, щоб перевірити, чи значення age НЕ знаходиться між 14 та 90 включно.
//     Створіть два варіанти: перший з оператором НЕ !, другий — без нього.
// if (!(age >= 14 && age <= 90))
// if (age < 14 || age > 90)

// Напишите код, который будет спрашивать логин с помощью prompt.
//     Если посетитель вводит «Админ», то prompt запрашивает пароль,
//     если ничего не введено или нажата клавиша Esc – показать «Отменено»,
// в противном случае отобразить «Я вас не знаю».
// Пароль проверять так:
//     Если введён пароль «Я главный», то выводить «Здравствуйте!»,
// Иначе – «Неверный пароль»,
// При отмене – «Отменено».

// let userName = prompt("Кто там?", '');
//
// if (userName === 'Админ') {
//
//     let pass = prompt('Пароль?', '');
//
//     if (pass === 'Я главный') {
//         alert( 'Здравствуйте!' );
//     } else if (pass === '' || pass === null) {
//         alert( 'Отменено' );
//     } else {
//         alert( 'Неверный пароль' );
//     }
//
// } else if (userName === '' || userName === null) {
//     alert( 'Отменено' );
// } else {
//     alert( "Я вас не знаю" );
// }
// let count=0;
//
// while(count<5){
// console.log(count);
// count=count+1;
// }
// let count=1;
// let result=``;
// while (count<=5){
//     const word=prompt(`Enter your word`);
//     result=`${result} ${word}`;
//     count=count+1;
// }
// let count=6;
// let result=``;
// do {
//     const word=prompt(`Enter your word`);
//     if(word!==`fuck`){
//         result=`${result} ${word}`
//     }
//     count+=1
// }while (count<=5)
// // count=count+1
// // count++
// // console.log(result)
// for(let counter=1;counter<=10;counter=counter+1){
// console.log(counter)
// }
let result=``;
for(let counter=1;counter<=10;counter=counter+1){
    const word=prompt(`Enter your word`);
    if(word!==`fuck`){
        break;}
    {result=`${result} ${word}`
    }
// console.log(counter)
 }