import React, { useEffect, useState } from 'react'
import Layout from "../components/Layout"
import style from "../styles/restaurant.module.css"

const Restaurant = () => {
  const [restaurant,setRestaurant]=useState([]);
  useEffect(()=>{
    const fetchDataRestaurant=async()=>{
      try {
        const data=await fetch("http://localhost:4000/admin/restaurant",{
          method:"GET",
          headers:{
            "Content-Type":"application/json",
            Authorization:`Bearer ${localStorage.getItem("token")}`,
          },
      });
      const res=await data.json();
      console.log(res);
        if (!res.success) {
          alert(res.error || "Something went wrong!");
          return;
        }
      setRestaurant(res.data)
      } catch (error) {
        console.log(error);
      }
    };
    fetchDataRestaurant();
  },[])
  return (
    <Layout>
    <div className={style.container}>
      <div className={style.header}>
        <h1>Restaurant List</h1>
        <button>+Add Restaurant</button>
      </div>
      <table>
        <thead>
          <tr>
          <th>Restaurant Name</th>
          <th>Owner Name</th>
          <th>Restaurant Address</th>
          <th>Food Categories</th>
          <th>Food Menu</th>
          <th>Rating</th>
          <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {restaurant.map((items)=>(
            <tr key={items._id}>
              <td className={style.td}>{items.name || "-"}</td>
              <td className={style.td}>{items.owner.name || "-"}</td>
              <td className={style.td}>{items.address.line1 || "-"}</td>
              <td className={style.td}>{items.category.name || "-"}</td>
              <td className={style.td}>{items.menu.map(m=>(
                <div className={style.td1}><td key={m._id}>{m.foodList.name}</td></div>
              ))}</td>
              <td className={style.td}>{items.rating || "-"}</td>
              <td className={style.td}>{}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </Layout>
 )
}

export default Restaurant