import mongoose from 'mongoose';

const Schema = mongoose.Schema;

let player = new Schema({
  name:{
    type: String,
    required: true
  },
  ranking:{
    type : Number,
    required: true
  },
  score: {
    type : Number,
    required: true
  },
  time: {
    type: String,
    default: Date.now()
  },
  games: {
    type: Number,
    required: true
  },
  status: {
    type: String,
    required: true
  }
});

export default mongoose.model('player',player);
