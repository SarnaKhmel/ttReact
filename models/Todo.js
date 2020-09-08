const { Schema, model } = require('mongoose')

const schema = new Schema({
  title: {
    type: String,
    required: true
  },
  complected: {
    type: Boolean,
    required: false
  }
})

module.exports = model('Todos', schema)
