"use strict"

const numbers=[1,2,5,6,7,4,5,6,7,8];
numbers.length;
// function filter(arr,callback){
//     for(let index=0;index<arr.length;index+=1){
//         return console.log(index)
//     }
// };
// filter(numbers);
// function filter(arr,callback){
//     for(let index=0;index<arr.length;index+=1){
//         return console.log(arr[index])
//     }
// };
// filter(numbers);
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function filter(arr, callback) {
    const filteredArray = [];

    for (let index = 0; index < arr.length; index += 1) {
        const currentElem = arr[index];

        if (callback(currentElem, index, arr)) {
            filteredArray.push(currentElem);
        }
    }

    return filteredArray;
}

function callback(number) {
    return number > 5;
}

// const result = filter(numbers, callback);

const names=[`Bohdan`,`Yulia`,`Kirill`];

// const names = [
//     'Bohdan', 'John', 'Will', 'Sam', 'Kirk', 'Michel', 'Yura', 'Irina', 'Irana'
// ];
//
// const result = filter(names, (name, index, arr) => {
//     return index > arr.length - 4;
// });
//
// const goods = [
//     {
//         price: 20,
//         name: 'Tomato',
//     },
//     {
//         price: 15,
//         name: 'Cucumber',
//     },
//     {
//         price: 130,
//         name: 'Avocado',
//     },
//     {
//         price: 150,
//         name: 'Batat',
//     },
//     {
//         price: 12,
//         name: 'Onion',
//     }
// ];
//
// console.log(result);
//
// const filteredGoods = goods.filter((good) => good.price > 20);
//
// console.log(filteredGoods);
//
// function priceCallback(good) {
//     return good.price > 20;
// }
//
// const func1 = (good) => {
//     return good.price > 20;
// }
//
//
// const func2 = (good) => good.price > 20;
const names = [
    'Bohdan', 'John', 'Will', 'Sam', 'KiRRk', 'Michel', 'Yura', 'Irina', 'Irana'
];
const namesWithR=names.filter((name)=>{
    return name.toLowerCase().includes(`r`)
});
console.log(namesWithR);
const goods = [
    {
        price: 20,
        name: 'Tomato',
    },
    {
        price: 15,
        name: 'Cucumber',
    },
    {
        price: 130,
        name: 'Avocado',
    },
    {
        price: 150,
        name: 'Batat',
    },
    {
        price: 12,
        name: 'Onion',
    }
];
const lowPriceGoods=goods.filter((good)=>{
    return good.price<50
}).map((item)=>{
    return item.name
});
console.log(lowPriceGoods);

// const brandFilter=(brand)=>{const filteredBrands=goods.filter((good)=>{
//     return good.brand===brand:});return filteredBrands};
// const facility={};
const facility={
    adress:
        {country:`Ukraine`,
            city:`Kyiv`,
            house:2,},
    goods:[]
};
// facility.goods.push(adress:
// {country:`Ukraine`,
//     city:`Kyiv`,
//     house:2,});

// const facility = {
//     address: {
//         country: 'Ukraine',
//         city: 'Dnipro',
//         house: 2,
//     },
//     validationMessages: {
//         notEnoughMoney: 'You have not enough money',
//         emptyName: 'Empty name',
//         incorrectQuantity: 'Incorrect quantity',
//         incorrectPrice: 'Incorrect price',
//         incorrectName: 'Incorrect name'
//     },
    goods: [
        {
            name: 'phones',
            quantity: 20,
            price: 1300,
        },
        {
            name: 'laptops',
            quantity: 40,
            price: 3400,
        },
        {
            name: 'covers',
            quantity: 2000,
            price: 30,
        },
        {
            name: 'powerbanks',
            quantity: 478,
            price: 80,
        },
    ],
//     account: 100000,
//     addGood: function (name, quantity, price) {
//         if (!name) {
//             return this.validationMessages.emptyName;
//         }
//         if (isNaN(+quantity) || quantity < 0) {
//             return this.validationMessages.incorrectQuantity;
//         }
//         if (isNaN(+price) || price < 0) {
//             return this.validationMessages.incorrectPrice;
//         }
//         const sum = price * quantity;
//
//         if (this.account < sum) {
//             return this.validationMessages.notEnoughMoney;
//         }
//
//         this.account -= sum;
//
//         const good = {
//             name,
//             quantity,
//             price,
//         };
//
//         this.goods.push(good);
//
//         return good;
//     },
//     getQuantity: function (name, quantity) {
//         const good = this.goods.find((currentGood) => {
//             return currentGood.name === name
//         });
//         if (!good) {
//             return this.validationMessages.incorrectName;
//         }
//         good.quantity += quantity;
//
//         return good;
//     },
//     sellGoods: function (name, quantity) {
//         const good = this.goods.find((currentGood) => {
//             return currentGood.name === name
//         });
//         if (!good) {
//             return this.validationMessages.incorrectName;
//         }
//         good.quantity -= quantity;
//
//         return good;
//     },
//     changeQuantity: function (name, quantity, action) {
//         const good = this.goods.find((currentGood) => {
//             return currentGood.name === name;
//         });
//         if (!good) {
//             return this.validationMessages.incorrectName;
//         }
//         if (action === 'sell') {
//             if (good.quantity < quantity) {
//                 return this.validationMessages.incorrectQuantity;
//             }
//             this.account += good.price * quantity;
//
//             good.quantity -= quantity;
//         } else if (action === 'receive') {
//             const sum = good.price * quantity;
//
//             if (sum > this.account) {
//                 return this.validationMessages.notEnoughMoney;
//             }
//             this.account -= sum;
//             good.quantity += quantity;
//         }
//
//         return good;
//     }
// };

// facility.addGood('headphones', 200, 400);
const name=`Anatolii`;
const age=34;
// const anatolii={ name:name,
//     age:age,};
const anatolii={
    name,
    age,
}

