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
const sizes = {
    small: "sm",
    middle: "md",
    large: "lg",
};

const weight = {
    light: "light",
    normal: "normal",
    heavy: "heavy",
};

function Parcel(size, name, weight) {
    this.size = size;
    this.name = name;
    this.weight = weight;
}

const parcel = {
    weight: weight.normal,
    size: sizes.large,
    name: "Table",
};

function Post() {
    this.parcels = {};
    this.getParcelsBy = (key, value) => {
        return Object.values(this.parcels).filter((parcel) => {
            return parcel[key] === value;
        });
    };

    const init = () => {
        const getters = [
            {
                value: sizes.large,
                key: "size",
                name: "largeParcels",
            },
            {
                value: sizes.middle,
                key: "size",
                name: "middleParcels",
            },
            {
                value: sizes.small,
                key: "size",
                name: "smallParcels",
            },
            {
                value: weight.heavy,
                key: "weight",
                name: "heavyParcels",
            },
            {
                value: weight.normal,
                key: "weight",
                name: "normalParcels",
            },
            {
                value: weight.light,
                key: "weight",
                name: "lightParcels",
            },
            {
                value: true,
                key: "isFastDelivery",
                name: "lightParcels",
            },
        ];

        getters.forEach(({ name, key, value }) => {
            Object.defineProperty(this, name, {
                get() {
                    return this.getParcelsBy(key, value);
                },
            });
        });
    };

    init();

    Object.defineProperty(this, "length", {
        get() {
            return Object.keys(this.parcels).length;
        },
    });

    this.addParcel = (parcel) => {
        this.parcels[this.length] = parcel;
    };
}

// Object.defineProperty(post,'gett',{get(){return 'getter from define property'}});
const post = new Post();
post.addParcel(new Parcel(sizes.small, "mirinda", weight.light));
post.addParcel(new Parcel(sizes.small, "phones", weight.light));
post.addParcel(new Parcel(sizes.large, "chicken", weight.heavy));
post.addParcel(new Parcel(sizes.middle, "books", weight.normal));
post.addParcel(new Parcel(sizes.large, "windows", weight.normal));
function User(name) {
    if (User.names && User.names.includes(name)) {
        throw new Error('Duplicated username');
    }
    User.names = User.names ? [...User.names, name] : [name];
    this.name = name;
    this.friends = [];

    this.addToFriend = (user) => {
        this.friends.push(user);
        user.friends.push(this);
    };

    Object.defineProperty(this, 'friendsFriends', {
        get() {
            return this.friends
                .reduce((accum, friend) => {
                    const uniqueUsers = new Set([
                        ...accum,
                        ...friend.friends.filter((user) => user !== this),
                    ]);

                    return [...uniqueUsers];
                }, [])
                .map(({ name }) => name)
                .join(', ');
        },
    });
}

const rammfall = new User('rammfall');
const yura = new User('yura');
const olena = new User('olena');
const yulia = new User('yulia');
const alina = new User('alina');

rammfall.addToFriend(yura);
rammfall.addToFriend(olena);
rammfall.addToFriend(yulia);
rammfall.addToFriend(alina);

yulia.addToFriend(olena);
alina.addToFriend(yura);