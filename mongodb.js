//CRUD create read update delete

const { MongoClient, ObjectID } = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

const id = new ObjectID()
console.log(id)
console.log(id.getTimestamp())

MongoClient.connect(connectionURL, { useUnifiedTopology: true }, (error, client) => {
    if(error){
        return console.log("Unable to connect to database.")
    }

    const db = client.db(databaseName)
    
    // db.collection('users').findOne({ name: 'Rohan', age: 1 }, (error, user) => {
    //     if(error){
    //         return console.log("Unable to fetch user")
    //     }
    //     console.log(user)
    // })

    // db.collection('users').find({ age: 20 }).toArray((error, users) => {
    //     console.log(users)
    // })
    // db.collection('users').find({ age: 20 }).count((error, count) => {
    //     console.log(count)
    // })

    // db.collection('tasks').findOne({ _id: new ObjectID('5e6b2e5985222642b4c6c0a8')}, (error, tasks) => {
    //     console.log(tasks)
    // })

    db.collection('tasks').find({ completed: false }).toArray((error, tasks) => {
        console.log(tasks)
    })
})
