import { Trash2 } from 'lucide-react'
import React, { useState } from 'react'
import style from "../styles/deletefooditems.module.css"

const DeleteFoodItems = ({removefood,id}) => {
  const [open,setOpen]=useState(false)
  return (
    <div>
        <button onClick={()=>setOpen(true)} className={style.delete_food_btn}><Trash2/></button>
        {open && <DeleteFoodDialog setOpen={setOpen} removefood={removefood} id={id}/>}
    </div>
  )
}

const DeleteFoodDialog=({setOpen ,removefood ,id})=>{
  const deleteFoodDialog=async()=>{
    try {
      const url=import.meta.env.VITE_SERVER_URL;
      const res=await fetch(`${url}/admin/fooditems/${id}`,{
        method:"DELETE",
        headers:{
          "Content-Type":"application/json",
          Authorization:`Bearer ${localStorage.getItem("token")}`
        },
      });
      const data=await res.json();
      console.log(data);
      if(!data.success){
        return alert(data.error);
      }
      setOpen(false);
      removefood(id)
    } catch (error) {
      console.log(error);
    }
  }
  return(
    <div className={style.delete_dialog_box}>
      <div className={style.delete_food_box}>
      <div className={style.delete_dialog_hading_box}>
        <h1>Delete Food Item</h1>
      </div>
      <p className={style.delete_dialog_para_box}>Are you sure you want to delete this food items?</p>
      <div className={style.delete_btn}>
        <button onClick={()=>setOpen(false)}>Cancle</button>
        <button onClick={deleteFoodDialog}>Delete</button>
      </div>
      </div>

    </div>
  )
}

export default DeleteFoodItems