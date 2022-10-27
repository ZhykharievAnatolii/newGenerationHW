"use strict"
// alert('Hi Anatolii');
// alert(`Hi all`);
// const antoliiZhykhariev='Anatolii Zhykhariev';
// alert (antoliiZhykhariev);
// let age=34;
// alert(age);
// age=35;
// alert(age);
// const number=null;
// // const number=0;
// alert(number)
// confirm(`Are you sure?`);
// const number= 3%4;
// alert(number);
// const name= prompt(`Enter your name`);
// const surname=prompt(`Enter your surname`);
// // const result=`Hi,`+name+` `+surname;
// const result=`Hi,${name} ${surname}`
// alert(result)
// alert(name);
// alert(surname);
// alert(prompt(`Enter your name`));
// const nameOfUser=prompt(`Enter your name,please`);
// const invitation=`Hello,${nameOfUser} ! How are you?`;
// alert(invitation)
// const nameOfUser=prompt('Please enter your name');
// confirm(`Are you sure?`);
// const ageOfyourWife=prompt(`How old your wife?`);
// confirm(`Are you sure?`);
// const ageOfUser=+prompt(`Plese enter your age`);
// confirm(`Are you sure?`);
// const resultMessage=`Hi,${nameOfUser},${ageOfUser} , your wife is ${ageOfyourWife} years old. How are you?`;
// alert(resultMessage)
// const obj3=new User();

// function student(name,grade){
//     return {name,
//         grade}};
// const anatolii=student(`Anatolii`,34);
// const obj={};
// // const obj2= new Object(name:`Anatolii`,grade:34,work:`front end dev`, expirience:6,);
// const date=new Date();
// date.getMinutes();
// date.getMonth();
// date.getFullYear();
// date.getMilliseconds();
// function User() {
//
// };
// const anatolii= new User();
// function User(name,age) {
//     this.name=name;
//         this.age=age;
//         this.friends=[];
//     this.hello=()=>{
//         return `Hello my name is ${this.name}`
//     }
// };
// const obj3=new User('Anatolii',34);
// obj3.hello();
//
// const yulia= new User('Yulia',35);
// yulia.hello();
// yulia instanceof User;
// yulia instanceof Array;
// yulia instanceof String;
// const string='anatolii';
// string instanceof Object;

// const User(name,age){
//     this.name=name;
//     this.age=age;
// };
// function Channel(name,description) {
//     this.name=name;
//     this.description=description;
//     this.videos=[];
// };
// function User(name,age){
//     this.name=name;
//     this.age=age;
//     this.following=[];
//     this.surscribe=(channel)=>{
//         channel.subscribers.push(this);
//     };
//     this.following.push(channel);
// }
// function Channel(name,description,creator) {
//     this.name=name;
//     this.description=description;
//     this.creator=creator;
//     this.videos=[];
//     this.subscribers=[];
// };
// function Video(name, duration, quality='hd'){
//     this.name=name;
//     this.duration=duration;
//     this.quality=quality;
//     this.comments=[];
// };
/**
 * @param {User} user
 * @param {Video} video
 * @returns {boolean}
 */
function checkUserAndVideo(user, video) {
    return video.isAdult && this.age < 18;
}

/**
 * @param {string} name
 * @param {number} age
 * @constructor
 */
function User(name, age) {
    this.name = name;
    this.age = age;
    this.following = [];
    this.channels = [];

    /**
     * @param {Channel} channel
     */
    this.subscribe = (channel) => {
        channel.subscribers.push(this);
        this.following.push(channel);
    };

    /**
     * @param {Video} video
     * @returns {string | *}
     */
    this.watchVideo = (video) => {
        if (checkUserAndVideo(this, video)) {
            return 'Not permitted';
        }

        video.views += 1;
    };
}

/**
 * @param {string} name
 * @param {string} description
 * @param {User} creator
 * @constructor
 */
function Channel(name, description, creator) {
    this.name = name;
    this.description = description;
    this.creator = creator;
    this.videos = [];
    this.subscribers = [];
    creator.channels.push(this);

    /**
     * @param {User} user
     */
    this.banUser = (user) => {
        this.subscribers = this.subscribers.filter(
            (currentUser) => currentUser.name !== user.name
        );
        user.following = user.following.filter(
            (channel) => channel.name !== this.name
        );

        this.videos.forEach((video) => {
            video.comments = video.comments.filter(
                (comment) => comment.author !== user
            );
        });
    };
}

/**
 * @param {string} name
 * @param {number} duration
 * @param {Channel} channel
 * @param {boolean} isAdult
 * @constructor
 */
function Video(name, duration, channel, isAdult = false) {
    this.name = name;
    this.channel = channel;
    this.duration = duration;
    this.isAdult = isAdult;
    this.views = 0;
    this.comments = [];
    channel.videos.push(this);

    /**
     * @returns {string}
     */
    this.getComments = () => {
        return this.comments
            .map((comment) => {
                return `${comment.author.name}: ${comment.text}`;
            })
            .join('; ');
    };
}

