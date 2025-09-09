const express=require("express");
const { createFoodList, getAllFoodList, getFoodListById, updateFoodList, deleteFoodList } = require("../../controllers/admin/foodItems.controllers");

const router=express.Router();

router.post("/",createFoodList);
router.get("/",getAllFoodList);
router.get("/:slug",getFoodListById);
router.put("/:id",updateFoodList);
router.delete("/:id",deleteFoodList);



module.exports=router;