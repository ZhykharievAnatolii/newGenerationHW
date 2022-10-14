"use strict"

// Потім хочу масив назв книг які були зроблені у 20 сторіччі, та окремо масив назв книг у 21 сторіччі.

// const genres={
//     philosophy:0,
//     novel:0,
//     comics:0,
// };
// arrBookStore.forEach((item)=>{
//     genres[item.genre]=+genres[item.genre]+1
//     console.log(item.genre,genres[item.genre])
// })
// console.log(genres);
//
// let twentyCenturyBooks=arrBookStore.filter((book)=>{
//     return book.year<=1999
// }).map(book=> book.name);
// console.log(twentyCenturyBooks);
// let twentyOneCenturyBooks=arrBookStore.filter((twentyCenturyBooks)=>{
//     return twentyCenturyBooks.year>=2000
// });


// const numbers=[12,11,10,1,2,5,6,7,4,5,6,7,8];
// -вернем массив только четных чисел
console.log(numbers.filter((number)=>{return number %2===0;}));
// -вернем массив только не четных чисел
console.log(numbers.filter((number)=>{return number %1===0;}));


// const arr=[ `Bohdan`, `Anatolii`, `Yura`, `Kirill`];
// arr.push(`Kyka`);
// arr.unshift(`Kaka`);
// arr.shift();
// arr.pop();
// arr.splice(0,0,`Kys`,`Pis`);
// arr.length;
// const arrCopy=arr.slice();
// arrCopy===arr
// false
// arr.forEach((name)=>{console.log(name)});
// // for(let index=0;index<arr.length;index++){console.log(index)};- так работает  forEach под капотом
// for(let index=0;index<arr.length;index++){console.log(arr[index])};
// function forEach(arr,func){
//     for(let index=0;index<arr.length;index++){func(arr[index])}};
// forEach(arr,console.log);

// index+=1 === =index++

const massiv=[`anatolii`,`bohdan`,`vasya`];
massiv.map((name)=>name.toUpperCase());
massiv.forEach((name)=>console.log(name));
const result=massiv.filter((name)=>name.includes(`a`));

function map(arr,func){
    const mappedArray=[];
    for(let index=0;index<arr.length;index++){
        const result= func(arr[index])
    mappedArray.push(result);
    }
    return mappedArray;};
map(arr,(item)=>{ return item.toLowerCase();});
const students=[
    {
        name:`Will`,
        age:14,
        money:123,
    },
    {
        name:`Bill`,
        age:17,
        money:12,
    },
    {
        name:`Kill`,
        age:19,
        money:113,
    },
    {
        name:`Kirill`,
        age:12,
        money:173,
    }
];

// const newArray=students.filter((student)=>
// {return student.age>=15
// });
// const newArrayTwo=students.filter((element)=>
// {return element.name
// });
// const kill=students.filter((element)=>{
//     return element.name===`Kill`
// });
// const kill=students.find((element)=>{
//     return element.name===`Kill`
// });
// let total=0;
// students.forEach((student)=>{total=total+student.money;});
// students.reduce((accumulator,currentValue,currentIndex,array)=>{
// return accumulator+currentValue.money;
// }, 0);
const summ=students.reduce((accumulator,currentValue,currentIndex,array)=>{
    return accumulator+currentValue.money;
}, 0);
// const numbers=[12,11,10,1,2,5,6,7,4,5,6,7,8];
// const totalSum=numbers.reduce((accum,index)=>{return accum+index});
// const totalSum=numbers.reduce((accum,index)=>{return accum+index},0);
const numbers=[12,2,10,1,2,5,6,7,4,5,6,7,8];
// const summ=students.reduce((accumulator,currentValue,currentIndex,array)=>{
//     if (currentValue%2===0){
//         return accumulator+currentValue;
//     }
//     return accumulator
// }, 0);
// const maxSum=numbers.reduce((accumulator,currentValue,currentIndex,array)=>{
//     return Math.max(accumulator,currentValue);
// }, -Infinity);---для поиска максимального числа

const strings=[`Will`,`Bohdan`,`Yulia`,`Olena`,`Yura`,`Kirill`,`Bill`];
// с помощью reduce вернуть строки, только те, что имеют более 4х символов
const result= strings.reduce((accum,current)=>{
    if(current.length>4){
        accum.push(current)
    }
    return accum;
},[]);

const books=[
    {
        name:`test`,
        genre:`Horror`,
    },
    {
        name:`test 1`,
        genre:`Horror`,
    },
    {
        name:`test 2`,
        genre:`fantasy`,
    },
    {
        name:`testor`,
        genre:`comedy`,
    },
    {
        name:`testr`,
        genre:`comedy`,
    },
    {
        name:`testit`,
        genre:`comedy`,
    },
];
const mostPopular=books.reduce((accum,book)=>{
    if(book.genre in accum){
    accum[book.genre]+=1
    }
    else {
        accum[book.genre]=1
    }
    return accum
});
// let genre=``;
// for (let key in mostPopular){
//
// }
Object.entries(mostPopular);
Object.entries(mostPopular).reduce((acum,current)=>{


})
const str=`Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum`
str.split(` ,`);
strs.join(`, `);
const stin=`Lorem Ipsum is simply dummy text of fuck and again fuck may be agan fuck`;
// stin.split(` `);- выведет все отдельные слова в массив
// const filterBadWord=stin.split(` `).filter((word)=>{!word.toLowerCase().includes(`fuck`)});
const filterBadWord=stin.split(` `).filter((word)=>!word.toLowerCase().includes(`fuck`)).join(` `);
const str=`Lorem Ipsum is simply shit hell dummy text of fuck and again fuck may be agan fuck`;
const restrictedWorlds=[`fuck`,`hell`,`shit`];
const filteredString=str.split(` `).filter((word)=>restrictedWorlds.includes(word.toLowerCase())).join(` `);