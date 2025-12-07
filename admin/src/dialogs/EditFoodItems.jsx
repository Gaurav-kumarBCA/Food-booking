import { Pencil } from "lucide-react";
import React, { useState } from "react";
import style from "../styles/editfooditems.module.css";

const EditFoodItems = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button
        onClick={() => setOpen(true)}
        className={style.food_item_btn}
      >
        <Pencil />
      </button>

      {open && <EditForm onClose={() => setOpen(false)} />}
    </div>
  );
};

const EditForm = ({ onClose }) => {
  return (
    <div className={style.edit_back_drop}>
      <div className={style.edit_container}>

        <h2>Edit Food Item</h2>

        <form className={style.edit_form}>
          <label>Food Name</label>
          <input type="text" placeholder="Enter food name" />

          <label>Description</label>
          <input type="text" placeholder="Enter food name" />

          <label>Price</label>
          <input type="number" placeholder="Enter price" />

          <label>Food Category</label>
          <input type="text" placeholder="Enter category" />

          <label>Is Available</label>
          <input type="text" placeholder="Enter food name" />

          <div className={style.btn_group}>
            <button type="button" onClick={onClose} className={style.cancel_btn}>
              Cancel
            </button>
            <button type="submit" className={style.save_btn}>
              Save
            </button>
          </div>
        </form>

      </div>
    </div>
  );
};

export default EditFoodItems;































