// const FoodItemCategories=require("../../models/foodCatrgories");

const FoodItemCategories = require("../../models/foodCatrgories");
const FoodItems = require("../../models/foodItems");

const createCategoriesDB=async(body)=>{
    const foodCategories=new FoodItemCategories(body);
    return await foodCategories.save();
};


const getAllFoodCategoriesDB=async()=>{
    const categories= await FoodItemCategories.find({}).lean();
    const foodCategoriesWithTotal=await Promise.all(
        categories.map(async(cat)=>{
            const total=await FoodItems.countDocuments({category:cat._id});
            return {...cat,total};
        })
    );
    return foodCategoriesWithTotal;
};


const getSlugFoodCategoriesDB=async(slug)=>{
return await FoodItemCategories.findOne({slug});
};


const updateCategoriesDB=async(id,body)=>{
return await FoodItemCategories.findByIdAndUpdate(id,body,{new:true});
};


const deletefoodCategoriesDB=async(id)=>{
    return await FoodItemCategories.findByIdAndDelete(id);
}


module.exports={createCategoriesDB,getAllFoodCategoriesDB,getSlugFoodCategoriesDB,updateCategoriesDB,deletefoodCategoriesDB}