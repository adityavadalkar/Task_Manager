require('../src/db/mongoose')
const Task = require('../src/models/task')

// Task.findByIdAndDelete('5eac3fe46932f939d879b07a', { completed: false}).then((task) => {
//     console.log(task)
//     return Task.countDocuments({ completed: false})
// }).then((result) => {
//     console.log(result)
// }).catch((e) => {
//     console.log(e)
// })

const deleteTaskAndCount = async (id) => {
    const task = await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments({ completed: false })
    return count
}

deleteTaskAndCount('5ead60ba0553338550ce4450', {completed: false}).then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})