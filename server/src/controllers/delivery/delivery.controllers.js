const { deliveryboyCreatedDB, getAllDeliveryBoyDB, getidDeliveryBoyDB, updateDeliveryBoyDB, deleteDeliveryBoyDB } = require("../../services/delivery/delivery.services");
const { generateSlug } = require("../../utils/index");

const deliveryboyCreated=async(req,res)=>{
    try {
        const {name,phone,vehicleNo,isAvalable}=req.body;
        if(!name || !phone || !vehicleNo || !isAvalable){
             return res.json({
                success:false,
                error:"All field are required",
                required:["name","phone","vehicleNo","isAvalable"]
             })
        }
        const slug=generateSlug(name)
        const data=await deliveryboyCreatedDB({name,phone,vehicleNo,isAvalable,slug});
        if(!data){
            return res.json({
                success:false,
                error:"Delivery Boy not Added"
            })
        }
        return res.json({
            success:true,
            message:"Delivery Boy Created",
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

const getAllDeliveryBoy=async(req,res)=>{
    try {
        const data =await getAllDeliveryBoyDB();
        if(!data){
            return res.json({
                success:false,
                error:"Delivery Boy not found"
            })
        }
        return res.json({
            success:true,
            message:"All Delivery Boy List",
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

const getidDeliveryBoy=async(req,res)=>{
  const {id}=req.params;
  try {
    const data=await getidDeliveryBoyDB(id);
    if(!data){
        return res.json({
            success:false,
            error:"Delivery Boy not found"
        })
    }
    return res.json({
        success:true,
        message:"Delivery Boy found",
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

const updateDeliveryBoy=async(req,res)=>{
   const {id}=req.params;
   const body=req.body;
   try {
    if(body.name){
        body.slug=generateSlug(body.name)
    }
    const data=await updateDeliveryBoyDB(id,body);
    if(!data){
        return res.json({
            success:false,
            error:"Delivery Boy not found"
        })
    }
    return res.json({
        success:true,
        message:"Delivery Boy found",
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

const deleteDeliveryBoy=async(req,res)=>{
    const {id}=req.params;
    try {
        const data=await deleteDeliveryBoyDB(id);
        if(!data){
            return res.json({
                success:false,
                error:"Delivery Boy not found"
            })
        }
        return res.json({
            success:true,
            message:"Deleted Delivery Boy"
        })
    } catch (error) {
        console.log(error);
        return res.json({
            success:false,
            error:"somthing went wrong"
        })
    }
}

module.exports={deliveryboyCreated,getAllDeliveryBoy,getidDeliveryBoy,updateDeliveryBoy,deleteDeliveryBoy};