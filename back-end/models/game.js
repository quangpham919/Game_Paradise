import mongoose from 'mongoose';


const Schema = mongoose.Schema;

let game = new Schema ({
    title : {
      type : String
    },

    platform : {
      type: String
    },

    genre : {
      type: String 
    },
    
    rating : {
      type : Number
    },

    publisher: {
      type : String
    },
    
    release:{
      type : Number
    },

    status: {
      type : String,
      default: 'Active'
    }
    
})

export default mongoose.model('game',game);
