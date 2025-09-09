const { createFoodListDB, getAllFoodListDB, getFoodListByIdDB, updateFoodListDB, deleteFoodListDB } = require("../../services/admin/foodItems.services");
const{ generateSlug}=require("../../utils/index")
const createFoodList=async(req,res)=>{
    const body=req.body;
    console.log(body);
    try {
        if(body.name){
            body.slug= generateSlug(body.name);
        }
        const data= await createFoodListDB(body);
        return res.json({
            success:true,
            message:"Food Item Created",
            data:data
        });
    } catch (error) {
        console.log(error);
        if(error.code===11000){
            return res.json({
                success:true,
                error:"Food item already exist"
            });
        }
        return res.json({
            success:false,
            error:"Food Item not Created",
        })
    }
}

const getAllFoodList=async(req,res)=>{
    try {
        const data= await getAllFoodListDB();
    return res.json({
        success:true,
        message:"All food List",
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

const getFoodListById=async(req,res)=>{
    const {slug}= req.params;
    try {
        const data= await getFoodListByIdDB(slug);
        if(!data){
            return res.json({
                success:false,
                error:"Food Item not found",
            })
        }
        return res.json({
            success:true,
            message:"Selected food list",
            data:data
        });
    } catch (error) {
        console.log(error);
        return res.json({
            success:false,
            error:"Somthing went wrong"
        })
    }

}

const updateFoodList=async(req,res)=>{
    const {id}=req.params;
    const body=req.body;
    try {
        if(body.name){
            body.slug=generateSlug(body.name)
        }
        const data=await updateFoodListDB(id,body);
        if(!data){
            return res.json({
                success:false,
                error:"Food item not found"
            })
        }
        return res.json({
            success:true,
            message:"Food list Updated",
            data:data
        });
    } catch (error) {
        console.log(error);
        return res.json({
            success:false,
            error:"Somthing went wrong"
        })
    }
};

const deleteFoodList=async(req,res)=>{
    const {id}=req.params;
    try {
        const data = await deleteFoodListDB(id);
        if(!data){
            return res.json({
                success:false,
                error:"Food not found"
            })
        }
        return res.json({
            success:true,
            message:"Food Item Deleted"
        })
    } catch (error) {
        console.log(error);
        return res.json({
            success:false,
            error:"Somthing went wrong"
        })
    }
}
module.exports={createFoodList,getAllFoodList,getFoodListById,updateFoodList,deleteFoodList}