const express = require("express");
const router = express.Router();

router.get("/wechat", (req, res) => {
  res.redirect("/api/me");
});

module.exports = router;
