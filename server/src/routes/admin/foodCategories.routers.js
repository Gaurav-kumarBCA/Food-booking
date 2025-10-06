const express=require("express");
const { createCategories, getAllFoodCategories, getSlugFoodCategories, updateCategories, deletefoodCategories } = require("../../controllers/admin/foodCategories.controllers");


const router=express.Router();

router.post("/",createCategories);
router.get("/",getAllFoodCategories);
router.get("/:slug",getSlugFoodCategories);
router.put("/:id",updateCategories);
router.delete("/:id",deletefoodCategories);


module.exports=router;