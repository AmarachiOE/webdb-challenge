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
}