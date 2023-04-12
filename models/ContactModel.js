const mongoose = require("mongoose");
const contactusSchema = new mongoose.Schema({
    name:{
        type: String,
        require:[true,"Name is required"],
    },
    email:{
        type: String,
        require:[true,"Email is required"]
    },
    phone:{
        type: String,
        require:[true,"Phone Number is Required"]
    },
    message:{
        type: String,
        require:[true,"message connot empty"]
    },

},
{
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
  },
  {
    timestamps:true,
  }
)

const Contactus = mongoose.model('Contactus' , contactusSchema);
module.exports = Contactus