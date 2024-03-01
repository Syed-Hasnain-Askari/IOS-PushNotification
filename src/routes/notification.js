const express = require("express");
const router = express.Router();
const notification = require("../controller/pushnotification.controller");
router.post("/sendnotification/:deviceId", notification.sendNotification);
module.exports = router;
