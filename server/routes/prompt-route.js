let express = require("express"),
    promptRouter = express.Router(),
    settings = require("../config/settings.js"),
    Prompt = require("../models/prompt-model.js");

//middleware to put all queries to lowercase
promptRouter.use((req, res, next) => {
    for(let key in req.query){
        if(typeof req.query[key] === "string") {
            req.query[key]=req.query[key].toLowerCase()
        }
    }
    next();
});

// GET ALL
promptRouter.get("/", (req, res) => {
    Prompt.find(req.query, (err, data) => {
    if(err) {
        res.status(500).send({"message": "Error within server", err});
    } else {
        res.status(200).send({"message": "Success here is your data", data});
    }
  });
});
//GET BY ID
promptRouter.get("/:_id", (req, res) => {
    Prompt.findOne({"_id": req.params._id}, (err, data) => {
        if(err) {
            res.status(500).send({"message": "Error within server", err});
        } else {
            res.status(200).send({"message": "Success here is your data", data})
        }
    });
});

promptRouter.post("/", (req, res) => {
    let newPrompt = new Prompt(req.body);
    newPrompt.save((err, data) => {
        if(err) {
            res.status(500).send({"message": "Error within the server", err});
        } else {
            res.status(200).send({"message": "Success here is your data", data})
        }
    });
});

module.exports = promptRouter;