import React from "react"
import { useDispatch } from "react-redux"
import drop from "../../assets/img/garbage.svg"
import { dropCart } from "../../redux/cart/slice"

import styles from "./CartHeader.module.scss"


const CartHeader: React.FC = () => {
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