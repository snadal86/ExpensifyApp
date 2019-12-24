import * as firebase from 'firebase'

var firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const database = firebase.database()
const googleAuthProvider = new firebase.auth.GoogleAuthProvider()

export { firebase, googleAuthProvider, database as default }

// database.ref('expenses').on('child_removed', snapshot => {
//     console.log(snapshot.key, snapshot.val())
// })

// database.ref('expenses').on("child_changed", snapshot => {
//     console.log(snapshot.key, snapshot.val())
// })

// database.ref('expenses').on("child_added", snapshot => {
//     console.log(snapshot.key, snapshot.val())
// })

// database.ref('expenses').on('value', snapshot => {
//     const expenses = []
//     snapshot.forEach( (childsnapshot)=> {
//         expenses.push({
//             id:childsnapshot.key,
//             ...childsnapshot.val()
//         })
//     })
//     console.log(expenses)
// })

// database.ref('expenses')
// .once('value')
// .then(snapshot => {
//     const expenses = []
//     snapshot.forEach( (childsnapshot)=> {
//         expenses.push({
//             id:childsnapshot.key,
//             ...childsnapshot.val()
//         })
//     })
//     console.log(expenses)
// })
// .catch( e => console.error("Error fetching data: ", e))

// database.ref('expenses').push({
//     description:'Water Bill',
//     note: 'December water bill',
//     amount: 3524,
//     createdAt:1523654525
// })

// database.ref('expenses').push({
//     description:'Phone Bill',
//     note: 'December Phone bill',
//     amount: 5000,
//     createdAt:1523658455
// })

// database.ref('expenses').push({
//     description:'Gas Bill',
//     note: 'December gas bill',
//     amount: 7582,
//     createdAt:1521524525
// })

// database.ref('notes/-Lwm2dvd4aTcyCCUmFu0').update({
//     body:'New book'
// })

// database.ref('notes').push({
//     title:'Second note',
//     body:'This is my note'
// })

// database.ref().set(firebaseNotes)

// const onValueChange = database.ref().on('value', (snapshot) => {
//     const val = snapshot.val()
//     console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`)
// })

// const onValueChange = database.ref().on('value', (snapshot) =>{
//     const val =snapshot.val()
//     console.log(val)
// }, (e) => {
//     console.error('Error with data fetching', e)
// })


// setTimeout( ()=> {
//     database.ref('age').set(30)
// }, 3500)

// setTimeout( ()=> {
//     database.ref().off(onValueChange)
// }, 7000)


// setTimeout( ()=> {
//     database.ref('age').set(32)
// }, 10500)


// database.ref().set({
//     name: "Jordi Nadal",
//     age: 32,
//     stressLevel:6,
//     job:{
//         title:'Sofware Developer',
//         company:'Google'
//     },
//     location: {
//         city: 'Palafrugell',
//         country: 'Torroella'
//     }
// }).then(()=>{
//     console.log('Data is saved')
// }).catch((e)=>{
//     console.error('Error:', e)
// })

// database.ref().set('This is my data')

// database.ref('age').set(33)
// database.ref('location/city').set('Palafrugell')

//attributes

// database.ref('attributes').set({
//     height:170,
//     weight:80
// }).then(()=>{
//     console.log('2nd Data is saved')
// }).catch((e)=>{
//     console.error('Error 2 error: ', e)
// })

// database.ref('isSingle')
// .remove()
// .then(() => console.log('Remove Successful'))
// .catch(e => console.error("Error on removing: ", err))

// database.ref('isSingle')
// .set(null)
// .then(() => console.log('Remove Successful'))
// .catch(e => console.error("Error on removing: ", err))

// database.ref()
// .update({
//     job:'Manager',
//     'location/city':'Boston'
// })
// .then(()=>{
//     console.log('Updated Done')
// })
// .catch((e)=> {
//     console.error('Something went wrong')
// })

// database.ref()
// .update({
//     stressLevel:9,
//     'location/city':'Seatle',
//     'job/company':'Amazon'
// }).then(()=>{
//     console.log('Updated Done')
// })
// .catch((e)=> {
//     console.error('Something went wrong')
// })