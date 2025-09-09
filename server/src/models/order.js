const mongoose=require("mongoose");

const orderSchema=new mongoose.Schema({
    user:{type:mongoose.Schema.Types.ObjectId,ref:"User",required:true},
    restaurant:{type:mongoose.Schema.Types.ObjectId,ref:"Restaurant",required:true},
    items:[
        {
            food:{type:mongoose.Schema.Types.ObjectId,ref:"FoodItems"},
            qunatity:Number
        }
    ],
    deliveryAddress:{type:mongoose.Schema.Types.ObjectId,ref:"Address",required:true},
    totalAmount:{type:Number,required:true},
    status:{
        type:String,
        default:"panding",
        enum:["pending","confirmed","preparing","out-of--delivery","delivered","pending"],
    },
    paymentMethod:{type:String,enum:["COD","Online"],default:"COD"},
    paymentStatus:{type:String,enum:["pending","paid","failed"],default:"pending"},
    deliveryPartner:{type:mongoose.Schema.Types.ObjectId,ref:"DeliveryBoy"},
    payment:{type:mongoose.Schema.Types.ObjectId,ref:"Payment"},
    
},{timestamps:true});

const Order=mongoose.model("Order",orderSchema);
module.exports=Order;