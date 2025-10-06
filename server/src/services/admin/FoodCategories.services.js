// const FoodItemCategories=require("../../models/foodCatrgories");

const FoodItemCategories = require("../../models/foodCatrgories");

const createCategoriesDB=async(body)=>{
    const foodCategories=new FoodItemCategories(body);
    return await foodCategories.save();
};


const getAllFoodCategoriesDB=async()=>{
    return await FoodItemCategories.find();
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