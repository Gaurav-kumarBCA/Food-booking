const { orderCreatedDB, getAllOrdersDB, getIdOrdersDB, updateOrderDB, deleteOrderDB } = require("../../services/user/orders.services");

const orderCreated=async(req,res)=>{
    const {items,totalAmount,status,deliveryAddress,paymentMethod}=req.body;
    if(!items || !totalAmount || !status || !deliveryAddress || !paymentMethod){
        return res.json({
            success:false,
            error:"All fields are required",
            require:["item","totalAmount","status","deliveryAddress","paymentMethod"]
        })
    }
    try {
        const data=await orderCreatedDB(req.body);
        if(!data){
            return res.json({
                success:false,
                error:"Order not Created"
            })
        }
        return res.json({
            success:true,
            message:"Order are Created",
            data:data
        })
    } catch (error) {
        console.log(error);
        return res.json({
            success:false,
            error:"somthing went wrong"
        })
    }
}

const getAllOrders=async(req,res)=>{
    try {
    const data=await getAllOrdersDB();
        if(!data){
            return res.json({
                success:false,
                error:"Order not found"
            })
        }
        return res.json({
            success:true,
            message:"All order list",
            data:data
        })
    } catch (error) {
        console.log(error);
        return res.json({
            success:false,
            error:"somthing went wrong"
        })
    }    
}

const getIdOrders=async(req,res)=>{
    const {id}=req.params;
    try {
    const data=await getIdOrdersDB(id);
        if(!data){
            return res.json({
                success:false,
                error:"Order not found"
            })
        }
        return res.json({
            success:true,
            message:"Your Order",
            data:data
        })
    } catch (error) {
        console.log(error);
        return res.json({
            success:false,
            error:"somthing went wrong"
        })
    }    
}

const updateOrder=async(req,res)=>{
    const {id}=req.params;
    const body=req.body;
    try {
        const data=await updateOrderDB(id,body);
        if(!data){
            return res.json({
                success:false,
                error:"Order not found"
            })
        }
        return res.json({
            success:true,
            message:"Order updated",
            data:data
        })
    } catch (error) {
        console.log(error);
        return res.json({
            success:false,
            error:"Order not updated"
        })
    }
}

const deleteOrder=async(req,res)=>{
    const {id}=req.params;
    try {
        const data=await deleteOrderDB(id);
        if(!data){
            return res.json({
                success:false,
                error:"Order not found"
            })
        }
        return res.json({
            success:true,
            message:"Your Order deleted",
        })
    } catch (error) {
        console.log(error);
        return res.json({
            success:false,
            error:"somthing went wrong"
        })
    }
}
module.exports={orderCreated,getAllOrders,getIdOrders,updateOrder,deleteOrder}