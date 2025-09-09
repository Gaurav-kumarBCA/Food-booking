require("dotenv").config();
const express=require("express");
const {connectDB}=require("./src/config/db")
const cors=require("cors")
const authRoutes=require("./src/routes/auth.routers");
const user=require("./src/routes/user/index")
const adminRoutres=require("./src/routes/admin/index")
connectDB();


const app=express();
const PORT=4000;
app.use(cors())
app.use(express.json());
app.get("/",(req,res)=>{
    res.send("hello server");
});

app.use("/auth",authRoutes);

app.use("/user",user);

app.use("/admin",adminRoutres)

app.listen(PORT,()=>{
    console.log(`server in running http://localhost:${PORT}`);
});