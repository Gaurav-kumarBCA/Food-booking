import { Pencil } from 'lucide-react';
import React, { useState } from 'react';
import style from "../styles/editcategories.module.css";

const EditFoodCategories = ({ id, edit, name }) => {
    const [open, setOpen] = useState(false);
    const onClose = () => setOpen(false);

    return (
        <div>
            <button onClick={() => setOpen(true)} className={style.editbtn}>
                <Pencil />
            </button>
            {open && <Dialog onClose={onClose} id={id} edit={edit} name={name} />}
        </div>
    )
}

const Dialog = ({ onClose, id, edit, name }) => {
    const [data, setData] = useState(name || "");
    const [loading, setLoading] = useState(false);

    const editData = async () => {
        if (!data.trim()) return alert("Please enter a name");
        try {
            setLoading(true);
            const url = import.meta.env.VITE_SERVER_URL;
            const res = await fetch(`${url}/admin/foodCategories/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    Authorization:` Bearer ${localStorage.getItem("token")}`
                },
                body: JSON.stringify({ name: data.trim() }),
            });
            const resData = await res.json();
            if (!resData.success) return alert(resData.error);
            edit(id, resData.data.name, resData.data.slug);
            onClose();
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className={style.edit_overlap}>
            <div className={style.editform}>
                <button className={style.close_btn} onClick={onClose}>×</button>
                <h2 className={style.ahading}>Edit Food Category</h2>
                <div className={style.editdata}>
                    <input
                        className={style.edit_inp}
                        type="text"
                        value={data}
                        placeholder="Edit Category Name"
                        onChange={(e) => setData(e.target.value)}
                    />
                </div>
                <div className={style.edit_btn}>
                    <button onClick={onClose}>Cancel</button>
                    <button onClick={editData}>{loading ? "Updating..." : "Update"}</button>
                </div>
            </div>
        </div>
    )
}

export default EditFoodCategories;