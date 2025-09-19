const { registerUserDB, finduserDB } = require("../../services/user/user.services");
const { generateToken, hashpassword, comparePassword } = require("../../utils");

const register=async(req,res)=>{
    const {name,email,password,phone,role}=req.body;
    if(!name || !email || !password || !phone){
        return res.json({
            success:false,
            error:"All field are required"
        });
    }
    try {
        const hashPswd=await hashpassword(password);
        const user=await registerUserDB({name,email,password:hashPswd,phone,role:role || "user"});
        user.password=undefined;
        user._v=undefined;
        return res.json({
            success:true,
            data:user,
            message:"User are register successfully"
        })
    } catch (error) {
        console.log("address create error ",error)
        if(error.code===11000){
            return res.json({
                success:false,
                error:"User already exists!"
            });
        }
        res.json({
            success:false,
            error:"User registration failed"
        })
    }
}

const login=async(req,res)=>{
    const {email,password}=req.body;
    if(!email || !password){
        return res.json({
            success:false,
            error:"All fields are required",
        });
    }
    try {
        const user=await finduserDB(email)
        if(!user){
            return res.json({
                success:false,
                error:"user does't exist!"
            })
        }

        const isValid=await  comparePassword(password,user.password);
        if(!isValid){
            return res.json({
                success:false,
                error:"Wrong Password"
            });
        }
        user.password=undefined;

        const {accessToken,refreshToken}= generateToken({
            id:user._id,
            name:user.name,
            email:user.email,
            role:user.role,
        });
        return res.json({
            success:true,
            message:"user loggnied successfully",
            data:{user,accessToken,refreshToken},
        })
    } catch (error) {
        return res.json({
            success:false,
            error:"something went wrong",
        })
    }
}


module.exports={register,login}