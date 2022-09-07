import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../../../redux/cartSlice";
import { useEffect, useState } from 'react'

import styles from './Card.module.scss'

const Card = (props) => {
    
    const [activeType, setActiveType] = useState(0)
    const [size, setSize] = useState(0)
    const dispatch = useDispatch()
    const types = ["тонкое", "традиционное"]
    const cart = useSelector(state => state.cart)

    const count = cart.reduce((sum, curr) => (
        curr.id === props.id 
        ? curr.count + sum
        : sum + 0
    ), 0)

    const addToCart = () => {
        const newItem = {
            id: props.id,
            imageUrl: props.imageUrl,
            price: props.price,
            title: props.title,
            size: props.sizes[size],
            type: types[activeType],
        }
        dispatch(addItem(newItem))
    }


    return(
        <div className={styles.wrapper}>
            <div className={styles.img}>
                <img src={props.imageUrl} height={300} alt="pizza"></img>
            </div>
            <span className={styles.title}>{props.title}</span>
            <div className={styles.selector}>
                <ul className='cp'>
                    {props.types.map((item, indx) => (
                            <li onClick={()=> setActiveType(indx)} className={activeType === indx ? styles.active : ''} key={indx}>{types[item]} </li>
                        ))}

                </ul>
                <ul className='cp'>
                    {props.sizes.map((item, indx) => (
                            <li onClick={()=>setSize(indx)} className={size === indx ? styles.active : ''} key={indx}>{item} см.</li> 
                         ))}
                </ul>
            </div>
            <div className={styles.to_cart}>
                <span className={styles.price}>от {props.price} ₽</span>
                <button onClick={addToCart} className={styles.bye_btn + ' cp'}>
                    <span className={styles.plus}>+</span>
                    <span>Добавить</span>
                    {count ? <span className={styles.count}>{count}</span> : null}
                    
                </button>
            </div>
        </div>
    )
}

export {Card}