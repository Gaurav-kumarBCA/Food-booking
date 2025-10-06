import React, { useEffect, useState } from 'react'
import Layout from "../components/Layout"
import style from "../styles/restaurant.module.css"

const Restaurant = () => {
  // const [restaurant,setRestaurant]=useState([]);
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

      } catch (error) {
        console.log(error);
      }
    };
    fetchDataRestaurant();
  },[])
  return (
    <Layout>
    <div>restaurant</div>
    </Layout>
 )
}

export default Restaurant