import React, { useState } from 'react'
import style from "../styles/addfoodcategories.module.css"
const AddFoodCategories = ({ add }) => {
    const [open, setOpen] = useState(false);
    const onClose = (e) => {
        if (e) e.stopPropagation();
        setOpen(false);
        console.log("hi gaurav");
    }
    return (
        <div onClick={() => { setOpen(true) }} className={style.button_container}>
            <button onClick={() => { setOpen(true) }} className={style.btn}>Add Categories</button>
            <Dialog open={open} onClose={onClose} add={add} />
        </div>
    )
}

const Dialog = ({ add, open, onClose }) => {
    const [input, setInput] = useState("");
    const [loading, setLoading] = useState(false);

    const foodCategories = async () => {
        try {
            setLoading(true);
            const url = import.meta.env.VITE_SERVER_URL;
            const res = await fetch(`${url}/admin/foodCategories`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${localStorage.getItem("token")}`
                },
                body: JSON.stringify({ name: input.trim() }),
            });
            const data = await res.json();
            console.log("Food Categories", data);
            if (!data.success) {
                alert(data.error);
                return
            }
            add(data.data);
            setInput("");
            onClose();
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false);
        }
    }
    return (
        <div className={`${open ? style.dialog : style.dialog2}`}>
            <div className={style.formcover}>
                <div className={style.coverbtn}>
                    <button className={style.fbtn} onClick={onClose} >X</button>
                </div>
                <h3 className={style.ahading}>Add Food Categories</h3>
                <div className={style.afcontainer}>
                    <label > Name :-</label>
                    <input className={style.addinput} type="text" placeholder='Food Categories' value={input} onChange={(e) => setInput(e.target.value)} />
                </div>
                <div className={style.btncreate}>
                    <button onClick={foodCategories} className={style.savebtn}>{loading ? "Creating..." : "Create"}</button>
                </div>
            </div>
        </div>
    )
}

export default AddFoodCategories;
