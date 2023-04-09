const mongoose = require('mongoose')
const validator = require('validator');

const userSchema = new mongoose.Schema(
    {
        name:{
            type:String,
            require : [true , "Name is required"],
        },
        email:{
            type:String,
            require:[true, "email is required"],
            lowercase : true,
            validator: [validator.isEmail, 'please provide a valid email'],
        },
        image:{
            type:String,
            // require : [true , "image is required"],
        },
        phNo:{
            type:Number,
            // require : [true , "Number is required"],
        },
        year:{
            type:String,
            require : [true , "year is required"],
        },
        dept:{
            type:String,
            require : [true , "department is required"],
        },
        position:{
            type:String,
            require : [true , "Position is required"],
        },
        
        linkdinUrl:{
            type:String,
            require : [true , "linedIn is required"],
        },
        fbUrl:{
            type:String,
            require : [true , "FB is required"],
        },
        githubUrl:{
            type:String,
            require : [false ],
        },
        placement:{
            type:String,
            require : [false],
        },
        internship:{
            type:String,
            require : [false ],
        },
        expertise:{
            type:String,
            require : [true , false],
        },
        interest:{
            type:String,
            require : [false ],
        },
    

    }
)
// userSchema.pre('save',function(next){
//     if(!this.isModified('password')) return next()
// })



// userSchema.pre('save', async function(next) {
//     // Only run this function if password was actually modified
//     if (!this.isModified('password')) return next();
    
//     // Hash the password with cost of 12
//     this.password = await bcrypt.hash(this.password, 12);
    
//     // Delete passwordConfirm field++
//     this.passwordConfirm = undefined;
//     next();
// });





const User = mongoose.model('user',userSchema)
module.exports = User








