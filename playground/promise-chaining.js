require('../src/db/mongoose')
const User = require('../src/models/user')

// User.findByIdAndUpdate('5eac3d8a3c7ce73140844169', { age: 1}).then((user) => {
//     console.log(user)
//     return User.countDocuments({ age: 1})
// }).then((result) => {
//     console.log(result)
// }).catch((e) => {
//     console.log(e)
// })

const updateAgeAndCount = async (id, age) => {
    const user = await User.findByIdAndUpdate(id, { age })
    const count = await User.countDocuments({ age })
    return count
}

updateAgeAndCount('5eac3d95e14e3206d87e7ec2', 2).then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})