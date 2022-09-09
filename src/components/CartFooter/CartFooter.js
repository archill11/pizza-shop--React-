import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { dropCart } from "../../redux/cartSlice"

import styles from "./CartFooter.module.scss"


const CartFooter = (props) => {
   const dispatch = useDispatch()
   
   return(
    <div className={styles.wrapper}>
        <span>количество товаров: {props.totCount}</span>
        <button className={styles.btn + " cp"}>Оформить заказ</button>
    </div>
 
   )
}

export {CartFooter}