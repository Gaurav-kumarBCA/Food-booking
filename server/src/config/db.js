const mongoose=require(`mongoose`);
const connectDB=async()=>{
    try {
        await mongoose.connect(process.env.DB_URI);
        console.log("database connected");
    } catch (error) {
        console.log("database not connected",error);
        process.exit(1);
    }
};

module.exports={connectDB};