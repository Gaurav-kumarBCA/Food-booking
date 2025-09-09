const { createAddressDB,getAllAddressDB, updateAddressByIDDB, deleteAddressByIDDB } = require("../../services/user/address.services");

const createAddress= async(req,res)=>{
try {
    const {address,city,state,pincode}=req.body;
    if(!address || !city || !state || !pincode){
    return res.json({
        success:false,
        error:"All fields are required",
        required:["address","city","state","pincode"],
    })
}
    const data=await createAddressDB({address,city,state,pincode})
    console.log(data);
    return res.json({
        success:true,
        message:"Your address are created successfully",
        data:data,
    });
    
} catch (error) {
    return res.json({
        success:false,
        error:"somthing went wrong",
    });
}

};

const getAllAddress=async(req,res)=>{
        try {
            const data=await getAllAddressDB();
        return res.json({
            success:true,
            data:data,
        })
        } catch (error) {
            return res.json({
                success:false,
                error:"Address not found",
            });
        }
};

const updateAddressByID=async(req,res)=>{
        const {id}=req.params;
        const body=req.body;
        try {
            const data=await updateAddressByIDDB(id,body);
            if(!data){
                return res.json({
                    success:false,
                    error:"Address not found"
                });
            }
                return res.json({
                    success:true,
                    message:"Address updated",
                    data:data,
                });
        } catch (error) {
            console.log(error)
            return res.json({
                success:false,
                error:"somthing went wrong"
            });
        }
};


const deleteAddressByID=async(req,res)=>{
    const {id}=req.params;
    try {
        const data= await deleteAddressByIDDB(id);
        return res.json({
            success:true,
            message:"Address Deleted",
            data:data,
        })
    } catch (error) {
        console.log(error);
        return res.json({
            success:false,
            error:"Somthing went wrong"
        });
    }
};

module.exports={createAddress,getAllAddress,updateAddressByID,deleteAddressByID}