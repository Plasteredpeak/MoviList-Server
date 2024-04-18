const express = require("express");
const router = express.Router();
const listController = require("../controllers/listController.js");
const authenticateJWT = require("../middlewares/authenticateJWT");

router.use(authenticateJWT);

router.get("/", listController.getUserList);
router.post("/add", listController.addToList);
router.delete("/remove/:id", listController.deleteFromList);
router.patch("/update/:id", listController.updateList);

module.exports = router;
