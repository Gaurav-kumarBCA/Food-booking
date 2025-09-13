const express=require("express");
const addressRouters=require("./address.routers");
const ordersRouters=require("./order.routers");
const cartRouters=require("./cart.routers")
const router=express.Router()

router.use("/address",addressRouters);
router.use("/orders",ordersRouters);
router.use("/cart",cartRouters);




module.exports = router