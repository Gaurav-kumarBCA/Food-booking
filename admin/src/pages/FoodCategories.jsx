import React, { useEffect, useState } from 'react'
import Layout from '../components/Layout'
import style from "../styles/foodcategories.module.css"
import AddFoodCategories from '../dialogs/AddFoodCategories';
import EditFoodCategories from '../dialogs/EditFoodCategories';
import DeleteFoodCategories from '../dialogs/DeleteFoodCategories';

const FoodCategories = () => {
  const [data, setData] = useState([]);
  
  
  const addFoodCategories = (newfoodCategories) => {
    setData([...data, newfoodCategories]);
  };

  const editFoodCategories=(id,name,slug)=>{
    setData(data.map((item)=>{
      if(item._id == id){
        return {...item,name,slug};
      }
      return item;
    })
  );
  };

  const deletefoodcategories=(id)=>{
    setData(data.filter((item)=>item._id !== id))
  }
  // console.log("Hi gaurav",data);
  useEffect(() => {
    const fatchData = async () => {
      try {
        const url = import.meta.env.VITE_SERVER_URL;
        const res = await fetch(`${url}/admin/foodCategories`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        const data = await res.json();
        // console.log(data);
        if (!data.success) {
          return alert(data.error || "Somthing went wrong")
        }
        setData(data.data)
      } catch (error) {
        console.log(error);
      }
    }
    fatchData();
  }, [])
  return (
    <Layout>
      <div className={style.body}>
        <div className={style.container_hading}>
          <h1>Food Item Categories</h1>
          <div><AddFoodCategories add={addFoodCategories} /></div>
        </div>
        <div>
          <table>
            <thead >
              <tr className={style.tbody}>
                <th>Name</th>
                <th>Slug</th>
                <th>Total</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item) => (
                <tr key={item._id}>
                  <td className={style.td}>{item.name}</td>
                  <td className={style.td}>{item.slug}</td>
                  <td className={style.td}>{item.total || 0}</td>
                  <td className={style.td}>
                   <div className={style.funicon}>
                    <EditFoodCategories id={item._id} name={item.name} edit={editFoodCategories} />  
                    <DeleteFoodCategories id={item._id} remove={deletefoodcategories} />
                   </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  )
}

export default FoodCategories