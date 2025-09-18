const mongoose=require("mongoose");

const userSchema=new mongoose.Schema({
    name:{type:String,require:true},
    email:{type:String,require:true,unique:true},
    password:{type:Number,require:true},
    phone:{type:Number,require:true},
    role:{type:String,enum:["user","admin","delivery Boy"] ,default:"user"}
},
    {timestamps:true}
);
const User=mongoose.model("User",userSchema);
module.exports=User;