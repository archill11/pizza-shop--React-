import React from "react"

import { useDispatch, useSelector } from "react-redux"

import styles from './CartItem.module.scss'



const CartItem = (props) => {

   return(
        <div className={styles.item}>
            <div className={styles.img}>
                <img src={props.imageUrl} height={70} alt="pizza"></img>
            </div>
            <div className={styles.info}>
                <span className={styles.title}>{props.title}</span>
                <span className={styles.sub_title}>{props.type}, {props.size} см</span>
            </div>
            <div className={styles.count}>
                {props.count}
            </div>
            <div className={styles.price}>
                {props.price * props.count}
            </div>
            <div className={styles.delBtn}>
                <span>X</span>
            </div>
        </div>
   )
}

export {CartItem}