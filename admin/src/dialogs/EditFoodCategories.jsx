import { Pencil } from 'lucide-react'
import React, { useState } from 'react'
import style from "../styles/editcategories.module.css"
const EditFoodCategories = ({id,edit,name}) => {
  const [open, setOpen] = useState(false);
  const onClose = () => {
    setOpen(false);
  }
  return (
    <div>
      <button onClick={() => { setOpen(true) }} className={style.editbtn}>
        <Pencil />
      </button>
      {open && <Dialog onClose={onClose} id={id} edit={edit} name={name} />}
    </div>
  )
}

const Dialog = ({ onClose,id,edit,name }) => {
  const [data,setData]=useState([name || ""])
  const editData=async()=>{
    try {
      const url=import.meta.env.VITE_SERVER_URL;
      const res=await fetch(`${url}/admin/foodCategories/${id}`,{
        method:"PUT",
        headers:{
          "Content-Type":"application/json",
          Authorization:`Bearer ${localStorage.getItem("token")}`
        },
         body: JSON.stringify({ name: data.trim() }),
      });
      const resdata=await res.json();
      console.log(resdata);
      if(!resdata.success){
        return alert(resdata.error);
      }
      const n=resdata.data.name;
      const s=resdata .data.slug;
      edit(id,n,s)
      onClose()
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className={style.edit_overlap}>
      <div className={style.editform}>
      <h2>Edit Food Categories</h2>
      <div className={style.editdata}>
        <label >Name:-</label>
        <input className={style.edit_inp} 
        type="text" 
        placeholder='Edit Food Categories'
        value={data}
        onChange={(e)=>setData(e.target.value)}
         />
      </div>
      <div className={style.edit_btn}>
        <button onClick={onClose}>Cancle</button>
        <button onClick={editData}>Edit</button>
      </div>
        </div>
    </div>
  )
}

export default EditFoodCategories