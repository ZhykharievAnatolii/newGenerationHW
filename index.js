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
console.log('text;;kc;s')
const list=document.querySelector('.list')
console.log(list, 'list');
const render=(text)=>{
 const item=document.createElement('li');
 item.classList.add('item');
 item.innerText=text;
 list.append(item)

};
const names=[
    'anatolii',
    'yura',
    'bohdan',
    'yulia',
]
names.forEach((name)=>render(name))
// list.classList
// list.className
// list.classList.add('list-modified')
// const input=document.querySelector('imput');
