const Address=require("../../models/address");

const createAddressDB=async(data)=>{
    const newAddrees= new Address(data);
    return (await newAddrees.save()).populate("user");
}

const getAllAddressDB=async(id)=>{
    return await Address.find({user:id}).populate("user");
}


const updateAddressByIDDB=async(id,body)=>{
return await Address.findByIdAndUpdate(id,body,{new:true,runValidators:true});
};

const deleteAddressByIDDB=async(id)=>{
    return await Address.findByIdAndDelete(id);
}

module.exports={createAddressDB,getAllAddressDB,updateAddressByIDDB,deleteAddressByIDDB};