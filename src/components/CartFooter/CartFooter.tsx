import React from "react"

import styles from "./CartFooter.module.scss"

type CartFooterProps = {totCount: number}

const CartFooter: React.FC<CartFooterProps> = (props) => {
   
   return(
    <div className={styles.wrapper}>
        <span>количество товаров: {props.totCount}</span>
        <button className={styles.btn + " cp"}>Оформить заказ</button>
    </div>
 
   )
}

export {CartFooter}