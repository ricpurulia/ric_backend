const mongoose = require("mongoose");
const eventSchima = new mongoose.Schema({
    name:{
        type: String,
        require:true
    },
    topic:{
        type: String,
        require:true
    },
    startDate:{
        type:Number,
        require:true,
    },
    time:{
        type:Number,

    }

},
{
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
  }
)

const Event = mongoose.model('Event' , eventSchima);
module.exports = Event