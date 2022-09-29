"use strict"
// Створити об'єкт, та при його створенні відразу зробити декілька властивостей(свойств)
// Назовіть об'єкт з назвою store.
// При створенні зробіть відразу властивості nameі запишіть у нього назву свого уявного магазину.
//     Також створіть властивість address,
//     який буде об'єктом і там запишіть властивості country, city, street, houseNumber з адресою вашого уявного магазину.
// Потім створіть окремо(тобто не при ініціалізації,
//     =а нижче(ініацілізація це процес сворення та коли ми відразу туди сетемо якісь властивості)) властивість clients,
//     і значенням буде пустий об'єкт.
//
// Потім до clients зробіть 5 властивостей,
//     які будуть називатися іменами і прізвищами 5 рандомних учасників нашого курсу(мене також можно)
// і у кожного має бути значення з кількіст'ю покупок(quantity) та кількість бонусів(bonuses). Ці значення будуть числами

const store={
    name:`bookShelfStore`,
    adress:{
        country:`Ukraine`,
        city:`Kyiv`,
        street:`Haharina ave`,
        houseNumber:`95`,
    },

}
const clients={
    anatoliiZhykhariev:{
        quantity:100,
        bonuses:10,
    },
    bohdanOnatsky:{
        quantity:10,
        bonuses:1,
    },
    ekaterynaKhokhlova:{
        quantity:90,
        bonuses:9,
    },
    paylRoshchin:{
        quantity:70,
        bonuses:7,
    },
    evgeniySkyriatyn:{
        quantity:80,
        bonuses:8,
    },
}
store['name']
store['adress']
store['adress'].country
clients.ekaterynaKhokhlova.bonuses