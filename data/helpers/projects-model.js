const db = require("../dbConfig.js");

module.exports = {
  getAllProjects,
  getProject,
  addProject
};

// =========== getAllProjects
function getAllProjects() {
  return db("projects");
}

// =========== getProject(id) returns a project and it's actions

function getProject(id) {
  return db("projects");
}

// =========== addProject
function addProject(project) {
  return db("projects")
    .insert(project)
    .then(ids => ({ id: ids[0] }));
}
