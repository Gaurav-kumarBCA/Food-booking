const Restaurant=require("../../models/restaurant");

const createRestaurantDB=async(body)=>{
    const newRestaurant=await new Restaurant(body);
    return  newRestaurant.save()
}
 
const getAllRestaurantDB=async()=>{
    return await Restaurant.find().populate({
        path:"owner",
        select:"name email phone"
    });

}

const getRestaurantByIdDB=async(id)=>{
    return await Restaurant.findById(id).populate({
        path:"owner",
        select:"name email phone"
    });;
}

const updateRestaurantDB=async(id,body)=>{
    return await Restaurant.findByIdAndUpdate(id,body,{new:true});
}

const deleteRestaurantDB=async(id)=>{
    return await Restaurant.findByIdAndDelete(id);
}

module.exports={createRestaurantDB,getAllRestaurantDB,getRestaurantByIdDB,updateRestaurantDB,deleteRestaurantDB};