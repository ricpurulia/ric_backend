const mongoose = require("mongoose");
// const validator = require("validator");
// const bcrypt = require("bcryptjs");

const projectSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'A project must have a name'],
    unique: true,
    trim: true,
    maxlength: [40, 'A project name must have less or equal then 40 characters'],
    minlength: [10, 'A project name must have more or equal then 10 characters']
    // validate: [validator.isAlpha, 'Tour name must only contain characters']
  },
  slug: String,
  duration: {
    type: Number,
    required: [true, 'A project must have a duration']
  },
  groupmembers: {
    type: Number,
    required: [true, 'A project must have a group size']
  },
  unikfetcher: {
    type: String,
    required: [true, 'A project must have a unikfetcher'],
    
  },
  description: {
    type: String,
    required: [true, 'A project must have a description'],
    trim: true
  },
  imageCover: {
    type: String,
    // required: [true, 'A tour must have a cover image']
  },
  images: [String],
  
  startDates: [Date],
  secretTour: {
    type: Boolean,
    default: false
  }
},
{
  toJSON: { virtuals: true },
  toObject: { virtuals: true }
}
);



// projectSchema.pre("save", async function (next) {
//   if (!this.isModified("password")) return next();
//   // const slat= await bcrypt.genSalt()
//   const salt= 100;
//   this.password =bcrypt.hash(this.password, salt);

//   next();
// });

// projectSchema.methods.correctPassword = async function (
//   candidatePassword,
//   userPassword
// ) {
//   return await bcrypt.compare(candidatePassword, userPassword);
// };

const Project = mongoose.model("Project", projectSchema);
module.exports = Project;
