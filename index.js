'use strict'
// console.log(new Date());
//
// const newDate=new Date();
// newDate.setFullYear(1987,11,27);
// const obj={};
// obj[1]='number';
// obj['1']='number';
// const obj=new Map();
// obj.set(55,'number');
// obj.get(55);
// obj.get('55')
// undefined
const map=new Map();
const bohdan={name:'bohdan'};
map.set(bohdan,'secret key');
map.get(bohdan);
map.has(bohdan);
// const arr=[1,2,3,4,5,6,7,12,3,4,5,6,7];
arr.reduce((accum,current)=>{
    if (!accum.includes(current)){
      accum.push(current)
    };
    return accum
},[]);
const arr=new Set();
arr.add(2);
let set = new Set();

let john = { name: "John" };
let pete = { name: "Pete" };
let mary = { name: "Mary" };

// считаем гостей, некоторые приходят несколько раз
set.add(john);
set.add(pete);
set.add(mary);
set.add(john);
set.add(mary);

// set хранит только 3 уникальных значения
alert(set.size); // 3

for (let user of set) {
    alert(user.name); // John (потом Pete и Mary)
};
// const arr=[1,2,3,4,5,6,7,12,3,4,5,5,6,6,7,8,8,9,9,0,0,5,6,7];
// const set=new Set();
// const set=new Set(arr);
// const newArr=[...set];



/**
 * @param {string} name
 * @param {Date} dateOfBirth
 * @constructor
 */
function User(name, dateOfBirth) {
    this.name = name;
    this.dateOfBirth = dateOfBirth;

    this.movies = [];
    this.reviews = [];
    /**
     * @param {Movie} movie
     * @param {string} text
     */
    this.createReview = function (movie, text) {
        const review = {
            user: this,
            text,
        }
        movie.reviews.push(review);
        this.reviews.push({
            movie,
            text,
        });
    };

    /**
     * @param {Movie} movie
     * @param {number} rating
     */
    this.rateMovie = function (movie, rating) {
        movie.rating.push({
            user: this,
            rating,
        });
    };
}

/**
 * @param {User} author
 * @param {string} name
 * @param {Creator} creator
 * @constructor
 */
function Movie(author, name, creator) {
    this.author = author;
    this.name = name;
    this.creator = creator;
    author.movies.push(this);
    this.reviews = [];
    this.rating = [];
    creator.movies.push(this);

    Object.defineProperty(this, 'userReviews', {
        get() {
            return this.reviews
                .map(({ user: { name }, text }) => {
                    return `${name}: ${text}`;
                })
                .join('\n');
        }
    });

    Object.defineProperty(this, 'userRating', {
        get() {
            return this.rating
                .map(({ user: { name }, rating }) => {
                    return `${name}: ${rating}`;
                }).join('\n');
        }
    })

    Object.defineProperty(this, 'averageRating', {
        get() {
            const sum = this.rating
                .reduce((accum, { rating }) => {
                    return accum + rating;
                }, 0);

            return Number(
                (sum / this.rating.length).toFixed(4)
            );
        }
    });
}

function Creator(name) {
    this.name = name;
    this.movies = [];

    this.getMovies = function () {
        const filmNames = this.movies.map(({ name }) => {
            return name;
        });
        const uniqueNames = new Set(filmNames);

        return [...uniqueNames].join(', ');
        // return [...new Set(filmNames)].join(', ');
    };
}


const rammfall = new User('Bohdan Onastkyi', new Date(1997, 6., 15));
const olena = new User('Olena', new Date());
const dima = new User('Dima', new Date());
const king = new Creator('Steven King');
const movie = new Movie(rammfall, 'It', king);
const movie2 = new Movie(rammfall, 'It 2', king);
const movie3 = new Movie(rammfall, 'It 2', king);

rammfall.createReview(movie, 'It was great');
olena.createReview(movie, 'I hate this movie');
rammfall.rateMovie(movie, 10);
olena.rateMovie(movie, 2);

