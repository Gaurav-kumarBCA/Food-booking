const mongoose=require("mongoose");
const paymentSchema= new mongoose.Schema({
    order:{type:mongoose.Schema.Types.ObjectId,ref:"Order",required:true},
    user:{type:mongoose.Schema.Types.ObjectId,ref:"User",required:true},
    method:{type:String,enum:[ "COD","UPI","Card","NetBanking"],required:true},
    status: { type: String, enum: ['Success', 'Failed', 'Pending'], default: 'Pending' },
    amount:{type:String,required:true},
    
},{timestamps:true});

const Payment=mongoose.model("payment",paymentSchema);
module.exports= Payment;