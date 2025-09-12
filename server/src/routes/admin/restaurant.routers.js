const express=require("express");
const { createRestaurant, getAllRestaurant, getRestaurantById, updateRestaurant, deleteRestaurant } = require("../../controllers/admin/restaurant.controllers");

const router=express.Router();

router.post("/",createRestaurant);
router.get("/",getAllRestaurant);
router.get("/:slug",getRestaurantById);
router.put("/:id",updateRestaurant);
router.delete("/:id",deleteRestaurant);

module.exports=router;