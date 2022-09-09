import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { dropCart } from "../../redux/cartSlice"
import drop from "../../assets/img/garbage.svg"

import styles from "./CartHeader.module.scss"


const CartHeader = (props) => {
   const dispatch = useDispatch()
   
   return(
        <div className={styles.wrapper}>
            <h2>Корзина</h2>
            <button onClick={()=> dispatch(dropCart())} className={styles.btn + " cp"}>
                <img src={drop} height={25} alt="cart"></img>
                <span>Очистить корзину</span>
            </button>
        </div>
   )
}

export {CartHeader}