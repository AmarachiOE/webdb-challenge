const actionsRouter = require("express").Router();
const actionsDb = require("../data/helpers/actions-model.js");

// ======== GET ALL ACTIONS
actionsRouter.get("/", (req, res) => {
  actionsDb
    .getAllActions()
    .then(actions => {
      res.status(200).json(actions);
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: "The dishes information could not be retrieved." });
    });
});

// ======== ADD ACTION
actionsRouter.post("/", (req, res) => {
  const action = req.body;
  if (
    !action ||
    !action.name ||
    !action.description ||
    !action.notes ||
    !action.project_id
  ) {
    res
      .status(400)
      .json({
        err:
          "You must include an action with a project_id, name, description, and notes."
      });
  } else {
    actionsDb
      .addAction(action)
      .then(action => {
        res.status(200).json(action);
      })
      .catch(err => {
        res.status(500).json({
          error: "There was an error while saving the action to the database"
        });
      });
  }
});

module.exports = actionsRouter;
