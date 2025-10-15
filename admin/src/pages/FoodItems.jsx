import React from 'react'
import Layout from '../components/Layout';
import style from "../styles/fooditems.module.css"
import { useState } from 'react';
import { useEffect } from 'react';
import AddFoodItems from '../dialogs/AddFoodItems';
import EditFoodItems from '../dialogs/EditFoodItems';
import DeleteFoodItems from '../dialogs/DeleteFoodItems';


const FoodItems = () => {
    const [data,setData]=useState([]);
    const [foodCategories,setFoodCategories]=useState([]);
    const addfooditems=(newAddfooditems)=>{
        // setData([...data,{...newAddfooditems,foodcategory:foodCategories.find((fc)=>fc._id === newAddfooditems.foodcategory)}]);
        const categoryFood=foodCategories.find(fc=>fc._id === newAddfooditems.foodcategory);
        setData([...data,{...newAddfooditems,foodcategory:categoryFood}]);
    };

    const deletefooditem=(id)=>{
        setData(data.filter((item)=>item._id !== id));
    }
    useEffect(()=>{
        const fetchFoodList=async()=>{
            try {
                const url=import.meta.env.VITE_SERVER_URL;
                const res=await fetch(`${url}/admin/fooditems`,{
                    method:"GET",
                    headers:{
                        "Content-Type":"application/json",
                        Authorization:`Bearer ${localStorage.getItem("token")}`
                    },
                });
                const data=await res.json();
                // console.log(data);
                if(!data.success){
                    return alert(data.error);
                }
                setData(data.data)

                // fetch food categories

                const res2=await fetch(`${url}/admin/foodCategories`,{
                    method:"GET",
                    headers:{
                        "Content-Type":"application/json",
                        Authorization:`Bearer ${localStorage.getItem("token")}`
                    },
                });
                    const data2=await res2.json();
                    // console.log(data2);
                    if(!data2.success){
                        return alert(data2.error)
                    }
                    setFoodCategories(data2.data);
            } catch (error) {
                console.log(error);
            }
        };
        fetchFoodList()
    },[])
  return (
   <Layout>
     <div className={style.fooditembody}>
        <div className={style.food_hading}>
            <h1>Food List</h1>
            <AddFoodItems foodCategories={foodCategories}  addfooditems={addfooditems}/>
        </div>
        <table>
            <thead>
                <tr className={style.tfbody}>
                    <th>Food Name</th>
                    <th>Description</th>
                    <th>Price</th>
                    <th>Food Categories</th>
                    <th>Is Available</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {data.map((items)=>(
                    <tr key={items._id}>
                        <td className={style.td}>{items.name || "-"}</td>
                        <td className={style.td}>{items.description || "-"}</td>
                        <td className={style.td}>{items.price || 0}</td>
                        <td className={style.td}>{items.foodcategory?.name || "-"}</td>
                        <td className={style.td} style={{color:items.isAvailable ? "green":"red"}}>{items.isAvailable ?"Yes":"No"}</td>
                        <td className={style.td}>
                            <div className={style.food_icon}>
                                <EditFoodItems/>
                                <DeleteFoodItems id={items._id} removefood={deletefooditem}/>
                            </div>
                            </td>
                    </tr>
                ))}
            </tbody>
        </table>
     </div>
   </Layout>
  )
}

export default FoodItems;