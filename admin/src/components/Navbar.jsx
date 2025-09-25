import React from 'react'
import style from "../styles/navbar.module.css"
import { ChefHat } from "lucide-react"
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
    </div>
  )
}

export default Navbar;