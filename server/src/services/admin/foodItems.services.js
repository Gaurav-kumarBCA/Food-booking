const FoodItems=require("../../models/foodItems")

const createFoodListDB=async(body)=>{
    const foodList=new FoodItems(body);
    return await foodList.save();
}

const getAllFoodListDB=async()=>{
    return await FoodItems.find();
}

const getFoodListByIdDB=async(slug)=>{
    return await FoodItems.findOne({slug:slug});
}

const updateFoodListDB=async(id,body)=>{
    return await FoodItems.findByIdAndUpdate(id,body,{new:true});
}

const deleteFoodListDB=async(id)=>{
    return await FoodItems.findByIdAndDelete(id);
}
module.exports={createFoodListDB,getAllFoodListDB,getFoodListByIdDB,updateFoodListDB,deleteFoodListDB}