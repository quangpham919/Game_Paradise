import mongoose from 'mongoose';

const Schema = mongoose.Schema;

let admin = new Schema({
  name:{
    type: String,
    required: true,
    min: 6,
    max: 255
  },
  email:{
    type : String,
    required: true,
    max: 255,
    min: 8
  },
  password: {
    type : String,
    required: true,
    min: 8
  },
  date: {
      type: Date,
      default: Date.now
  }

});

export default mongoose.model('admin',admin);