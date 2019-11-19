import mongoose from 'mongoose';
import game from './game';


const Schema = mongoose.Schema;

let player = new Schema({
  name:{
    type: String
  },
  ranking:{
    type : Number
  },
  score: {
    type : Number,
    default:0
  },

  time:{
    type : String,
    default:'No time recorded'
  },

  status : {
    type : String,
    default: 'Available'
  },

  favGame:{
    type: String
  },
  gamePlayed : {
    type: [String],
    default: undefined
    
  }
});

export default mongoose.model('player',player);
