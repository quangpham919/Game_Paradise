const mongoose = require('mongoose')

const Schema = mongoose.Schema;

let player = new Schema({
  name:{
    type: String
  },
  ranking:{
    type : Number
  },
  score: {
    type : Number
  }

});

export default mongoose.model('player',player);
