const mongoose=require("mongoose");

const foodItemsList=new mongoose.Schema({
    name:{type:String,required:true},
    slug: { type: String, unique: true ,required:true},
    description:{type:String,required:true},
    price:{type:Number,required:true},
    category:{type:String,enum:["veg","non-veg","beverage","dessert"]},
    restaurant:{type:mongoose.Schema.Types.ObjectId,ref:"Restaurant"},
    isAvailable:{type:Boolean,default:true},
    imageUrl:String,
},{timestamps:true});

const FoodItems=mongoose.model("FoodItrms",foodItemsList);

module.exports=FoodItems;