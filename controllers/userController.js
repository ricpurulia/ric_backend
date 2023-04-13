const User = require('../models/userModel')

exports.getAllUsers = async (req, res, next) => {
 const users = await User.find();
  
    // SEND RESPONSE
    res.status(200).json({
      status: 'success',
      results: users.length,
      data: {
        users
      }
    });
};

exports.getUser = async (req, res) => {
  const user = await User.findById(req.params.id);

    if (user == null) {
      res.status(404).json({
        message: "user not found",
        sucess: false,
      });
    }
    res.status(200).json({
      user,
      sucess: true,
      authUser: req.userId,
    });
};
exports.createUser = async (req, res) => {
  const user = await User.create(req.body)
    res.status(200).json({
      status: 'success',
      data: {
        user
      },
      //message: 'This route is not yet defined!'
    });
    res.status(500).json({
      status: 'error',
      message: 'This route is not yet defined!'
    });
};
exports.updateUser = (req, res) => {
    res.status(500).json({
      status: 'error',
      message: 'This route is not yet defined!'
    });
};
exports.deleteUser = (req, res) => {
    res.status(500).json({
      status: 'error',
      message: 'This route is not yet defined!'
    });
};
  