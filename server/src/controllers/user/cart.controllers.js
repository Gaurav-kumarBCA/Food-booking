const { CartListDB, getAllCartDB, getidCartDB, updatCartDB, deleteCartDB } = require("../../services/user/cart.services");

const cartcreated=async(req,res)=>{
    const body=req.body;
    try {
        const data=await CartListDB(body);
        if(!data){
            return res.json({
                success:false,
                error:"Cart not Created"
            })
        }
        return res.json({
            success:true,
            message:"cart created",
            data:data,
        })
    } catch (error) {
        console.log(error);
        return res.json({
            success:false,
            error:"somthing went wrong"
        })        
    }
}
const getAllCart=async(req,res)=>{
    const data=await getAllCartDB();
    try {
        if(!data){
            return res.json({
                success:false,
                error:"Order not found"
            })
        }
        return res.json({
            success:true,
            message:"Your All Orders",
            data:data
        })
    } catch (error) {
        console.log(error);
        return res.json({
            success:false,
            error:"Somthing went wrong"
        })
    }
}

const getidCart=async(req,res)=>{
    const {id}=req.params;
    try {
        const data=await getidCartDB(id);
        if(!data){
            return res.json({
                success:false,
                error:"Cart not found",
            })
        }
        return res.json({
            success:true,
            message:"Cart List",
            data:data
        })
    } catch (error) {
        console.log(error);
        return res.json({
            success:false,
            error:"Somthing went wrong"
        })
    }
}

const updatCart=async(req,res)=>{
    const {id}=req.params;
    const body=req.body;
    try {
        const data=await updatCartDB(id,body);
        if(!data){
            return res.json({
                success:false,
                error:"cart not found"
            })
        }
        return res.json({
            success:true,
            message:"Cart updated",
            data:data
        })
    } catch (error) {
        console.log(error);
        return res.json({
            success:false,
            error:"cart not updated"
        })
    }
}
const deleteCart=async(req,res)=>{
    const {id}=req.params;
    try {
        const data=await deleteCartDB(id);
        if(!data){
            return res.json({
                success:false,
                error:"Cart not found"
            })
        }
        return res.json({
            success:true,
            message:"Cart deleted",
        })
    } catch (error) {
        console.log(error);
        return res.json({
            success:false,
            error:"Cart not deleted",
        })
    }
}
module.exports={cartcreated,getAllCart,getidCart,updatCart,deleteCart}