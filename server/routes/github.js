const router = require("express").Router();
const { my_profile, create_repo,search_profile } = require("../controller/github");

router.get("/", my_profile);
router.post("/", create_repo);
router.get("/:user", search_profile);




module.exports = router;
