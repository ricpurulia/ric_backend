const Admin = require('../models/adminModel');

exports.getAllAdmin = async(req , res)=>{
    const admin = await Admin.find();

    res.status(200).json({
        status: "success",
        results: admin.length,
        data: {
            admin,
        },
      });
}