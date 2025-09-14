const Review=require("../../models/review");

const reviewCreatedDB=async(body)=>{
    const review=new Review(body);
    return (await (await (await review.save()).populate("food")).populate("user")).populate("restaurant");
}

const getAllreviewDB=async()=>{
    return await Review.find().populate("food").populate("user").populate("restaurant");
}

const getidreviewDB=async(id)=>{
    return await Review.findById(id).populate("food").populate("user").populate("restaurant");
}

const updatedreviewDB=async(id, body)=>{
    return await Review.findByIdAndUpdate(id,body).populate("food").populate("user").populate("restaurant");
}

const deletedreviewDB=async(id)=>{
    return await Review.findByIdAndDelete(id);
}
module.exports={reviewCreatedDB,getAllreviewDB,getidreviewDB,updatedreviewDB,deletedreviewDB}