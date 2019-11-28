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
    type: String,
    default: "No game recored"
  }

})

export default mongoose.model('player',player);
