const express=require("express");
const addressRouters=require("./address.routers");
const ordersRouters=require("./order.routers");
const cartRouters=require("./cart.routers")
const reviewRouters=require("./review.routers")
const router=express.Router()
const verifyRole=require("../../middleware/role.middleware")

router.use("/address",verifyRole(["user"]),addressRouters);
router.use("/orders",verifyRole(["user"]),ordersRouters);
router.use("/cart",verifyRole(["user"]),cartRouters);
router.use("/review",verifyRole(["user"]),reviewRouters)



module.exports = router