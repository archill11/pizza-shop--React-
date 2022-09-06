

import { useEffect, useState } from 'react'

// import './Card.scss'
import styles from './Card.module.scss'

const Card = (props) => {

    const [activeType, setActiveType] = useState(0)
    const [size, setSize] = useState(0)

    const types = ["тонкое", "традиционное"]
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
                <button className={styles.bye_btn + ' cp'}>
                    <span className={styles.plus}>+</span>
                    <span>Добавить</span>
                    <span className={styles.count}>0</span>
                </button>
            </div>
        </div>
    )
}

export {Card}