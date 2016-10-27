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
  mileage : {
    type: Number,
    required: true
  },
  car: {
    type: String,
    required: true
  },
  vehicle: {
    type: String,
    required: false
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  photo: {
    type: String,
    required: true
  },
  open: {
    type: Boolean,
    default: true
  },
  latitude: {
    type: String,
    required: false
  },
  longitude: {
    type: String,
    required: false
  }
});

export const run = mongoose.model('Run', runSchema)
