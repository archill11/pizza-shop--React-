import React from "react"
import { useDispatch } from "react-redux"
import deleteBtn from '../../assets/img/close_delete.svg'
import { delItem, incItem, decItem } from "../../redux/cart/slice"

import styles from './CartItem.module.scss'

type CartItemProps = {
    indx: number,
    imageUrl: string,
    title: string,
    id: string,
    size: number,
    type: string,
    count: number,
    price: number,
}

const CartItem: React.FC<CartItemProps> = (props) => {

    const dispatch = useDispatch()
    const remFromCart = () => {
        dispatch(delItem(props.indx))
    }
    const incCartItem = () => {
        dispatch(incItem(props.indx))
    }
    const decCartItem = () => {
        dispatch(decItem(props.indx))
    }

   return(
        <div className={styles.item}>
            <div className={styles.img}>
                <img src={props.imageUrl} height={70} alt="pizza"></img>
            </div>
            <div className={styles.info}>
                <span className={styles.title}>{props.title}</span>
                <span className={styles.sub_title}>{props.type}, {props.size} {Number(props.id) > 15 ? "л" : "см."}</span>
            </div>
            <div className={styles.count}>
                <span  onClick={incCartItem } className={styles.count_btn + " cp"}>+</span>
                {props.count}
                <span onClick={decCartItem } className={styles.count_btn + " cp"}>-</span>
            </div>
            <div className={styles.price}>
                {props.price * props.count} ₽
            </div>
            <div onClick={ remFromCart } className={styles.delBtn + " cp"}>
                <img src={deleteBtn} height={30} alt="pizza"></img>
            </div>
        </div>
   )
}

export {CartItem}