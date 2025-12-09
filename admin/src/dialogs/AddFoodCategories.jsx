import React, { useState } from 'react';
import style from "../styles/addfoodcategories.module.css";

const AddFoodCategories = ({ add }) => {
    const [open, setOpen] = useState(false);
    const onClose = (e) => {
        if (e) e.stopPropagation();
        setOpen(false);
    }

    return (
        <div className={style.button_container}>
            <button onClick={() => setOpen(true)} className={style.btn}>+ Add Category</button>
            {open && <Dialog open={open} onClose={onClose} add={add} />}
        </div>
    )
}

const Dialog = ({ add, onClose }) => {
    const [input, setInput] = useState("");
    const [loading, setLoading] = useState(false);

    const foodCategories = async () => {
        if (!input.trim()) return alert("Please enter a category name");
        try {
            setLoading(true);
            const url = import.meta.env.VITE_SERVER_URL;
            const res = await fetch(`${url}/admin/foodCategories`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization:` Bearer ${localStorage.getItem("token")}`
                },
                body: JSON.stringify({ name: input.trim() }),
            });
            const data = await res.json();
            console.log(data);
            if (!data.success) {
                alert(data.error);
                return;
            }
            add(data.data);
            setInput("");
            onClose();
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className={style.dialog}>
            <div className={style.formcover}>
                <button className={style.close_btn} onClick={onClose}>×</button>
                <h3 className={style.ahading}>Add Food Category</h3>
                <div className={style.afcontainer}>
                    <input
                        className={style.addinput}
                        type="text"
                        placeholder='Enter category name'
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                    />
                </div>
                <div className={style.btncreate}>
                    <button onClick={foodCategories} className={style.savebtn}>
                        {loading ? "Creating..." : "Create"}
                    </button>
                </div>
            </div>
        </div>
    )
}

export default AddFoodCategories;