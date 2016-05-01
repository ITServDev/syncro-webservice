let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let runSchema = new Schema({
  serverStartDate: {
    type: Date,
    default: Date.now
  },
  serverEndDate : {
    type: Date
  },
  deviceStartDate: {
    type: Date,
    required: true
  },
  deviceEndDate : {
    type: Date
  },
  car: {
    type: String,
    required: true
  },
  user: {
    type: String,
    required: true
  },
  photo: {
    type: String,
    required: true
  },
  open: {
    type: Boolean,
    default: true
  }
});

export const run = mongoose.model('Run', runSchema)