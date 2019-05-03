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


module.exports = actionsRouter;