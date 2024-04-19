const express = require("express");
const router = express.Router();
const tasteController = require("../controllers/tasteController.js");
const authenticateJWT = require("../middlewares/authenticateJWT");

router.use(authenticateJWT);

router.get("/", tasteController.getUserTaste);
router.patch("/update", tasteController.updateTaste);

module.exports = router;
