const Project = require("../models/ProjectModel");

// get all Alumni
exports.getAllProject = async (req, res) => {
  try {
    const queryObj = {...req.query};
    const excludeFields = ['page' , 'sort' , 'limit','fields']
    excludeFields.forEach(el => delete queryObj[el])

    const query =  Project.find(queryObj);
    const project = await query;

    // SEND RESPONSE
    res.status(200).json({
      status: "success",
      results: project.length,
      data: {
        project,
      },
    });
  } catch (err) {
    res.status(500).json({ mas: "some server error" });
  }
};

// get Alumni
exports.getProject = async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);

    if (project == null) {
      res.status(404).json({
        mas: "project not found",
        sucess: false,
      });
    }

    res.status(200).json({
      project,
      sucess: true,
      authProject: req.userId,
    });
  } catch (err) {
    res.status(500).json({ mas: "some server error" });
  }
};

// add Alumni
exports.addProject = async (req, res) => {
  try {
    const newdata = req.body;
    const project = await Project.create(newdata);
    res.status(201).json(project);
  } catch (err) {
    res.status(500).json(err);
  }
};

// update Alumni
exports.updateProject = async (req, res) => {
  try {
    const newdata = req.body;
    const project = await Project.updateOne({ _id: req.params.id }, newdata);
    res.status(204).json(project);
  } catch (err) {
    res.status(500).json({ mas: "some server error" });
  }
};

// delete Alumni
exports.deleteProject = async (req, res) => {
  try {
    const project = await Project.deleteOne({ _id: req.params.id });
    res.status(202).json(project);
  } catch (err) {
    res.status(500).json({ mas: "some server error" });
  }
};
