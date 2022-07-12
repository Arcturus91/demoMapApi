const router = require("express").Router();
const key = process.env.GOOGLE_KEY


/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index",{key});
});

module.exports = router;
