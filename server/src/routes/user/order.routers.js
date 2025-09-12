const express =require("express");
const { orderCreated, getAllOrders, getIdOrders, deleteOrder, updateOrder } = require("../../controllers/user/orders.controllers");
const router=express.Router();


router.post("/",orderCreated);
router.get("/",getAllOrders);
router.get("/:id",getIdOrders);
router.put("/:id",updateOrder);
router.delete("/:id",deleteOrder);

module.exports=router;