const express=require("express");
const router=express.Router();
const restaurantRouter=require("./restaurant.routers");
const foodItemsRouter=require("./foodItems.routers")

router.use("/restaurant",restaurantRouter);
router.use("/fooditems",foodItemsRouter);

module.exports= router;