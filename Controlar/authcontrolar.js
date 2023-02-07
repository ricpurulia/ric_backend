const User = require('../model/userModel')
const jwt = require('jsonwebtoken');

const signToken = id => {
    return jwt.sign({id},process.env.JWT_SECRET,{
        expiresIn: process.env.JWT_EXPIRES_IN
    })
}


const createSendToken = (user , statusCode , res)=>{
    const token = signToken(user._id);
    const cookieOptions ={
        expires: new Date(
            Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000
        ),
        httpOnly:true
    };
    if (process.env.NODE_ENV === 'production') cookieOptions.secure = true;

    res.cookie('jwt',token,cookieOptions)

    res.status(statusCode).json({
        status: 'success',
        token,
        data: {
          user
        }
      });
        
   
}



exports.signup = async(req , res , next)=>{
    //console.log(req)
    const newUser = await User.create({
        userName: req.body.userName,
        Email:req.body.Email,
        password:req.body.password,
        passwordConfirm: req.body.passwordConfirm
    })
    const token = signToken(newUser._id)
    

    res.status(201).json({
        status:'succcess',
        token,
        data:{
            newUser
        }
    })
}
exports.login = async(req , res,next)=>{
    const {Email,password} = req.body;
    
    if(!Email || !password){
        return next("please provide email and password")
    }
    const user =await User.findOne({Email}).select('+password');
    //const pass = await user.correctPassword(password , user.password);

    if(!user || !( await user.correctPassword(password , user.password))){
        return next("incurrect email or password",401)
    }
    const token = signToken(user._id)
    res.status(201).json({
        status :"success",
        token,
        data:{
            user
    } 
    })

}
// exports.isLoggedIn = async(req , res, next)=>{

// }