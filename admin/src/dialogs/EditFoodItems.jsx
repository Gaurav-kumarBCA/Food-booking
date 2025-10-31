import { Pencil } from 'lucide-react'
import React from 'react'
import style from "../styles/editfooditems.module.css"
import { useState } from 'react'

const EditFoodItems = () => {
  const [open,setOpen]=useState(false)
  const onClose=()=>{
    setOpen(false);
  }
  return (
    <div>
        <button onClick={()=>setOpen(true)} className={style.food_item_btn}><Pencil/></button>
        {open && <Editfooditems onClose={onClose}/>}
    </div>
  )
}

const Editfooditems=({onClose})=>{
const [form,setFormState]=useState({})
  const editfooditems=async()=>{
    try {
      const url=import.meta.env.VITE_SERVER_VITE;
      const res=await fetch(`${url}/admin/fooditems/${id}`,{
        method:"PUT",
        headers:{
          "Content-Type":"application/json",
          Authorization:`Bearer ${localStorage.getItem("token")}`
        },
        body:JSON.stringify(form),
      });
      const data=res.json();
      console.log(data);
      if(!data.success){
        alert(data.error);
        return
      }
    } catch (error) {
      console.log(error);
    }
  }
  return(
    <div className={style.edit_back_drop}>
      <div className={style.edit_food_form}>
        <div className={style.edit_food_hading}>
        <h1>Edit Food Item</h1>
        <button onClick={onClose}>X</button>
        </div>

        <div className={style.edit_form}>
                   <label className={style.label_name}>Food Name</label>
                   <input className={style.edit_inp}  type="text" placeholder='Enter Food name'/>
                   </div>

                    <div className={style.edit_form}>
                   <label className={style.label_name}>Food Name</label>
                   <input className={style.edit_inp}  type="text" placeholder='Enter Food name'/>
                   </div>

                    <div className={style.edit_form}>
                   <label className={style.label_name}>Food Name</label>
                   <input className={style.edit_inp}  type="text" placeholder='Enter Food name'/>
                   </div>

                    <div className={style.edit_form}>
                   <label className={style.label_name}>Food Name</label>
                   <input className={style.edit_inp}  type="text" placeholder='Enter Food name'/>
                   </div>

                    <div className={style.edit_form}>
                   <label className={style.label_name}>Food Name</label>
                   <input className={style.edit_inp}  type="text" placeholder='Enter Food name'/>
                   </div>

                   
                   <div className={style.edit_btn}>
                    <button onClick={onClose}>Cancle</button>
                    <button onClick={editfooditems}>Update</button>
                   </div>

      </div>
    </div>
  )
}

export default EditFoodItems