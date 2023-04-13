const Event = require("../models/eventModel")

exports.getAllEvent = async (req ,res)=>{
    const queryObj = {...req.query};

    const query =  Event.find(queryObj);
    const event = await query;

    // SEND RESPONSE
    res.status(200).json({
      status: "success",
      results: event.length,
      data: {
        event,
      },
    });
}
exports.createEvent = async(req , res)=>{
    const newEvent = req.body;
    const event = await Event.create(newEvent);
    res.status(201).json(event);
}

exports.getevent= async (req, res) => {
    try {
      const event = await Event.findById(req.params.id);
  
      if (event == null) {
        res.status(404).json({
          message: "event not found",
          sucess: false,
        });
      }
  
      res.status(200).json({
        event,
        sucess: true,
      });
    } catch (err) {
      res.status(500).json({ message: "some server error" });
    }
  };
  exports.updateEvent = async (req, res) => {
    try {
      const newdata = req.body;
      const event = await Event.updateOne({ _id: req.params.id }, newdata);
      res.status(204).json(event);
    } catch (err) {
      res.status(500).json({ message: "some server error" });
    }
  };
  
  // delete Alumni
  exports.deleteEvent = async (req, res) => {
    try {
      const event = await Event.deleteOne({ _id: req.params.id });
      res.status(202).json(event);
    } catch (err) {
      res.status(500).json({ message: "some server error" });
    }
  };