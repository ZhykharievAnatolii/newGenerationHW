'use strict'
// ведем базу данных пользователей
function askUser() {
const users={};
while (true){
    const userName=prompt('Enter your name')
    }

return users
// const anotherUsers=new Object();
// const anotherUsers2=new Array();
// const anotherUsers3=[];
};
const result=askUser();
console.log(result);
// function askUser() {
//   const users = {};
//
//   while (true) {
//     const username = prompt("Enter name");
//
//     if (username === "break") return users;
//     const age = prompt("enter your age");
//
//     users[username] = {
//       age,
//       password: prompt("Enter your password"),
//     };
//   }
// }
// const result=askUser();
// const entries=Object.entries(result).filter(([,{age}])=>{
//     return Number(age)<25;
// });

// const userNames={};
// function askUser() {
//     const userNames={};
//     while (true){
//         const usersName=prompt('please enter your name');
//         if(usersName==='break') return users;
//         // if(usersName&&age$$password==='break'||null) return users;
//         const age=prompt('please enter your age');
//         const password=prompt('please enter your password');
//         users[usersName]={
//             age,
//             password,
//         }
//
//     }
// }
const result = {
    "Bohdan Onatskyi": {
        age: "25",
        password: "qwerty1234",
    },
    "Julia Zav": {
        age: "22",
        password: "tqwer1252",
    },
    "Kirill Makh": {
        age: "22",
        password: "Tesd0987",
    },
};
// const ageOfUsers=Object.entries(result).filter(([,{age}])=>{
//     return +age<=25;
// }).map(([username])=>username);
// const ageOfUsers=Object.entries(result).filter(([,{age}])=>{
//     return +age<=25;
// }).map(([username])=>username).join(', ');
const ageOfUsers=Object.entries(result).reduce((accum,[username,{age}])=>{if(Number(age)<=25){
    return [...accum,username];
}
return [...accum]
},[]).join(', ');
//
// const entries = Object.entries(result);
// .filter(([, { age }]) => {
//   return Number(age) < 25;
// })
// .map(([username]) => username)
// .reduce((accum, [username, { age }]) => {
//   if (Number(age) < 25) {
//     return [...accum, username];
//   }
//
//   return [...accum];
// }, [])
// .join(", ");
const sizes = {
    small: "sm",
    middle: "md",
    large: "lg",
};

const post = {
    parcels: {
        0: {
            name: "mirinda",
            size: sizes.small,
        },
        3: {
            name: "phones",
            size: sizes.small,
        },
        6: {
            name: "chicken",
            size: sizes.large,
        },
        873: {
            name: "books",
            size: sizes.middle,
        },
        634: {
            name: "windows",
            size: sizes.large,
        },
    },
    getParcelsBySize(parcelSize) {
        return Object.values(this.parcels).filter(({ size }) => {
            return size === parcelSize;
        });
    },
    init() {
        const getters = [
            {
                size: sizes.large,
                name: "largeParcels",
            },
            {
                size: sizes.middle,
                name: "middleParcels",
            },
            {
                size: sizes.small,
                name: "smallParcels",
            },
        ];

        getters.forEach(({ name, size }) => {
            Object.defineProperty(this, name, {
                get() {
                    return this.getParcelsBySize(size);
                },
            });
        });
    },
};