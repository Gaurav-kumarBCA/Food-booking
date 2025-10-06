const { createCategoriesDB, getAllFoodCategoriesDB, getSlugFoodCategoriesDB, updateCategoriesDB, deletefoodCategoriesDB } = require("../../services/admin/FoodCategories.services");
const { generateSlug } = require("../../utils");

const createCategories=async(req,res)=>{
    try {
        const body=req.body;
        if(body.name){
            body.slug=generateSlug(body.name)
        }
        const data=await createCategoriesDB(body);
        return res.json({
            success:true,
            message:"Categories Created Successfully",
            data:data
        });
    } catch (error) {
        console.log(error);
        if(error.code===11000){
            return res.json({
                success:false,
                error:"Categories Already Added"
            })
        }
        return res.json({
            success:false,
            error:"Categories not Created"
        })
    }
}

const getAllFoodCategories=async(req,res)=>{
    try {
     const data=await getAllFoodCategoriesDB();
        return res.json({
        success:true,
        message:"Fetch All Categories",
        data:data
    });
    } catch (error) {
        return res.json({
            success:false,
            error:"Falied to Fetch Food Categories"
        })
    }
}

const getSlugFoodCategories=async(req,res)=>{
        try {
            const data=await getSlugFoodCategoriesDB(req.params.slug);
            return res.json({
                success:true,
                message:"Yes i Found it",
                data:data
            })
        } catch (error) {
            return res.json({
                success:false,
                error:"Falied to fatch food Categories"
            })
            
        }
}

const updateCategories=async(req,res)=>{
const {id}=req.params;
const body=req.body;

console.log(body.name, "this is name");

try {

    if(body.name){
        body.slug=generateSlug(body.name);
    }
    const data=await updateCategoriesDB(id,body);    
    return res.json({
        success:true,
        message:"Updated Food Categories Successfully",
        data:data
    });
} catch (error) {
    console.log(error);
    if(error.code===11000){
        return res.json({
            success:false,
            error:"Same Categories Already Exists"
        })
    }
    return res.json({
        success:false,
        error:"Falied to updated Food Categories"
    });
}
};

const deletefoodCategories=async(req,res)=>{
    const {id}=req.params;
    try {
    const data=await deletefoodCategoriesDB(id);
    return res.json({
        success:true,
        message:"Food Categories Deleted Successfully"
    })
    } catch (error) {
        return res.json({
            success:false,
            error:"Somthing went wrong"
        })
    }
}

module.exports={createCategories,getAllFoodCategories,getSlugFoodCategories,updateCategories,deletefoodCategories}