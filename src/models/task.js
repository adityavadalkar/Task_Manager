const mongoose = require('mongoose')

const taskSchema = new mongoose.Schema( {
    description: {
        required: true,
        type: String,
        trim: true
    },
    completed: {
        type: Boolean,
        default: false
    },
})

const Task = mongoose.model('Task', taskSchema)

module.exports = Task