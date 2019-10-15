// const person = {
//     age: 26,
//     location: {
//         city: 'Palafrugell',
//         temp: 25
//     }
// }

// // const name = person.name
// // const age = person.age

// const {name = 'Anonymous', age} = person;
// console.log(`${name} is ${age}`)

// const {city, temp} = person.location;
// if (city && temp ){
//     console.log(`It's ${temp}º in ${city}`)
// }


// const book = { 
//     title:'Ego is the enemy',
//     author:'Ryan Holiday',
//     publisher: {
//         name:'Penguin'
//     }
// }

// const {name: publisherName = 'Self-Published'} = book.publisher

// console.log(publisherName)

// const address = ['Joan Maragall 35', 'Palafrugell', 'Catalunya', '17200']

// const [street, city, state, zip] = address

// console.log(`You are in ${city} ${state}`)


const item = ['Coffee (hot)', '2.00€', '2.50€', '2.75€' ]

const [itemName, ,mediumPrice]=item

console.log(`A medium ${itemName} costs ${mediumPrice}`)