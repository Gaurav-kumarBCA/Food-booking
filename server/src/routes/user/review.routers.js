const express=require("express");
const { getAllreview, getidreview, updatedreview, deletedreview, reviewCreated } = require("../../controllers/user/review.controllers");

const router=express.Router();

router.post("/",reviewCreated);
router.get("/",getAllreview);
router.get("/:id",getidreview);
router.put("/:id",updatedreview);
router.delete("/:id",deletedreview);

module.exports=router;