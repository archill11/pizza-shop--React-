import { useDispatch, useSelector } from "react-redux";
import { addItem, selectCartContent } from "../../../redux/cartSlice";
import { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import { TypeSelector } from "../../TypeSelector/TypeSelector";
import { SizeSelector } from "../../SizeSelector/SizeSelector";

import styles from './Card.module.scss'
import { ButtonAdd } from "../../ButtonAdd/ButtonAdd";

const Card = (props) => {
    
    const [activeType, setActiveType] = useState(0)
    const [size, setSize] = useState(0)
    const dispatch = useDispatch()
    const types = ["тонкое", "традиционное"]
    const cart = useSelector(selectCartContent)


    return(
        <div className={styles.wrapper}>
            <Link className={styles.link} to={`item/${props.id}`}>
                <div className={styles.img}>
                    <img src={props.imageUrl} height={300} alt="pizza"></img>
                </div>
                <span className={styles.title}>{props.title}</span>
            </Link>
            <div className={styles.selector}>
                {props.types && <TypeSelector setActiveType={setActiveType} activeType={activeType} itemTipes={props.types}/>}
                <SizeSelector id={props.id} setSize={setSize} size={size} itemSizes={props.sizes}/>
            </div>
            <div className={styles.to_cart}>
                <span className={styles.price}>{props.price[size]} ₽</span>
                <ButtonAdd id={props.id} activeType={activeType} size={size} cart={cart}/>
            </div>
        </div>
    )
}

export {Card}