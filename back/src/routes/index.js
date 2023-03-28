const {Router} = require("express");
const getCharById = require("../controllers/getCharById");
const getCharDetail = require ("./")
const router = Router();


router.get('/onsearch/:id',getCharById)

router.get("/detail/:id",getCharDetail)
router.use("/rickandmorty/favs")



module.exports = router;