const Order = require("../../models/order");


const orderCreatedDB=async(data)=>{
    const order=await Order.create(data);
    return order;
}

const getAllOrdersDB=async()=>{
    return await Order.find();
}

const getIdOrdersDB=async(id)=>{
    return await Order.findById(id);
}

const updateOrderDB=async(id,body)=>{
    return await Order.findByIdAndUpdate(id,body,{new:true});
}

const deleteOrderDB=async(id)=>{
    return await Order.findByIdAndDelete(id);
}
module.exports={orderCreatedDB,getAllOrdersDB,getIdOrdersDB,updateOrderDB,deleteOrderDB}