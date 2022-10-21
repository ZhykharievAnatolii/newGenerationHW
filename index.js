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
function Comment(text, author, video) {
    if (checkUserAndVideo(author, video)) return 'not permitted';
    this.text = text;
    this.author = author;
    video.comments.push(this);
}

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