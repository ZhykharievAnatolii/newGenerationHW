// "use strict"
// function calcMax() {
//     let userAnswer = ``;
//     let number = 0;
//     while ((userAnswer !== nulluserAnswer) !== `break`) {
//         userAnswer = prompt(`enter your number`);
//         if (isNaN(+userAnswer)) continue;
//         result = Math.max(result, +userAnswer);
//     }
//     return result;
// }
// const checkExit=(str)=>str!==null&&str!==`break`
// function capitalizer(){
//     let userAnswer=``;
//     let result=``;
//     while(checkExit(userAnswer)){
// userAnswer=prompt(`Enter your word`);
// result=`${result}\n${userAnswer[0].toUpperCase()}${userAnswer.slice(1).toLowerCase()`}
//     }
//     return result
// }
// console.log(capitalizer())
// function draw(size=10,symbol=`#`){
//     let result=``;
//     for(let i=0;i<size;i++) {
//         for (let j = 0; j < size; j++) {
//             result = `${result}${symbol}`;
//         }
//         result = `${result}\n`;
//     }
//         return result;
//     }
//     console.log(draw)
// const toCapitalize=(str)=>`${result}\n${str[0].toUpperCase()}${str.slice(1).toLowerCase()}`;
// const reducer=(action,string)=>{
// if (action===`uppercase`){
//     return string.toUpperCase();
// }
//     if (action===`lowercase`){
//         return string.toLowerCase();
//     }
//     // if (action===`capitalize`){
//     //     return string.toLowerCase();
//     // }
// }
// reducer();
// Напишите функцию ucFirst(), возвращающую строку с заглавным первым символом.
// const name=prompt(`please enter your name`);
// // function ucFirst() {
// //     return `${name[0].toUpperCase()}${name.slice(1)}`;
// // }
// // ucFirst();
//
// const people={
// firstName:`Bohdan`,
//     lastName:`Onatsky`,
// }
// const obj={}
// // const obj2={}
// // obj===obj2
// // false
// // const obj2=obj
// // obj===obj2
// // true
// function getName(obj){return obj.name}
// getName({name:`Anatolii`})
// getName.age=25;
// const obj={
//     adress:{
//         street:24,
//         house:2,
//     },
//     name:`Anatolii`,
// }
// obj.adress.street;
// obj['name'];
//
// delete obj.name;
// const name=`Anatolii`;
// const students={
//     [name]:{
//         admin:false,}
// }
// const firstName=`Anatolii`;
// const lastName=`Zhykhariev`;
// const anatoliiZhykhariev={
//     firstName:firstName,
//     lastName:lastName,
// };
// `firstName` in anatoliiZhykhariev
// for(let key in anatoliiZhykhariev){
//     console.log(key)}
// for(let key in anatoliiZhykhariev){
//     console.log(anatoliiZhykhariev[key])}
// Можно так

// const anatoliiZhykhariev={
//     firstName,
//     lastName,
// }
// const str=`test string`;
// for (let symb of str){
//     console.log(symb);}
function setUsers() {
    const users = {};
    let isConfirm = true;
    while (isConfirm) {
        const name = prompt(`Please enter your name`);
        const age = prompt(`enter your age`);
        users[name] = {
            age: age,
        }
        isConfirm = confirm(`Continue?`);
    }
    return users
}
console.log(setUsers())
