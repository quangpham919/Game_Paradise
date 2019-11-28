import mongoose from 'mongoose';

const Schema = mongoose.Schema;

let game = new Schema({
  title:{
    type: String,
    required: true,
    min: 6,
    max: 255
  },
  platform:{
    type : String,
    required: true,
    max: 255,
    min: 8
  },
  genre: {
    type : String,
    required: true,
    min: 8
  },
  rating: {
      type: Number,
      required: true,
  },
  publisher: {
      type: String,
      required: true
  },
  release: {
      type: Number,
      required: true
  },
  status: {
      type: String,
      default:'Active',
      required: true
  }

});

export default mongoose.model('game',game);
