const mongoose = require('mongoose');

const AdminSchima = new mongoose.Schema({
    type:String,
    UserName:{
        type:String
    },
    Status:{
        type:String,
        require:true

    },
    Password:{
        type:String,
        require:true

    },
    Date:{
        type:String,
        require:true
    }
    

})
const Admin = mongoose.model('Admin' , AdminSchima);
module.exports = Admin;

// AdminSchima.create({
//     type:Admin,
//     UserName:'admin-default',
//     Status:'pass123',
//     Password:'ACTIVE',
//     Date:new Date()
// })

