const { createRestaurantDB, getAllRestaurantDB, getRestaurantByIdDB, updateRestaurantDB, deleteRestaurantDB } = require("../../services/admin/restaurant.services");
const { generateSlug } = require("../../utils");


const createRestaurant=async(req,res)=>{
    try {
    const body=req.body;
    if(body.name){
        body.slug=generateSlug(body.name)
    }
    const data= await createRestaurantDB(body);
        return res.json({
            success:true,
            message:"Restaurant Created",
            data:data,
        })
    } catch (error) {
        console.log(error);
        return res.json({
            success:false,
            error:"Somthing Went wrong"
        });
    }    
}

const getAllRestaurant=async(req,res)=>{
    try {
        const data=await getAllRestaurantDB();
        return res.json({
            success:"true",
            data:data,
        });
    } catch (error) {
        console.log(error);
        return res.json({
            success:false,
            error:"Restaurant not found"
        });
    }

}

const getRestaurantById=async(req,res)=>{
    try {
        const {slug}=req.params;
        const data=await getRestaurantByIdDB(slug);
        if(!data){
            return res.json({
                success:false,
                error:"Restaurant not found"
            });
        }
        return res.json({
            success:true,
            data:data
        });
    } catch (error) {
        console.log(error);
        return res.json({
            success:false,
            error:"Falied to fatch restaurant"
        });
    }
}


const updateRestaurant=async(req,res)=>{
    const {id}=req.params;
    const body=req.body;
        if(body.name){
        body.slug=generateSlug(body.name)
    }
    try {
        const data=await updateRestaurantDB(id,body);
        if(!data){
            return res.json({
                success:false,
                error:"Restaurant not found",
            })
        }
        return res.json({
            success:true,
            message:"Restaurant Updated",
            data:data
        });
    } catch (error) {
        console.log(error);
        return res.json({
            success:false,
            error:"somthing went wrong"
        });
    }
}

const deleteRestaurant=async(req,res)=>{
    const {id}=req.params;
    try {
        const data= await deleteRestaurantDB(id);
        if(!data){
            return res.json({
                success:false,
                error:"Restaurant not found"
            });
        }

        return res.json({
            success:true,
            message:"Restaurant Deleted"
        });
    } catch (error) {
        console.log(error);
        return res.json({
            success:false,
            error:"somthing went wrong"
        });
    }
}

module.exports={createRestaurant,getAllRestaurant,getRestaurantById,updateRestaurant,deleteRestaurant}