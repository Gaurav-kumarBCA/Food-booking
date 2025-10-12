const mongoose=require("mongoose");

const foodItemsList=new mongoose.Schema({
    name:{type:String,required:true},
    slug: { type: String, unique: true ,required:true},
    description:{type:String,required:true},
    price:{type:Number,required:true},
    restaurant:{type:mongoose.Schema.Types.ObjectId,ref:"Restaurant"},
    foodcategories:{type:mongoose.Schema.Types.ObjectId,ref:"FoodItemCategories"},
    isAvailable:{type:Boolean,default:true},
    imageUrl:String,
},{timestamps:true});

const FoodItems=mongoose.model("FoodItems",foodItemsList);

module.exports=FoodItems;