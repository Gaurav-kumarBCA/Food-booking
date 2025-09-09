const mongoose=require("mongoose");
const deliveryPartner= new mongoose.Schema({
    name:{type:String,required:true},
    phone:{type:String,required:true},
    vehicleNumber:{type:String,required:true},
    isAvalable:{type:Boolean,default:true},
    assignedOrders:[{type:mongoose.Schema.Types.ObjectId,ref:"Order"}]
},{timestamps:true});
const DeliveryBoy=mongoose.model("DeliveryBoy",deliveryPartner);
module.exports=DeliveryBoy;