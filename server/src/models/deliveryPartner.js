const mongoose=require("mongoose");
const deliveryPartner= new mongoose.Schema({
    name:{type:String,required:true},
    slug:{type:String,unique:true,required:true},
    phone:{type:String,required:true},
    vehicleNo:{type:String,required:true},
    isAvalable:{type:Boolean,default:true},
    assignedOrders:[{type:mongoose.Schema.Types.ObjectId,ref:"Order"}]
},{timestamps:true});
const DeliveryBoy=mongoose.model("DeliveryBoy",deliveryPartner);
module.exports=DeliveryBoy;