
const Artical = require('../model/projectModel')

exports.getAllproject=async(req,res,next)=>{
    const artical = await Artical.find(req.query)
    res.status(200).json({
        status: 'success',
        results:artical.length,
        data:{
            artical
        }
    })
};

exports.getproject = async (req, res, next) => {
    const artical = await Artical.findById(req.params.id);
    //const artical =await Artical.findone({_id: req.params.id})
    res.status(200).json({
        status: 'success',
        data:{
            artical
        }
    })
};

exports.createproject = async (req, res, next) => {
    const Cnewartical = await Artical.create(req.body);
  
    res.status(201).json({
      status: 'success',
      data: {
        tour: Cnewartical
      }
    });
};
  
exports.updateproject = async (req, res, next) => {
    const artical = await Artical.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });
  
    
  
    res.status(200).json({
      status: 'success',
      data: {
        artical
      }
    });
};
  
exports.deleteproject = async (req, res, next) => {
    const artical = await Artical.findByIdAndDelete(req.params.id);
  
    
  
    res.status(204).json({
      status: 'success',
      data: null
    });
};