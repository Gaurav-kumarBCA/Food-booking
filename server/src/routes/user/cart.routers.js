const express=require("express");
const { cartcreated, getAllCart, getidCart, updatCart, deleteCart } = require("../../controllers/user/cart.controllers");

const router=express.Router();

router.post("/",cartcreated);
router.get("/",getAllCart);
router.get("/:id",getidCart);
router.put("/:id",updatCart);
router.delete("/:id",deleteCart);

module.exports=router;