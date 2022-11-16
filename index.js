'use strict'
// function anatolii(){
//
// };
// window.anatolii();
// window.navigator
// navigator.appVersion
// '5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36'
// screen
// window.screen
// window.location
// location.href
// window.location.href
// 'https://lms.ithillel.ua/groups/62a9b1cf07905d280bc039b4/lessons/62a9b1cf07905d280bc039da'
// location.host
// 'lms.ithillel.ua'
// location.href='https://google.com'- таким образом можем сделать редирект
// const paragraph=document.querySelector
// const paragraph=document.querySelector('p')-так цепляемся к параграфу, чтобы к классу, ставим точку
// const paragraph=document.querySelector('.welcomeText')
// если есть несколько елементов одинаковых, р, див, то он обратится к первому
// paragraph.parentElement
// const lin=document.querySelector(".welcomeText");
// const header=lin.parentElement
// const element=document.querySelector('p');
// element.parentElement.parentElement.parentElement.parentElement.parentElement
// element.parentElement.parentElement.parentElement.children
// document.querySelector('table')
// document.querySelectorAll('li');
// document.getElementsByClassName('newInfo');
// document.getElementById('second');
// document.body.firstElementChild.lastElementChild.lastElementChild
// const diver=document.getElementsByTagName('div')
// function User(){}
// const user=new User();
// user instanceof User;
// user instanceof Object;
// document.body
// const list= document.querySelector('p');
// list.parentElement
// list.innerText
// list.innerText='fuck of you motherfucker'
// document.querySelector('div').innerText='some strange text'
// document.querySelector('.aboutDom').innerText='12245356756453'
// const div= document.createElement('div');
// div.innerText('Hi i am Anatolii');
// const paragraph=document.querySelector('p');
// paragraph.after('div');
// paragraph.style
// paragraph.style.backgroundColor='red'
// const div=document.createElement('div');
// div.innerText('hello all');
// div.style.backgroundColor='black';
// console.log('text;;kc;s')
// const list=document.querySelector('.list')
// console.log(list, 'list');
// const render=(text)=>{
//  const item=document.createElement('li');
//  item.classList.add('item');
//  item.innerText=text;
//  list.append(item)
//
// };
// const names=[
//     'anatolii',
//     'yura',
//     'bohdan',
//     'yulia',
// ]
// names.forEach((name)=>render(name))
// list.classList
// list.className
// list.classList.add('list-modified')
// const input=document.querySelector('imput');
// document.body.style.background = 'red';
// setTimeout(() => document.body.style.background = '', 3000);
// const arr=[1,2,3,4,5,6,7,12,3,4,5,6,7];
// arr.filter((number)=>{
//     return number>5;
// })
// console.log(arr);
function renderNotification(text) {
    const list=document.querySelector('ul')
    const notification=document.createElement('li');
    notification.innerText=text;
    list.append(notification);
    return notification;

};
function renderInput(text) {
    const list=document.querySelector('.aboutDom');
    const notification=document.createElement('input');
    notification.innerText=text;
    list.append(notification);
};
function renderWelcomeText(text) {
    const list=document.querySelector('.welcomeText')
    const notification=document.createElement('div');
    notification.innerText=text;
    list.append(notification);
}
// setTimeout(()=>{
//     const notification= renderNotification('hello timeout')
//     setTimeout(()=>{
// notification.remove();
//     },5000)
// },3000)
// const item=document.querySelector('li');
// item.remove();
// console.log('Before timeout')
// setTimeout(()=>{
// console.log('timeout')
// },0);
// setTimeout(()=>{
//     console.log('timeout')
// },200);
// console.log('After timeout');
//
// console.log('start');
// setInterval(()=>{
//     console.log('interval')
// },1000)
// console.log('finish');
//
// function renderGoods(arr){ const list=document.querySelector('ul');
//     list.innerHTML='';
//     arr.forEach(({price,name,type})=>{
//         const item=document.createElement('li');
//         const nameElem=document.createElement('span');
//         const priceElem=document.createElement('span');
//         nameElem.innerText=name;
//         priceElem.innerText=price;
//         item.dataset.type=type;
//         // item.setAttribute('data-type',type);
//         item.append(nameElem,priceElem);
//         list.append(item)
//
//     });}
const types = {
    vegetables: 'vegetables',
    almostMeat: 'almostMeat',
    meat: 'meat',
}

