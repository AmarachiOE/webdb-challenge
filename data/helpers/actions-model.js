const db = require("../dbConfig.js");

module.exports = {
  getAllActions,
  addAction
};

// =========== getAllActions
function getAllActions() {
  return db("actions");
}

// =========== addAction
function addAction(action) {
  return db("actions")
    .insert(action)
    .then(ids => ({ id: ids[0] }));
}