/**
 * @param {string} text
 * @param {User} author
 * @param {Video} video
 * @constructor
 */
// function Comment(text, author, video) {
//     if (checkUserAndVideo(author, video)) return 'not permitted';
//     this.text = text;
//     this.author = author;
//     video.comments.push(this);
// }

const rammfall = new User('rammfall', 25);
const olena = new User('Olena', 22);
const alina = new User('Alina', 22);
const julia = new User('Julia', 22);
const kirill = new User('Kirill', 22);
const programming = new Channel('FooBar', '---', rammfall);
rammfall.subscribe(programming);
olena.subscribe(programming);
alina.subscribe(programming);
julia.subscribe(programming);
kirill.subscribe(programming);

const howTo = new Video('How to create header', 34, programming);

new Comment('Wow, it great', kirill, howTo);
new Comment('Oh, thanks', rammfall, howTo);
new Comment('I hate you', julia, howTo);

new Comment(
    'I hate you',
    julia,
    new Video('How create footer', 53, programming)
);
new Comment('I hate you', julia, new Video('How create nav', 53, programming));

const youngUser = new User('Test', 14);

const docker = new Video('Docker. Begin', 54, programming, true);
julia.watchVideo(docker);
julia.watchVideo(docker);
rammfall.watchVideo(docker);
rammfall.watchVideo(docker);
olena.watchVideo(docker);

docker.getComments();

// Создайте функцию-конструктор Calculator, которая создаёт объекты с тремя методами:
//
// read() запрашивает два значения при помощи prompt и сохраняет их значение в свойствах объекта.
// sum() возвращает сумму этих свойств.
// mul() возвращает произведение этих свойств.

// let calculator = new Calculator();
// calculator.read();
//
// alert( "Sum=" + calculator.sum() );
// alert( "Mul=" + calculator.mul() );

/**
 * @param {string} a
 * @param {string} b
 * @constructor
 */

function Calculator() {

    this.read = function() {
        this.a = +prompt('a?', 0);
        this.b = +prompt('b?', 0);
    };

    this.sum = function() {
        return this.a + this.b;
    };

    this.mul = function() {
        return this.a * this.b;
    };
}
let calculator = new Calculator();
calculator.read();

alert( "Sum=" + calculator.sum() );
alert( "Mul=" + calculator.mul() );


/**
 * @param{string} text
 * @param{User} author
 * @param{Video} video
 * @Constructor
 */
function Comment(text, author,video){
    this.text=text;
    this.author=author;
    // this.video=video;
    video.comments.push(this);
};
const howTo= new Video('how to create header',34,programming);

// const obj={
//     phoneNumber:'131324565653479',
//     adress:'jccpskc',
//
// };
/**
 * @param {Object}
 * @param {Array}
 * @param {methods}
 * @type {{phoneNumber: string, adressLine1: string, houseNumber: number}}
 */
// const obj={
//     phoneNumber:'131324565653479',
//     adressLine1:'Lazaryana str',
//     houseNumber:4,
// };
// for(let propName in obj){
//     console.log(propName)
// };
// for(let propName in obj){
//     console.log(obj[propName])
// };
// for(let propName in obj){
//     console.log(propName,obj[propName])
// };
// // Object.keys(obj);
// const keys=Object.keys(obj);
// keys.forEach();

// const users={
//     'Bohdan Onatsky':{
//         isAdmin:true,
//         phoneNumber:1234346542,
//     },
//     'Olena':{
//         isAdmin:true,
//         phoneNumber:1234346542,
//     },
//     'Kirill Makhnovsky':{
//         isAdmin:false,
//         phoneNumber:1234346542,
//     },
// };
// const names= Object.keys(users);
// const values=Object.values(users);
// const entries=Object.entries(users);
// entries.length;

// const users={
//     1:{
//         isAdmin:true,
//         phoneNumber:1234346542,
//         id:1,
//         name:'Bohdan Onatsky',
//     },
//     2:{
//         isAdmin:true,
//         phoneNumber:1234346542,
//         id:2,
//         name:'Olena',
//     },
//     3:{
//         isAdmin:false,
//         phoneNumber:1234346542,
//         id:3,
//         name:'Kirill Makhnovsky',
//     },
// };
// const kkkeys=Object.values(users);
// const newArray=kkkeys.filter((value)=>{
//     return value.name!=='Olena'
// });
// const entries=Object.entries(users);
// const result=entries.map((user)=>{
//         // console.log(user[1])
//     const copy=Object.assign({},user[1]);
//     if(copy.isAdmin){
//         copy.permissions=['READ','WRITE']}
//     else {
//         copy.permissions=['READ']
//     }
//     return [user[0],copy];
// });

