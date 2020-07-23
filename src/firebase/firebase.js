import * as firebase from 'firebase'

var firebaseConfig = {
    apiKey:process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId:process.env.FIREBASE_PROJECT_ID,
    storageBucket:process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId:process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID,
    measurementId: process.env.FIREBASE_MEASUREMENT_ID
}
firebase.initializeApp(firebaseConfig)

const database =  firebase.database()

export { firebase , database as default }
// database.ref('expenses').on('child_removed',(snapshot) =>{
//     console.log(snapshot.key,snapshot.val())
// })
// database.ref('expenses').on('child_changed',(snapshot) =>{
//     console.log(snapshot.key,snapshot.val())
// })

// database.ref('expenses').on('child_added',(snapshot) =>{
//     console.log(snapshot.key,snapshot.val())
// })
// database.ref('expenses')
// .on('value',(snapshot) =>{
//     const expenses = []
//     snapshot.forEach((childSnapshot) =>{
//      expenses.push({
//          id:childSnapshot.key,
//          ...childSnapshot.val()
//      })
//     })
//     console.log(expenses)
// })

// database.ref('expenses')
// .once('value')
// .then((snapshot) =>{
//    const expenses = []
//    snapshot.forEach((childSnapshot) =>{
//     expenses.push({
//         id:childSnapshot.key,
//         ...childSnapshot.val()
//     })
//    })
//    console.log(expenses)
// })
// database.ref('expenses').push({
//     description:'Test',
//     note:'Test note',
//     amount:500,
//     createdAt:1500
// })

//database.ref('notes/-MCmd1ufNYLsXir69LrD').remove()

// database.ref('notes/-MCmd1ufNYLsXir69LrD').update({
//     body:'Buy food'
// })
// const notes = [{
//     id:'12',
//     title:'First note',
//     body:'This is my first note'
// },{
//     id:'76twgv',
//     title:'Another note',
//     body:'This is my second note'
// }]

// database.ref('notes').set(notes)
// database.ref().set({
//       name:'Aadi',
//       age:19,
//       job:{
//           title: 'Student',
//           company:'quikr'
//       },
//       location:{
//           city:'Chennai',
//           country:'India'
//       }
//   }).then(() =>{
    
//   }).catch((error) =>{
//       console.log(error)
//   })

// database.ref().on('value', (snapshot) =>{
//     const {name,job}= snapshot.val()

//     console.log(`${name} is a ${job.title} at ${job.company}`)
// })

//   database.ref()
//   .once('value')
//   .then((snapshot) =>{
//     const val = snapshot.val()
//     console.log(val)
//   }).catch((e) =>{
//     console.log(e)
//   })

//   database.ref('age').set(18)
//   database.ref('City').set('Bangalore')

// //   database.ref('attributes').set({
// //     height: 73,
// //     weight: 150
// //   }).then(() =>{
// //     console.log('It worked')
// //   }).catch(() =>{
// //       console.log('It did not work')
// //   })

//  database.ref().update({
//     stresslevel:9,
//     'job/company':'Google',
//     'location/city':'Chennai'
//  })