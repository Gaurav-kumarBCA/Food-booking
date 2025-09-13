const CartList=require("../../models/cart");

const CartListDB=async(body)=>{
   const cart=new CartList(body);
   return (await (await cart.save()).populate("items.food")).populate("user");
}

const getAllCartDB=async()=>{
    return await CartList.find().populate("items.food").populate("user")
}

const getidCartDB=async(id)=>{
    return await CartList.findById(id);
}

const updatCartDB=async(id,body)=>{
    return await CartList.findByIdAndUpdate(id,body,{new:true});
}

const deleteCartDB=async(id)=>{
    return await CartList.findByIdAndDelete(id);

}
module.exports={CartListDB,getAllCartDB,getidCartDB,updatCartDB,deleteCartDB};