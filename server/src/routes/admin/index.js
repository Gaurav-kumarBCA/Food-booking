const express=require("express");
const router=express.Router();
const restaurantRouter=require("./restaurant.routers");
const foodItemsRouter=require("./foodItems.routers");
const foodCategoriesRouter=require("./foodCategories.routers");
const verifyRole=require("../../middleware/role.middleware");


router.use("/restaurant",verifyRole(["admin"]),restaurantRouter);
router.use("/fooditems",verifyRole(["admin"]),foodItemsRouter);
router.use("/foodCategories",verifyRole(["admin"]),foodCategoriesRouter)

module.exports= router;