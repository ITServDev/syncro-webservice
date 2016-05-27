let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let runSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  cpf: {
    type: String,
    unique: true,
    required: true
  },
  password: {
    type: String,
    default: null
  },
  role: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: true
  }
});

export const user = mongoose.model('User', runSchema)
