import { Pencil } from 'lucide-react'
import React from 'react'
import style from "../styles/editfooditems.module.css"

const EditFoodItems = () => {
  return (
    <div>
        <button className={style.food_item_btn}><Pencil/></button>
    </div>
  )
}

export default EditFoodItems