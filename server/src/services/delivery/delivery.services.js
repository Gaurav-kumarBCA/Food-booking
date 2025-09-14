const DeliveryBoy=require("../../models/deliveryPartner");

const deliveryboyCreatedDB=async({name,phone,vehicleNo,isAvalable,slug})=>{
   const deliveryBoy=new DeliveryBoy({name,phone,vehicleNo,isAvalable,slug});
   return await deliveryBoy.save();
}

const getAllDeliveryBoyDB=async()=>{
  return await DeliveryBoy.find()
}

const getidDeliveryBoyDB=async(id)=>{
return await DeliveryBoy.findById(id);
}

const updateDeliveryBoyDB=async(id,body)=>{
  return await DeliveryBoy.findByIdAndUpdate(id,body,{new:true});
}

const  deleteDeliveryBoyDB=async(id)=>{
    return await DeliveryBoy.findByIdAndDelete(id);
}
module.exports={deliveryboyCreatedDB,getAllDeliveryBoyDB,getidDeliveryBoyDB,updateDeliveryBoyDB,deleteDeliveryBoyDB}