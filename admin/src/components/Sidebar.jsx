import React from 'react'
import style from "../styles/sidebar.module.css"
import { Link } from 'react-router-dom'
import { CreditCard, Hamburger, NotepadText, Plus, Settings, Truck } from 'lucide-react'
const Sidebar = () => {
  return (
    <div className={style.Sidebar}>
        <div className={style.admin}><h1>Hi,Admin</h1></div>
        <div className={style.coverlink}>
            <SideLink  icon={Plus} link="/restaurant" lable="Add Restaurant"/>
            <SideLink  icon={Plus} link="/fooditems" lable="Add Food Item"/>
            <SideLink  icon={Plus} link="/foodcategories" lable="FoodCategories"/>
            <SideLink  icon={Hamburger} link="/restaurant" lable="All Restaurant"/>
            <SideLink  icon={Truck} link="/restaurant" lable="Delivery Boy"/>
            <SideLink  icon={NotepadText} link="/restaurant" lable="All Orders"/>
            <SideLink  icon={CreditCard} link="/restaurant" lable="Payments"/>
            <SideLink  icon={Settings} link="/restaurant" lable="Setting"/>


        </div>
    </div>
  )
}
const SideLink=({link,lable,icon})=>{
    const Icon=icon;
    return(
        <Link to={link} className={style.Icon}>
            <Icon/>
        {lable}
        </Link>
    )
}

export default Sidebar