const mongoose=require("mongoose")

const foodCategories=new mongoose.Schema({
    name:{type:String,required:true},
    slug:{type:String,unique:true,required:true}
});
const FoodItemCategories=mongoose.model("FoodItemCategories",foodCategories);

module.exports=FoodItemCategories;