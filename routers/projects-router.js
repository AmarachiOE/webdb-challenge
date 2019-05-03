const projectsRouter = require("express").Router();
const projectsDb = require("../data/helpers/projects-model.js");

// =============== GET ALL PROJECTS
projectsRouter.get("/", (req, res) => {
  projectsDb
    .getAllProjects()
    .then(projects => {
      res.status(200).json(projects);
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: "The dishes information could not be retrieved." });
    });
});

// =============== GET PROJECT BY ID
// projectsRouter.get("/:id", (req, res) => {
//     const projectId = req.params.id;
//     projectsDb.getProject(projectId).then().catch()
// })

// =============== POST PROJECT


module.exports = projectsRouter;