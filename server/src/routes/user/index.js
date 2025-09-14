const express=require("express");
const addressRouters=require("./address.routers");
const ordersRouters=require("./order.routers");
const cartRouters=require("./cart.routers")
const reviewRouters=require("./review.routers")
const router=express.Router()

router.use("/address",addressRouters);
router.use("/orders",ordersRouters);
router.use("/cart",cartRouters);
router.use("/review",reviewRouters)



module.exports = router