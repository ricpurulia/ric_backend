const mongoose =require ('mongoose')


const projectSchema = new mongoose.Schema(
    {
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
      uniquefeatuare: {
        type: String,
        required: [true, 'A project must have a uniquefeatuare'],
        
      },
      description: {
        type: String,
        required: [true, 'A project must have a description'],
        trim: true
      },
    //   imageCover: {
    //     type: String,
    //     required: [true, 'A tour must have a cover image']
    //   },
      //images: [String],
      
      startDates: [Date],
      
    },
    {
      toJSON: { virtuals: true },
      toObject: { virtuals: true }
    }
);
const Artical = mongoose.model('Artical',projectSchema)

module.exports = Artical;