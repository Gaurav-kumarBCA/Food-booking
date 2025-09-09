const express=require("express");
const {createAddress,getAllAddress,updateAddressByID,deleteAddressByID}=require("../../controllers/user/address.controllers")


const router=express.Router();
router.post("/",createAddress);
router.get("/",getAllAddress);
router.put("/:id",updateAddressByID);
router.delete("/:id",deleteAddressByID);


module.exports= router;