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
projectsRouter.post("/", (req, res) => {
  const project = req.body;
  if (!project || !project.name || !project.description) {
    res
      .status(400)
      .json({
        error:
          "You must include a project with a name and description."
      });
  } else {
    projectsDb
      .addProject(project)
      .then(project => {
        res.status(200).json(project);
      })
      .catch(err => {
        res.status(500).json({
          error: "There was an error while saving the project to the database"
        });
      });
  }
});

module.exports = projectsRouter;
