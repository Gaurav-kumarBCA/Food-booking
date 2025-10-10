import {  Trash2 } from 'lucide-react'
import React, { useState } from 'react'
import style from "../styles/deletefoodcategories.module.css"

const DeleteFoodCategories = ({id,remove}) => {
    const [open, setOpen] = useState(false);

    const onClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <button className={style.deleteicon} onClick={() => setOpen(true)}>
                <Trash2 />
            </button>
            {open && <Dialog onClose={onClose} id={id} remove={remove} />}
        </div>
    );
};

const Dialog = ({ id ,remove, onClose }) => {
    const deleteCategories=async()=>{
        try {
            const url=import.meta.env.VITE_SERVER_URL;
            const res=await fetch(`${url}/admin/foodCategories/${id}`,{
                method:"DELETE",
                headers:{
                    "Content-Type":"application/json",
                    Authorization:`Bearer ${localStorage.getItem("token")}`
                },
            });
            const data=await res.json();
            console.log(data);
            if(!data.success){
                alert(data.error || "Falied to delete categories")
            }
            onClose();
            remove(id)
        } catch (error) {
            console.log(error);            
        }
    }
    return (
        <div className={style.overlay}>
            <div className={style.dialog_box}>
                <h2 className={style.delete_hading}>Delete Confirmation</h2>
                <p className={style.info_delete}>Are you sure you want to delete this category?</p>
                <div className={style.btns}>
                    <button onClick={onClose}>Cancel</button>
                    <button onClick={deleteCategories}>Delete</button>
                </div>
            </div>
        </div>
    );
};

export default DeleteFoodCategories;