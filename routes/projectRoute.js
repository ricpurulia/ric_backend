const express = require("express");
const projectController = require("../controllers/projectController");


const router = express.Router();

router.route("/").get(projectController.getAllProject);

router.route("/:id").get( projectController.getProject);
router.route("/").post(projectController.addProject);
router.route("/:id").put( projectController.updateProject);
router.route("/:id").delete(projectController.deleteProject);

module.exports = router;