const goods = [
    {
        name: 'Tomato',
        price: 10,
        type: types.vegetables,
    },
    {
        name: 'Cucumber',
        price: 8,
        type: types.vegetables,
    },
    {
        name: 'Onion',
        price: 5,
        type: types.vegetables,
    },
    {
        name: 'Carrot',
        price: 15,
        type: types.vegetables,
    },
    {
        name: 'Potato',
        price: 20,
        type: types.vegetables,
    },
    {
        name: 'Meat',
        price: 50,
        type: types.meat,
    },
    {
        name: 'Fish',
        price: 70,
        type: types.meat,
    },
    {
        name: 'Eggs',
        price: 8,
        type: types.almostMeat,
    },
    {
        name: 'Chicken',
        price: 35,
        type: types.almostMeat,
    },
    {
        name: 'Cheese',
        price: 60,
        type: types.almostMeat,
    },
];



function renderGoods(arr) {
    const list = document.querySelector('ul');

    list.innerHTML = '';
    arr.forEach(({ price, name, type }) => {
        const item = document.createElement('li');
        const nameElem = document.createElement('span');
        const priceElem = document.createElement('span');

        nameElem.innerText = name;
        priceElem.innerText = price;
        item.dataset.type = type;
        item.append(nameElem, priceElem);
        list.append(item);
    });
}

const expensiveGoods = goods.filter(({ price }) => {
    return price >= 20;
});

function filterByType(type) {
    const filteredGoods = goods.filter(({ type: goodType }) => {
        return type === goodType;
    });

    renderGoods(filteredGoods);
}

renderGoods(goods);
// const item=document.querySelector('li');
// item.dataset.action='get'
// delete item.dataset.action
const users=[
    {
        name:'Anatolii'
    },
    {
        name:'Bohdan'
    }
]
// const anatolii= users[0].name
// const anatolii2= users.filter((name)=>{
//     return Object.entries(name)='Anatolii'
// })
// const anatolii=users.filter(({name})=>{
//     return name==='Anatolii'
// })
// const anatolii2 =Object.values(anatolii)
// const anatolii=users.map(({name})=>{
//     // return name==='Anatolii'
//     if(name==='Anatolii'){
//         return name
//     }
//     return
// }).join('')
// const anatolii=users.map(({name})=>{
//     // // return name==='Anatolii'
//     // if(name==='Anatolii'){
//     //     return name
//     // }
//     // return
//     return name==='Anatolii'.toLowerCase()
// }).join('')
const anatolii=users.filter(({name})=>{
    return name
    console.log(name)
}).map((name)=>{
    return name
}).join('')
/**
 * @param {string} name
 * @param {number} age
 * @param {boolean} isHidden
 * @constructor
 * @property {string} name
 * @property {number} age
 * @property {Element} ref
 * @property {boolean} isHidden
 */
function User(name, age, isHidden = false) {
    this.name = name;
    this.age = age;
    this.ref = null;
    this.isHidden = isHidden;
    const methods = [
        {
            name: 'updateName',
            selector: 'span',
            field: 'name',
        },
        {
            name: 'updateAge',
            selector: 'span:last-child',
            field: 'age',
        }
    ];

    // this.updateName = function (newName) {
    //   this.name = newName;
    //   this.ref.querySelector('span').innerText = newName;
    // };
    //
    // this.updateAge = function (newAge) {
    //   this.age = newAge;
    //   this.ref.querySelector('span:last-child').innerText = newAge;
    // };

    methods.forEach(({ name, selector, field }) => {
        this[name] = function (property) {
            this[field] = property;
            this.ref.querySelector(selector).innerText = property;
        }
    });

    this.hide = function () {
        this.ref.classList.toggle('hide');
    };
}

const users = [
    new User('Bohdan', 25),
    new User('John', 54),
    new User('Will', 30),
    new User('Lester', 21),
    new User('Jason', 46),
    new User('Alice', 27, true),
    new User('Stephan', 78),
];
const list = document.querySelector('ul');

users.forEach((user) => {
    const { name, age, isHidden } = user;
    user.ref = renderUser(name, age, isHidden);
});

function renderUser(name, age, isHidden) {
    const item = document.createElement('li');
    isHidden && item.classList.add('hide');

    item.innerHTML = `
    <span>${name}</span>  
    <span>${age}</span>  
  `;
    list.append(item);

    return item;
}
const button = document.querySelector('button');
const list = document.querySelector('ul');
const names = ['Bohdan', 'Stepan', 'Yura', 'Julia', 'Olena'];

const renderItem = (text) => {
    const item = document.createElement('li');
    const button = document.createElement('button');
    button.innerText = 'X';
    item.innerText = text;
    item.append(button);
    button.onclick = () => {
        item.remove();
    };
    item.onmousedown = () => {
        item.classList.add('red');
    };

    item.onmouseup = () => {
        item.classList.remove('red');
    }


    list.append(item);
};

names.forEach(renderItem);