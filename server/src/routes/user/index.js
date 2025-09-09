const express=require("express");
const addressRouters=require("./address.routers");
const router=express.Router()

router.use("/address",addressRouters);




module.exports = router