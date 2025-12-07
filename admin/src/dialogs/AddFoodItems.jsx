// import React, { useState } from 'react'
// import style from "../styles/addfooditems.module.css"

// const AddFoodItems = ({ addfooditems, foodCategory }) => {
//     const [open, setOpen] = useState(false);
//     const onClose = () => {
//         setOpen(false)
//     }
//     return (
//         <div className={style.fooditem_container}>
//             <button onClick={() => setOpen(true)} className={style.addfooditems_btn}>ADD FOOD</button>
//             {open && <Dialog onClose={onClose} addfooditems={addfooditems} foodCategory={foodCategory} />}
//         </div>
//     )
// }

// const Dialog = ({ onClose, addfooditems, foodCategory }) => {
//     const [input, setInput] = useState({
//         name: "",
//         description: "",
//         price: 0,
//         foodcategories: "",
//         isAvailable: ""
//     });
//     const addfooditem = async () => {
//         try {
//             const url = import.meta.env.VITE_SERVER_URL;
//             const res = await fetch(`${url}/admin/fooditems`, {
//                 method: "POST",
//                 headers: {
//                     "Content-Type": "application/json",
//                     Authorization: `Bearer ${localStorage.getItem("token")}`
//                 },
//                 body: JSON.stringify(input),
//             });
//             const data = await res.json();
//             console.log(data);
//             if (!data.success) {
//                 return alert(data.error);
//             }
//             const fixedItem = {
//                 ...data.data,
//                 foodcategories: data.data.foodcategories?._id   // Convert object → ID
//             };

//             addfooditems(fixedItem);

//             setInput({
//                 name: "",
//                 description: "",
//                 price: 0,
//                 foodcategories: "",
//                 isAvailable: ""
//             })
//             onClose();
//         } catch (error) {
//             console.log(error);
//         }
//     }

//     return (
//         <div className={style.food_backdrop}>
//             <div className={style.food_form}>
//                 <div className={style.form_hading_food}>
//                     <h1>Add Food Items</h1>
//                     <button onClick={onClose}>X</button>
//                 </div>
//                 <div className={style.food_name_form}>
//                     <label>Food Name</label>
//                     <input className={style.name_inp} name='name' type="text" placeholder='Enter Food name' value={input.name} onChange={(e) => setInput({ ...input, [e.target.name]: e.target.value })} />
//                 </div>

//                 <div className={style.food_name_form}>
//                     <label>Description</label>
//                     <textarea className={style.name_inp} name='description' type="text" placeholder='Enter Food Description' value={input.description} onChange={(e) => setInput({ ...input, [e.target.name]: e.target.value })} />
//                 </div>

//                 <div className={style.food_name_form}>
//                     <label>Price</label>
//                     <input className={style.name_inp} name='price' type="number" placeholder='Enter Food Price' value={input.price} onChange={(e) => setInput({ ...input, [e.target.name]: e.target.value })} />
//                 </div>

//                 <div className={style.food_name_form}>
//                     <label>Food Categories</label>
//                     <select className={style.option} name="foodcategories" value={input.foodcategories} onChange={(e) => setInput({ ...input, [e.target.name]: e.target.value })}>
//                         <option value="">Select a Food Categories</option>
//                         {foodCategory.map((category) => (
//                             <option key={category._id} value={category._id}>{category.name}</option>
//                         ))}
//                     </select>
//                 </div>

//                 <div className={style.food_name_form}>
//                     <label>is Available</label>
//                     <input className={style.name_inp} name='isAvailable' type="text" placeholder='Enter Food Stock' value={input.isAvailable} onChange={(e) => setInput({ ...input, [e.target.name]: e.target.value })} />
//                 </div>

//                 <button className={style.food_submit_btn} onClick={addfooditem}>Submit</button>
//             </div>
//         </div>
//     )
// }

// export default AddFoodItems





import React, { useState } from 'react';
import style from "../styles/addfooditems.module.css";

const AddFoodItems = ({ addfooditems, foodCategory }) => {
    const [open, setOpen] = useState(false);
    const onClose = () => setOpen(false);

    return (
        <div className={style.fooditem_container}>
            <button onClick={() => setOpen(true)} className={style.addfooditems_btn}>+ Add Food</button>
            {open && <Dialog onClose={onClose} addfooditems={addfooditems} foodCategory={foodCategory} />}
        </div>
    )
}

const Dialog = ({ onClose, addfooditems, foodCategory }) => {
    const [input, setInput] = useState({
        name: "",
        description: "",
        price: "",
        foodcategories: "",
        isAvailable: ""
    });

    const addfooditem = async () => {
        try {
            const url = import.meta.env.VITE_SERVER_URL;
            const res = await fetch(`${url}/admin/fooditems`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${localStorage.getItem("token")}`
                },
                body: JSON.stringify(input),
            });
            const data = await res.json();
            if (!data.success) return alert(data.error);

            const fixedItem = {
                ...data.data,
                foodcategories: data.data.foodcategories?._id
            };
            addfooditems(fixedItem);
            setInput({ name: "", description: "", price: "", foodcategories: "", isAvailable: "" });
            onClose();
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className={style.food_backdrop}>
            <div className={style.food_form}>
                <div className={style.form_hading_food}>
                    <h2>Add New Food Item</h2>
                    <button onClick={onClose} className={style.close_btn}>×</button>
                </div>

                <div className={style.food_name_form}>
                    <label>Food Name</label>
                    <input
                        className={style.name_inp}
                        name='name'
                        type="text"
                        placeholder='Enter Food name'
                        value={input.name}
                        onChange={(e) => setInput({ ...input, [e.target.name]: e.target.value })}
                    />
                </div>

                <div className={style.food_name_form}>
                    <label>Description</label>
                    <textarea
                        className={style.name_inp}
                        name='description'
                        placeholder='Enter Food Description'
                        value={input.description}
                        onChange={(e) => setInput({ ...input, [e.target.name]: e.target.value })}
                    />
                </div>

                <div className={style.food_name_form}>
                    <label>Price</label>
                    <input
                        className={style.name_inp}
                        name='price'
                        type="number"
                        placeholder='Enter Food Price'
                        value={input.price}
                        onChange={(e) => setInput({ ...input, [e.target.name]: e.target.value })}
                    />
                </div>

                <div className={style.food_name_form}>
                    <label>Food Category</label>
                    <select
                        className={style.option}
                        name="foodcategories"
                        value={input.foodcategories}
                        onChange={(e) => setInput({ ...input, [e.target.name]: e.target.value })}
                    >
                        <option value="">Select a Category</option>
                        {foodCategory.map((category) => (
                            <option key={category._id} value={category._id}>{category.name}</option>
                        ))}
                    </select>
                </div>

                <div className={style.food_name_form}>
                    <label>Availability</label>
                    <input
                        className={style.name_inp}
                        name='isAvailable'
                        type="text"
                        placeholder='Enter Stock Status'
                        value={input.isAvailable}
                        onChange={(e) => setInput({ ...input, [e.target.name]: e.target.value })}
                    />
                </div>

                <button className={style.food_submit_btn} onClick={addfooditem}>Add Food</button>
            </div>
        </div>
    )
}

export default AddFoodItems;