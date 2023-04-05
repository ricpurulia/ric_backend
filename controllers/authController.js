// const Project = require("../models/ProjectModel");
// const bcrypt = require("bcryptjs");
// const jwt = require("jsonwebtoken");
// const dotenv = require('dotenv')

// dotenv.config({path: "./config.env"})

// const JWT_SECRET = process.env.JWT_SECRET;

// exports.login = async (req, res) => {
//   let sucess= false;
//   try {
    
//     const { email, password } = req.body;
    
//       // finding does alumni exist
//       let alumni = await Project.findOne({ email });
//       if (!alumni) {
//         return res.status(404).json({sucess, error: "Invaild email or password" });
//       }
      
//       // checking for alumni if he/she have not create there account
//       if(alumni.password===undefined) return res.status(203).json({sucess, mass: "create your account"})
//       //   compreing that password correct or not
//       const passwordCompre =await bcrypt.compare(password, alumni.password); 

//       if (!passwordCompre) {
//         return res.status(400).json({sucess, error: "Invaild email or password" });
//       }

//       let data = {
//         alumni: {
//           id: alumni.id,
//         },
//       };

//       //   sign in JWT token
//       const authToken = jwt.sign(data, JWT_SECRET);

//       //   send token to data base
//       sucess= true;
//       res.json({sucess, authToken,data });

//     } catch (error) {
//       console.error(error);
//       res.status(500).send({sucess, massage:error.message});
//     }

 
// };

// exports.signup = async (req, res) => {
//   try {
//     let sucess= false;

//     // collecting data
//     const data = { email: req.body.email, rollNo: req.body.rollNo,userType };

//     // find existing alumni
//     const alumni = await Project.find(data);

//     if (alumni.length !== 0) {
//       // checking account created or not
//       if (alumni[0].password === undefined) {
//         // hasing password
//         let salt = await bcrypt.genSalt(10);
//         let secPass = await bcrypt.hash(req.body.password, salt);

//         // updateing password
//         await Project.updateOne(
//           { _id: alumni[0]._id.toString() },
//           { password: secPass }
//         );

//         let data = {
//           alumni: {
//             id: alumni.id,
//           },
//         };

//         //   sign in JWT token
//         const authToken = jwt.sign(data, JWT_SECRET);

//         sucess = true;
//         // send token to data base
//         res.json({ sucess, authToken });
//       } else {
//         res.status(203).json({sucess, mass: "already account created" });
//       }
//     } else {
//       res.status(404).json({sucess, mass: "no alumni found" });
//     }
//   } catch (err) {
//     console.log(err);
//     res.status(500).send("server error");
//   }
// };
// const islogin = async (req , res , next) => {
//   if(req.cookies.jwt){
//     try{
//       const decoded = await promisify(jwt.verify)(
//         req.cookies.jwt,
//         process.env.JWT_SECRET
//       );
//       const currentUser = await User.findById(decoded.id);
//       if (!currentUser) {
//         return next();
//       }
//       if (currentUser.changedPasswordAfter(decoded.iat)) {
//         return next();
//       }

//       res.locals.user = currentUser;
//       return next();

//     }catch{
//       return next();
//     }
//   }
//   next();
// }