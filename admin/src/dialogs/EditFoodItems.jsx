import { Pencil } from "lucide-react";
import React, { useState } from "react";
import style from "../styles/editfooditems.module.css";



const EditFoodItems = ({ foodCategory, items, update }) => {
  const [open, setOpen] = useState(false);
  const onClose = () => { setOpen(false) };

  return (
    <div>
      <button
        onClick={() => setOpen(true)}
        className={style.food_item_btn}
      >
        <Pencil />
      </button>

      {open && <EditForm onClose={onClose} foodCategory={foodCategory} items={items} update={update} />}
    </div>
  );
};




const EditForm = ({ onClose, foodCategory, items, update }) => {

  const [data, setData] = useState({
    name: items.name,
    description: items.description,
    price: items.price,
    foodcategories: items.foodcategories?._id || "",
    isAvailable: items.isAvailable,
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData(prev => ({ ...prev, [name]: value }));
  };

  const editfooditems = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);

      const url = import.meta.env.VITE_SERVER_URL;

      const res = await fetch(`${url}/admin/fooditems/${items._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: ` Bearer ${localStorage.getItem("token")}`
        },
        body: JSON.stringify(data),
      });

      const resData = await res.json();

      if (!resData.success) {
        alert(resData.error);
        setLoading(false);
        return;
      }

      update(items._id, resData.data);
      setLoading(false);
      onClose();

    } catch (error) {
      console.log(error);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={style.edit_back_drop}>
      <div className={style.edit_container}>
        <h2>Edit Food Item</h2>

        <form className={style.edit_form} onSubmit={editfooditems}>

          <label>Food Name</label>
          <input
            type="text"
            name="name"
            value={data.name}
            onChange={handleChange}
          />

          <label>Description</label>
          <input
            type="text"
            name="description"
            value={data.description}
            onChange={handleChange}
          />

          <label>Price</label>
          <input
            type="number"
            name="price"
            value={data.price}
            onChange={handleChange}
          />

          <label>Food Category</label>
          <select
            name="foodcategories"
            value={data.foodcategories}
            onChange={handleChange}
          >
            <option value="">Select a Category</option>
            {foodCategory.map(cat => (
              <option key={cat._id} value={cat._id}>{cat.name}</option>
            ))}
          </select>

          <label>Is Available (true/false)</label>
          <input
            type="text"
            name="isAvailable"
            value={data.isAvailable}
            onChange={handleChange}
          />

          <div className={style.btn_group}>
            <button type="button" onClick={onClose} className={style.cancel_btn}>
              Cancel
            </button>
            <button type="submit" className={style.save_btn}>
              {loading ? "Updating..." : "Update"}
            </button>
          </div>
        </form>

      </div>
    </div>
  );
};


export default EditFoodItems;

























