const Contact = require("../models/ContactModel")

exports.getAllContact = async (req ,res)=>{
    const queryObj = {...req.query};

    const query =  Contact.find(queryObj);
    const contact = await query;

    // SEND RESPONSE
    res.status(200).json({
      status: "success",
      results: contact.length,
      data: {
        contact,
      },
    });
}
exports.createContact = async(req , res)=>{
    const newContact = req.body;
    const contact = await Contact.create(newContact);
    res.status(201).json({contact,succes:true});
}

exports.getContact= async (req, res) => {
    try {
      const contact = await Contact.findById(req.params.id);
  
      if (contact == null) {
        res.status(404).json({
          message: "Contact not found",
          sucess: false,
        });
      }
  
      res.status(200).json({
        contact,
        sucess: true,
      });
    } catch (err) {
      res.status(500).json({ message: "some server error" });
    }
  };
  exports.updateContact = async (req, res) => {
    try {
      const newdata = req.body;
      const contact = await Contact.updateOne({ _id: req.params.id }, newdata);
      res.status(204).json(contact);
    } catch (err) {
      res.status(500).json({ message: "some server error" });
    }
  };
  
  // delete Alumni
  exports.deleteContact = async (req, res) => {
    try {
      const contact = await Contact.deleteOne({ _id: req.params.id });
      res.status(202).json(contact);
    } catch (err) {
      res.status(500).json({ message: "some server error" });
    }
  };