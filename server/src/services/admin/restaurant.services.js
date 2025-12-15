const Restaurant=require("../../models/restaurant");

const createRestaurantDB=async(body)=>{
    const newRestaurant= new Restaurant(body);
    return (await (await (await  newRestaurant.save()).populate("category")).populate("menu.foodList")).populate("owner")
}
 
const getAllRestaurantDB=async()=>{
    return await Restaurant.find().populate({
        path:"owner",
        select:"name email phone"
    }).populate("category").populate({
        path:"menu.foodList"
    });;

}

const getRestaurantByIdDB=async(slug)=>{
    return await Restaurant.findOne({slug:slug}).populate({
        path:"owner",
        select:"name email phone"
    }).populate({
        path:"menu.foodList"
    });
}

const updateRestaurantDB=async(id,body)=>{
    return await Restaurant.findByIdAndUpdate(id,body,{new:true});
}

const deleteRestaurantDB=async(id)=>{
    return await Restaurant.findByIdAndDelete(id);
}

module.exports={createRestaurantDB,getAllRestaurantDB,getRestaurantByIdDB,updateRestaurantDB,deleteRestaurantDB};