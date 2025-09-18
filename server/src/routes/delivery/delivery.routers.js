const express=require("express");
const {deliveryboyCreated, getAllDeliveryBoy, getidDeliveryBoy, updateDeliveryBoy, deleteDeliveryBoy}=require("../../controllers/delivery/delivery.controllers");
const verifyRole=require("../../middleware/role.middleware");
const router=express.Router();

router.post("/",verifyRole(["delivery Boy"]),deliveryboyCreated);
router.get("/",verifyRole(["delivery Boy"]),getAllDeliveryBoy);
router.get("/:id",verifyRole(["delivery Boy"]),getidDeliveryBoy);
router.put("/:id",verifyRole(["delivery Boy"]),updateDeliveryBoy);
router.delete("/:id",verifyRole(["delivery Boy"]),deleteDeliveryBoy);


module.exports=router;