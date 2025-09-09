const mongoose= require("mongoose")

const restaurantSchema=new mongoose.Schema({
    name:{type:String,required:true},
    slug: { type: String, unique: true ,required:true},
    owner:{type:mongoose.Schema.Types.ObjectId, ref:"User",required:true},
    email:String,
    address:{
        line1:String,
        line2:String,
        city:String,
        state:String,
        pincode:String,
    },
    menu:[{
        type: mongoose.Schema.Types.ObjectId,ref:"Food"
    }],
    rating:{type:Number,default:0},
},
    {timestamps:true}
) ;

const Restaurant = mongoose.model("Restaurant",restaurantSchema);

module.exports= Restaurant;