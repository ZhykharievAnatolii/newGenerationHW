// "use strict"
// const str=`Anatolii`
// str.toUpperCase()
// // str[1].toLowerCase()
// function capitalazeWord(word){
//     return`${word[0].toUpperCase()}${word.slice(1).toLowerCase()}`
// }
// const obj={};
// const obj2={
//     name:`John`,
//     lastName:`Doe`,
// };
// const post={
//     firstName:`John`,
//     lastName:`Doe`,
//     number:63470480945,
// }
// console.log(post.sender.firstName);
// const obj={};
// const obj2=obj;
// function modifyObject(obj){
//     obj.firstName=obj.firstName.toUpperCase()};
// const obj={
//     firstName:`Anatolii`,
// }
// modifyObject(obj);
// const object={
//     firstName:`John`,
//     LastName:`Doe`,
//     age : 24,
//     isAdmin:`false`
// };
// for(let key in object){
//     console.log(key)
// };
// // ----для того, чтобы получить доступ к свойствам

// for(let key in object){
//     console.log(object[key])
// };
// // -----Для того, чтобы получить доступ к значению

// const copiedObject={
//
// };
// for(let key in object){
//     console.log(copiedObject[key]=object[key])
// };
// - способ скопировать обьект через чикл FOR IN

// copiedObject===object
// false
// function copyOpject(obj){
//     const copiedObject={};
//     for (let key in obj){
//     // console.log(key)
//     //     console.log(`KEY-${key}-value-${obj[key]}`)
//         copiedObject[key]=obj[key];
//     }
//     return copiedObject;
// }
// const obj={
//     firstName:`Anatolii`,
//     lastName:`Zhykhariev`,
//     age:34,
//     isAdmin:`true`,
// // };
// const obj={
//     firstName:`Anatolii`,
//     lastName:`Zhykhariev`,
//     age:34,
//     isAdmin:`true`,
//     adress:{
//         house:2,
//     }
// };
// // copyOpject(obj);
// // const copied=copyOpject(obj);
// const anotherObject={
//     facilityAdress:{
//         street:`Haharina`,
//         house:3,
//     },
//     numberOfHouse:56,
//
// }
// const copied=Object.assign({},obj,anotherObject)
// const first={
//     number:2,
//     street:`13`,
// };
// const second={};
// Object.assign(second,first);
// const f={
//     number:23,
// };
// const s=Object.assign({},f);
// function marry(man,woman){
//     woman.husband=man,
//         man.wife=woman;
//     return {
//         father: man,
//         mother: woman,
//     }
// };
// let family=marry({
//     name:`John`},{
//     name:`Ann`});
// const ogg={
//     firstName:`Anatolii`,
//     latName:`Zhykhariev`,
//     getFullName:function(){
//         return `${ogg.firstName} ${ogg.latName}`;
//     }
// };
// ogg.getFullName();
// ogg.firstName=`Katya`;
// ogg.getFullName();
// const newObject={
//     first:ogg.getFullName(),
//     second:23,
// }
// newObject.third=getFullName();- а вот так не работает, потому что функция обьявлена внутри обьекта, и является локальной
// а не глобальной
// const math={
//     min:(a,b)=> {a>b ? b:a},
//     max:(a,b)=> {a<b ? a:b},
//     pow:(num,power)=>{
//         return num*power
//     }
// };
// const functionOne=(q,w){
//     return q/w
// }
// const functionOne=(q,w)=>{
//     return q/w
// }
// const functionOne= function (q,w){
//     return q/w
// }
// const obje= {
//     firstName: `Bohdan`,
//     LstName: `Onatskyi`,
//     getFullName: function () {
//         return `${this.firstName} ${this.LstName}`
//     }
// }
//
// const anatolii=Object.assign({},obje);
// anatolii.firstName=`Anatolii`;
// anatolii.LstName=`Zhykhariev`;
// anatolii.getFullName();

// const getFullName=obje.getFullName;
// getFullName()
// 'undefined undefined'
//
// const studentList={
//     list: {
//         Anatolii: {
//             grade: 88,
//             attendance: 5,
//         },
//         Vasya: {
//             grade: 60,
//             attendance: 1,
//         },
//         Peter: {
//             grade: 99,
//             attendance: 3,
//         },
//         Stiven: {
//             grade: 77,
//             attendance: 4,
//         },
//         Kate: {
//             grade: 80,
//             attendance: 4.4,
//         }
//     }
// };
// function isAGradeStudents() {
//     let mystudents=``;
//     for(key in this.list){
//         console.log(key)
//     }
// }

const studentList={
    list: {
        Anatolii: {
            grade: 88,
            attendance: 5,
        },
        Vasya: {
            grade: 60,
            attendance: 1,
        },
        Peter: {
            grade: 99,
            attendance: 3,
        },
        Stiven: {
            grade: 77,
            attendance: 4,
        },
        Kate: {
            grade: 80,
            attendance: 4.4,
        }
    }
};
function isAGradeStudents() {
    let students=``;
    for(key in this.list){
        const studentData=this.list[key];
        if(studentData.grade>=90) {
            students = `${students}, ${key}`;
        }

    }
    return students
}