// function keys(obj) {
//     const result=[];
//     for(let key in obj){
//         result.push(key)
//     };
//     return result;
// };
// Object.keys(users);
// function values(obj) {
//     const result=[];
//     for(let key in obj){
//         result.push(obj[key])
//     };
//     return result;
// };
// Object.values(users);
// function entries(obj) {
//     const result=[];
//     for(let key in obj){
//         result.push([key, obj[key]])
//     };
//     return result;
// };
// Object.entries(obj)
//
// function fromEntries(entry) {
//     const obj={};
//     entry.forEach((item)=>{
//         obj[item[0]]=item[1];
//     })
// return obj;
// };
// Object.fromEntries(users);
const arr=['Bohdan','Anatolii','Kirill'];
const bohdan=[0];
const user=['anatolii','zhykhariev',34];
// const name=user[0];
// const[name]=user;
const [name,lastName]=user;
const[name,,age]=user;
const users={
    1:{
        isAdmin:true,
        phoneNumber:1234346542,
        id:1,
        name:'Bohdan Onatsky',
    },
    2:{
        isAdmin:true,
        phoneNumber:1234346542,
        id:2,
        name:'Olena',
    },
    3:{
        isAdmin:false,
        phoneNumber:1234346542,
        id:3,
        name:'Kirill Makhnovsky',
    },
};
// Object.entries(users);
// Object.entries(obj)

// function fromEntries(entry) {
//     const obj={};
//     entry.forEach((item)=>{
//         obj[item[0]]=item[1];
//     })
// return obj;
// };
// const entries1=Object.entries(users);
// const result=entries1.map((user)=>{
//     const copy=Object.assign({},user[1]);
//     copy.permissions=['READ'];
//     if(copy.isAdmi){
//         copy.permissions.push('WRITE')
//     };
//     return [user[0],copy]
// });
const entries1=Object.entries(users);
const result=entries1.map(([id,user])=>{
    const copy=Object.assign({},user);
    copy.permissions=['READ'];
    if(copy.isAdmi){
        copy.permissions.push('WRITE')
    };
    return [id,copy]
});
// entries1.forEach(([key])=>{
//     console.log(key)});

// const arr=[];
// const [name,LastName]=arr; const name=arr[0];
// undefined
// const priceFilter=(arr)=>{ return arr.filter((price)=>price>40)};
const newUser=['Anatolii','Zhykhariev','34','age'];
// function grettings(user) {
//     return `Hello, ${user[0].toLowerCase()},${user[1].toUpperCase()}`
//
// };
// function grettings([name,lastName]) {
//     return `Hello, ${name.toUpperCase()},${lastName.toUpperCase()}`
//
// };
// grettings(user);
const anotherUser=['John'];
const[name,lastName,age]=anotherUser;
undefined
const[name,lastName='Doe',age=34]=anotherUser;
function grettings([name='John',lastName='Doe']) {
    return `Hello, ${name.toUpperCase()},${lastName.toUpperCase()}`

};
grettings([]);
// const myProfile=['Anatolii'];
// const[name='Anatolii',lastName='Zhykhariev', age=34, houseNumber=118,city='Kyiv']=myProfile;
// function welcome([name='Anatolii',lastName='Zhykhariev', age=34, houseNumber=118,city='Kyiv']) {
//     return alert(`Hello, ${name.toUpperCase()},${lastName.toLowerCase()},${houseNumber},${city},your age is ${age}`)
// };
// welcome([]);
// const myProfile=['Anatolii'];
// const[name='Anatolii',lastName='Zhykhariev', age=34, houseNumber=118,city='Kyiv']=myProfile;
// function welcome([name='Anatolii',lastName='Zhykhariev', age=34, houseNumber=118,city='Kyiv']=[]) {
//     return alert(`Hello, ${name.toUpperCase()},${lastName.toLowerCase()},${houseNumber},${city},your age is ${age}`)
// };
// welcome();
// 'use strict';
//
// let [firstName, lastName, ...rest] = "Юлий Цезарь Император Рима".split(" ");
// alert(firstName); // Юлий
// alert(lastName);  // Цезарь
// alert(rest);      // Император,Рима (массив из 2х элементов)
// const user=['anatolii','zhykhariev',34];
// const[name,lastName,...rest]=user;
//
// const numbers=[1,2,5,6,7,4,5,6,7,8];
// const copied=[...numbers];
//
// const arr1=[1,2,3];
// const arr2=[6,7,8];
// const arr3=[...arr1,4,5,...arr2];

// const user={name:'Anatolii',lastName:'Zhykhariev',age:34};
// const{name}=user;
// const{lastName}=user;
// const{age}=user;
// const{name,adress={city:'Kyiv'}}=user;
// const {name:bohdanName}=user;

const user={name:'John'};
const lastName='Doe';
const{name,lastName:johnLastName='Doe'}=user;
const user1={name:'anatolii',lastName:'Zhykhariev'};
const user2={lastName:'Doe',age:54};
const copiedObject={...user1,
    ...user2,};
// };- в таком случае перепишется свойство lastName;
const newCopiedObject={
    ...{user1},
...{user2},
};
/**
 * @about Dates
 */


