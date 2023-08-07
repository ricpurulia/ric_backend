const jwt = require('jsonwebtoken')
const Admin = require('../models/adminModel')
const signToken = id =>{
    return jwt.sign({id}, process.env.JWT_SECRET,{

        expiresIn: process.env.JWT_EXPIRES_IN
    })

    
}

const createSandToken = (upuser , statusCode , res) =>{
    const token = signToken(newUser._id)
    const cookiOption = {
        expires:new Date (
            Date.new() * process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000  
        ),
       
    }
    if (process.env.NODE_ENV === 'production') cookiOption.secure = true
    res.cookie('jwt' , token,cookiOption );
    User.password = undefined
    res.status(201).json({
        status: 'success',
        token,
           data:{
            user: upuser
        }
    })
}
exports.signup = async (req,res,next)=>{
    const newUser = await Users.create({
        name: req.body.name,
        email:req.body.email,
        password:req.body.password,
        passwordConfarm: req.body.passwordConfarm,
        isAdmin:req.body.isAdmin,
    })
    createSandToken(newUser , 201 , res)
}



exports.login = catchAsync(async (req, res, next) => {
    const { email, password } = req.body;
  
    
    // if (!email || !password) {
    //   return next ('Please provide email and password!', 400);
    // }
    
    const admin = await Admin.findOne({ email }).select('+password');
  
    // if (!admin || !(await admin.correctPassword(password, user.password))) {
    //   return next('Incorrect email or password', 401);
    // }
  
   
    createSandToken(admin , 201 , res)
});
