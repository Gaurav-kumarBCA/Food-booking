const mongoose=require("mongoose");
const reviewSchema= new mongoose.Schema({
    user:{type:mongoose.Schema.Types.ObjectId,ref:"User",required:true},
    restaurant:{type:mongoose.Schema.Types.ObjectId,ref:"Restaurant"},
    food:{type:mongoose.Schema.Types.ObjectId,ref:"FoodItems"},
    rating:{type:Number,min:1,max:5,required:true},
    comment:String
},{timestamps:true});
const Review= mongoose.model("Review",reviewSchema);
module.exports=Review;