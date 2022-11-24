"use strict"
import{renderItem} from "/renders.js"
const data=[
    'Bohdan','Anatolii','Olena','Yura','Kirill','Vasya','Petya'
];
data.forEach((name)=>renderItem(name));
const obj={
    name:'Anatolii',
    age:34
}
obj.toString()
'[object Object]'
JSON.stringify(obj);
'{"name":"Anatolii","age":34}'
const friend={
    name:'john'};
obj.friend=friend
friend.friend=obj;
// Uncaught TypeError: Converting circular structure to JSON
// --> starting at object with constructor 'Object'
// |     property 'friend' -> object with constructor 'Object'
// --- property 'friend' closes the circle
// at JSON.stringify (<anonymous>)
//     at <anonymous>:1:6
// localStorage.users=['bohdan','anatolii'];
// localStorage
// Storage {users: 'bohdan,anatolii', i18next_lng: 'uk', length: 2};
// localStorage.users
// 'bohdan,anatolii'
localStorage.users=JSON.stringify(['bohdan','anatolii']);
'["bohdan","anatolii"]'