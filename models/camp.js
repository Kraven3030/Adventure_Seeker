const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Creates Campsite schema
const campsiteSchema = new Schema(
    {
        name: { type: String, required: true },
        description: { type: String, required: true },
        loaction: { type: String, required: true }
    }
)

//create a Camp model using the campsiteSchema
const Camp = mongoose.model('Camp', campsiteSchema)

// Exports the Camp model to index.js
module.exports = Camp