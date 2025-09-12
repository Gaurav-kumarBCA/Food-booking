const express=require("express");
const addressRouters=require("./address.routers");
const ordersRouters=require("./order.routers");
const router=express.Router()

router.use("/address",addressRouters);
router.use("/orders",ordersRouters);




module.exports = router