import React from 'react'
import Navbar from "../../src/components/Navbar"
import style from "../styles/layout.module.css"
import DesktopSideBar from './DesktopSideBar'
const Layout = ({children}) => {
  return (
    <div>
        <Navbar/>
        <div className={style.DesktopSideBar}>
          <DesktopSideBar/>
        </div>
        <div className={style.Layout}>{children}</div>

    </div>
  )
}

export default Layout