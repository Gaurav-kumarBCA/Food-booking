const express=require("express");
const {deliveryboyCreated, getAllDeliveryBoy, getidDeliveryBoy, updateDeliveryBoy, deleteDeliveryBoy}=require("../../controllers/delivery/delivery.controllers")
const router=express.Router();

router.post("/",deliveryboyCreated);
router.get("/",getAllDeliveryBoy);
router.get("/:id",getidDeliveryBoy);
router.put("/:id",updateDeliveryBoy);
router.delete("/:id",deleteDeliveryBoy);


module.exports=router;