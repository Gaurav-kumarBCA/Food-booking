import React from 'react'
import Navbar from "../components/Navbar"
import style from "../styles/layout.module.css"
import DesktopSideBar from './DesktopSideBar'

const Layout = ({children}) => {
  return (
    <div className={style.layoutContainer}>
      <Navbar />
      <div className={style.mainArea}>
        <aside className={style.sidebar}>
          <DesktopSideBar />
        </aside>
        <main className={style.contentArea}>
          {children}
        </main>
      </div>
    </div>
  )
}

export default Layout