import React from 'react'
import style from "../styles/navbar.module.css"
import { Link } from "react-router-dom"
import { ChefHat, CookingPot, LogIn, User, UserPen, UserRound, Utensils } from "lucide-react"
import {} from "lucide-react"
const Navbar = () => {
  return (
    <div className={style.nav}>
      <div className={style.cover}>
      <div className={style.logo}>
        <div className={style.img_logo}><ChefHat size={38} color='red'/></div>
      </div>
    </div>
    <div className={style.name}><h1>BiteHub</h1></div>
    <input  className={style.input} type="text" placeholder='Search Booking,User....' />
    <div className={style.navbox}>
      {/* <NavLink className={style.addRestaurant} icon={Utensils} link="/restaurant" label="Restaurant"/> */}
      {/* <NavLink className={style.addBooking} icon={CookingPot} link="/booking" label="Booking"/> */}
      {/* <NavLink className={style.addUsers} icon={UserPen} link="/users" label="Users"/> */}
      <NavLink className={style.addSigin} icon={User} link="/signin" label="Sign Up"/>
      <NavLink className={style.addLogin} icon={LogIn} link="/login" label="Login"/>
    </div>
    <div className={style.profile}>
      <span><UserRound /></span>
    </div>
    </div>
  )
}

const NavLink=({link,label,icon})=>{
  const Icon=icon;
  return (
    <Link to={link} className={style.link}>
    <Icon/>
    {label}
    </Link>
  )
}

export default Navbar;