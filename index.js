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
const age=prompt(`Enter your age`);
const number=Number(age);
if (age===null){
    alert(`Was clicked button cancel`)
}
else if (number<=8){
    alert(`Young`)
}
else if (number>=18){
    alert(`old man`)
}