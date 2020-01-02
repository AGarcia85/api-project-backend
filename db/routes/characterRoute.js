const express = require("express");

const charController = require("../controller/controller");

const charRouter = express.Router()

charRouter.get("/", charController.index)

charRouter.get("/:_id", charController.findById)

charRouter.get("/characters/:charId", charController.showCharId)

charRouter.get("/characters/:name", charController.showName)

charRouter.get("/status/:status", charController.showStatus)

module.exports = charRouter