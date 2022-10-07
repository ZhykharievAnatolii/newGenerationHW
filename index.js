"use strict"
// const obj={
//     adress:`haharina`,
//     street:24,
//     house:2,
//     name:`Anatolii`,
// };
// // for(let propertyName in obj){
// //     console.log(propertyName);
// // };--------------------- так выводим ключи(свойства)
// // for(let propertyName in obj){
// //     console.log(obj[propertyName]);}---------так выводим значения
// // for(let propertyName in obj){
// //     console.log(propertyName,obj[propertyName]);}---- а так выводим все вместе
// const arr=[];
// const names=[`Bohdan`,`Yulia`,`Kirill`];
// while(true){
//     const name=prompt(`Please enter your name`);
//     if(name===`123`){
//         continue;
//     }
//     if(name===`break`|| name===null){
//         break;
//     };
//     names.push(name);
// }
// names[1];
// const books=[
//     {name:`It`,
//         author:`Steven King`},
//     {name:`Lorem`,
//         author:`John Doe`},];
// books.push({name:`Kys`,author:`Kit`});
// function createBook(name, author) {
//     return {
//         name,
//         author,
//     }
//
// };
// books.push(createBook(`My another book`, `Another author`));

// books[0];
// books[0].author;
// for(let index in names){
//     console.log(names[index])
// };
// for(let index in names){
//     console.log(names[index])
// };
// names[3]=`Yura`;
// names[names.length]=`Anatolii`;
// names[names.length]={name:`Fuck`,
//     author:`Off`
// };
// names.push(`Volli`);
// numbers.push(2,2,23,4,5,6,7,2,5,7,8,1);
// const names=[`Bohdan`,`Yulia`,`Kirill`];
// names.unshift(`Elka`,`Palka`);
// const students=[`Oleksii`,`Olena`];
// // const mergedArr=[];
// // mergedArr.concat(students,names);
// const mergedArr=names.concat(students);
// const nam=[`alina`,`yasya`,`vasya`];
// // nam.pop();удалить один елемент в конце
// // nam.push(`kyka`);-добавить с конца
// // nam.unshift(`kaka`);добавить с начала
// // nam.concat(`kyka kaka`); добавить в конец, любые данные
// // nam.shift(); удалить один елемент в начале
// nam.indexOf(`yasya`);
// for(let genre in arrBookStore){
//     const genreOfBooks=[ arrBookStore[genre]]
//
// }
// for(let index=0;index<arrBookStore.length;index++ ){
//     console.log(arrBookStore[index])
// }
// Так от, я хочу щоб ви вивели у консоль масив назв книг, у яких один жанр, якого більше всього в вашому масиві,
// arrBookStore.forEach(function (genre) {

// arr.forEach(function(item, i, arr) {
//     alert( i + ": " + item + " (массив:" + arr + ")" );
// });
// const mostPopularBooks=[];
// for(let genres in arrBookStore){
//
// }
// for(let index=0;index<names.length){
//     console.log(names[names])};
// for(let name in names){ console.log(names[name])};
// function calc(a,b, func) {
//     return func(a, b)
// };
// function sum(a,b){
//     return a+b
// };
// calc(1,4,sum());

// Зробити масив з мінімум 10 об'єктами. В кожному об'єкті має бути властивості.
//     name назва книги, author автор, genre жанр та year рік, зробити просто його числом.
//     Зробити, щоб було мінімум по 3 книги одного автора, та три книги одного жанру.
//     Так от, я хочу щоб ви вивели у консоль масив назв книг, у яких один жанр, якого більше всього в вашому масиві,
//     та щоб вони були у верхньому регістрі.
//     Потім хочу масив назв книг які були зроблені у 20 сторіччі, та окремо масив назв книг у 21 сторіччі.
//     Тобто на виході маю побачити три змінних у яких будуть ці масиви

