const Address=require("../../models/address");

const createAddressDB=async({address,city,state,pincode})=>{
    const newAddrees= new Address({address,city,state,pincode});
    return await newAddrees.save();
}

const getAllAddressDB=async()=>{
    return await Address.find();
}

const updateAddressByIDDB=async(id,body)=>{
return await Address.findByIdAndUpdate(id,body,{new:true,runValidators:true});
};

const deleteAddressByIDDB=async(id)=>{
    return await Address.findByIdAndDelete(id);
}

module.exports={createAddressDB,getAllAddressDB,updateAddressByIDDB,deleteAddressByIDDB};