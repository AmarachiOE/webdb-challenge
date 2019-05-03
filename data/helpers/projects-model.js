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

async function getProject(id) {
  const project = await db("projects")
    .select("*")
    .where({ "projects.id": Number(id) })
    .first();

  const actions = await db("actions")
    .join("projects", "projects.id", "=", "actions.project_id")
    .where({ "actions.project_id": Number(id) })
    .select(
      "actions.id",
      "actions.description",
      "actions.notes",
      "actions.complete"
    );

  return { ...project, actions: [...actions] };
}

/*
function getProject(id) {
  return db("actions as a")
    .join(
        "projects as p", 
        "p.id", "=", "a.project_id"
        )
    .select(
        "*", 
        "p.name as ProjectName"
        )
    .where({ "a.project_id": Number(id) });
}
*/

// =========== addProject
function addProject(project) {
  return db("projects")
    .insert(project)
    .then(ids => ({ id: ids[0] }));
}