dima.createReview(movie, 'Middle');
dima.rateMovie(movie, 7);
// function User(name,lastName){
//     this.name=name;
//     this.lastName=lastName;
//     Object.defineProperty(this,'fullName',get(){
//        return `${this.name},${this.lastName}`
//     })
//
// }
let user = {
    name: 'John',
    age: 30
};

alert( count(user) );
// Напишите функцию count(obj), которая возвращает количество свойств объекта:
function count(obj ) {
    return Object.values(obj).length

};
const massiv=Object.keys(user).filter((name)=>{
    return ``
});
const user={
    name:'Anatolii',
    lastName:'Zhykhariev',
    getFullName(){
        return`${this.name},${this.lastName}`
    },
    get FullName(){
        return`${this.name},${this.lastName}`
    },
    set fullName(newName){
        const [name,lastName]=newName.split(' ')
    }
};
user.fullName='anatolii, pipkin';
Object.getOwnPropertyDescriptor(user,'name');
Object.getOwnPropertyDescriptors(user);
// user.age=34- так создаем совйство, в котором все дескрипторы будут true
Object.defineProperty(user,'age',{
    value:34,
    writable:false,
    enumerable:false,
    configurable:false,
});
Object.keys(user);
// user.age- не участвует в переборе
Object.defineProperty(user,'middleName',{
    value:'kykysiki',
    writable:true,
    enumerable:true,
    configurable:true,
});
Object.keys(user);
// delete user.age----false- совйство заморожено, я не могу его видоизменять, пока не переопределю дескрипторы
// Object.getOwnPropertyDescriptors(user);
// {name: {…}, lastName: {…}, getFullName: {…}, FullName: {…}, fullName: {…}, …}
// FullName
//     :
// {set: undefined, enumerable: true, configurable: true, get: ƒ}
// age
//     :
// {value: 34, writable: false, enumerable: false, configurable: false}
// fullName
//     :
// {get: undefined, enumerable: true, configurable: true, set: ƒ}
// getFullName
//     :
// {writable: true, enumerable: true, configurable: true, value: ƒ}
// lastName
//     :
// {value: 'Zhykhariev', writable: true, enumerable: true, configurable: true}
// middleName
//     :
// {value: 'kykysiki', writable: true, enumerable: true, configurable: true}
// name
//     :
// {value: 'Anatolii', writable: true, enumerable: true, configurable: true}
// [[Prototype]]
// :
// Object
Object.defineProperty(user,'name',{
    writable:false,
});
user.name='fuck';
Object.getOwnPropertyDescriptors(user);
// {name: {…}, lastName: {…}, getFullName: {…}, FullName: {…}, fullName: {…}, …}
// FullName
//     :
// {set: undefined, enumerable: true, configurable: true, get: ƒ}
// age
//     :
// {value: 34, writable: false, enumerable: false, configurable: false}
// fullName
//     :
// {get: undefined, enumerable: true, configurable: true, set: ƒ}
// getFullName
//     :
// {writable: true, enumerable: true, configurable: true, value: ƒ}
// lastName
//     :
// {value: 'Zhykhariev', writable: true, enumerable: true, configurable: true}
// middleName
//     :
// {value: 'kykysiki', writable: true, enumerable: true, configurable: true}
// name
//     :
// {value: 'Anatolii', writable: false, enumerable: true, configurable: true}
// [[Prototype]]
// :
// Object
Object.defineProperties(user,{
    adress:{
        value:{country:'Ukraine'},
        writable:false,
        configurable:false,
        enumerable:true,
    },
    work:{
        value:{city:'Kyiv'},
        writable:true,
        configurable:true,
        enumerable:false
    }

});
Object.defineProperties(obj, {
    prop1: descriptor1,
    prop2: descriptor2
    // ...
});
Object.defineProperties(user, {
    name: { value: "John", writable: false },
    surname: { value: "Smith", writable: false },
    // ...
});
// Object.freeze(user)- не возможно ни удалять ни добавлять свойства
Object.isFrozen(user);