const arrBookStore=[
    {
        name:`The Stranger`,
        author :`Albert Camus`,
        genre:`novel`,
        year:1942,
    },
    {
        name:`The Name of the Rose`,
        author :`Umberto Eco`,
        genre:`novel`,
        year:1980,
    },
    {
        name:`The Magic Mountain`,
        author :`Thomas Mann`,
        genre:`novel`,
        year:1924,
    },
    {
        name:`The Second Sex`,
        author :`Simone de Beauvoir`,
        genre:`philosophy`,
        year:1949,
    },
    {
        name:`The Blue Lotus`,
        author :`Hergé`,
        genre:`comics`,
        year:1936,
    },
    {
        name:`Numero Zero`,
        author :`Umberto Eco`,
        genre:`novel`,
        year:2015,
    },
    {
        name:`The Prague Cemetery`,
        author :`Umberto Eco`,
        genre:`novel`,
        year:2010,
    },
    {
        name:`The Mysterious Flame of Queen Loana`,
        author :`Umberto Eco`,
        genre:`novel`,
        year:2004,
    },
    {
        name:`The Island of the Day Before`,
        author :`Umberto Eco`,
        genre:`novel`,
        year:1994,
    },
    {
        name:`Foucault's Pendulum`,
        author :`Umberto Eco`,
        genre:`philosophy`,
        year:1998,
    },
]
// const twentyCenturyBooks=arrBookStore.map((year)=>{
//     if (year<==1999){
//         return twentyCenturyBooks++
//     }
// })

// Потім хочу масив назв книг які були зроблені у 20 сторіччі, та окремо масив назв книг у 21 сторіччі.

const genres={
    philosophy:0,
    novel:0,
    comics:0,
};
arrBookStore.forEach((item)=>{
    genres[item.genre]=+genres[item.genre]+1
    console.log(item.genre,genres[item.genre])
})
console.log(genres);





let twentyCenturyBooks=arrBookStore.filter((book)=>{
    return book.year<=1999
}).map(book=> book.name);
console.log(twentyCenturyBooks);
let twentyOneCenturyBooks=arrBookStore.filter((twentyCenturyBooks)=>{
    return twentyCenturyBooks.year>=2000
});


// console.log((twentyCenturyBooks)=>{
//     return twentyCenturyBooks.year<=1999
// });
console.log((twentyOneCenturyBooks)=>{
    return twentyOneCenturyBooks.year>=2000
});
console.log(students.filter((student)=>{return student.grade>=70}));
console.log(students.map((student)=>{
    return student.name
}));

// function callback(genre){
//     console.log(genre)
// };
function callback(item,index,arr){ console.log(item,index)};
const arrOfNames=[
    `anatolii`,`Ivan`,`Peter`,`Steven`,`Kelso`
];

arrOfNames.forEach(callback);
// arrOfNames.forEach((item)=>{
//     console.log(item)
// })
//

// function forEach(arr,callback) {
//     for(let index=0; index<arr.length;index++){
//         // console.log(arr[index])
//         let list=arr[index];
//     }
// }

function forEach(arr,callback) {
    for(let index=0; index<arr.length;index++){
        console.log(arr[index], index)
    }
}
forEach(arrOfNames);
arrOfNames.map((names)=>{
    return names.toUpperCase()
});
arrOfNames.map((name)=>{
    if(name===`anatolii`)
{return name.toUpperCase()
}
    return name});
const newArr=arrOfNames.map((name)=>{
    if(name===`anatolii`)
    {return name.toUpperCase()
    }
    return name});

const numbers=[12,11,10,1,2,5,6,7,4,5,6,7,8];
console.log(numbers.map((num)=>{return num*2}));


const students=[
    {name:`Anatolii`,
        grade:80,
    },
    {name:`Yura`,
        grade:60,},
    {name:`Julia`,
        grade:70,},
    ];
console.log(students.map((student)=>{
    return student.name
}));
console.log(students.filter((student)=>{return student.grade>=70}));

