const mongoose=require("mongoose");

const cartSchema= new mongoose.Schema({
    user:{type:mongoose.Schema.Types.ObjectId,ref:"User",required:true},
    items:[{
        food:{type:mongoose.Schema.Types.ObjectId,ref:"FoodItrms",required:true},
        quantity:{type:Number,default:1},
    }],
    totalPrice:{type:Number,default:0},
},{timestamps:true});

const CartList=mongoose.model("CartList",cartSchema);

module.exports= CartList;