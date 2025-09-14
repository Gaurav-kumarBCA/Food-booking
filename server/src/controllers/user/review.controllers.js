const { reviewCreatedDB, getAllreviewDB, getidreviewDB, updatedreviewDB, deletedreviewDB } = require("../../services/user/review.services");

const reviewCreated=async(req,res)=>{
    const body=req.body;
    try {
        const data=await reviewCreatedDB(body);
        if(!data){
            return res.json({
                success:false,
                error:"review not added",
            })
        }
        return res.json({
            success:true,
            message:"review added",
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
const getAllreview=async(req,res)=>{
    try {
        const data=await getAllreviewDB();
        if(!data){
            return res.json({
                success:false,
                error:"review not found"
            })
        }
        return res.json({
            success:true,
            message:"All review list",
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

const getidreview=async(req,res)=>{
    const {id}=req.params;
    try {
        const data=await getidreviewDB(id);
        if(!data){
            return res.json({
                success:false,
                error:"review not found"
            })
        }
        return res.json({
            success:true,
            message:"your review",
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

const updatedreview=async(req,res)=>{
    const {id}=req.params;
    const body=req.body;
    try {
        const data=await updatedreviewDB(id,body);
        if(!data){
            return res.json({
                success:false,
                error:"review not found"
            })
        }
        return res.json({
            success:true,
            message:"review updated",
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

const deletedreview=async(req,res)=>{
    const {id}=req.params;
    try {
        const data=await deletedreviewDB(id);
        if(!data){
            return res.json({
                success:true,
                error:"review not deleted"
            })
        }
        return res.json({
            success:true,
            message:"review deleted"
        })
    } catch (error) {
        console.log(error);
        return res.json({
            success:false,
            error:"somthing went wrong"
        })
    }
}
module.exports={reviewCreated,getAllreview,getidreview,updatedreview,deletedreview}