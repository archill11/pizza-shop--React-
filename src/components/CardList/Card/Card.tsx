import { useSelector } from "react-redux";
import { useState } from 'react'
import { Link } from "react-router-dom";
import { TypeSelector } from "../../TypeSelector/TypeSelector";
import { SizeSelector } from "../../SizeSelector/SizeSelector";
import { ButtonAddToCart } from "../../ButtonAddToCart/ButtonAddToCart";

import styles from './Card.module.scss'
import { selectCartContent } from "../../../redux/cart/selectors";

type CardProps = {
    id: string,
    title: string,
    price: number[],
    imageUrl: string
    types: number[]
    sizes: number[]
}

const Card: React.FC<CardProps> = (props) => {
    
    const [activeType, setActiveType] = useState(0)
    const [size, setSize] = useState(0)
    const cart = useSelector(selectCartContent)


    return(
        <div className={styles.wrapper}>
            <Link className={styles.link} to={`item/${props.id}`}>
                <div className={styles.img}>
                    <img src={props.imageUrl} alt="pizza"></img>
                </div>
                <span className={styles.title}>{props.title}</span>
            </Link>
            <div className={styles.selector}>
                {props.types && <TypeSelector setActiveType={setActiveType} activeType={activeType} itemTipes={props.types}/>}
                <SizeSelector id={props.id} setSize={setSize} size={size} itemSizes={props.sizes}/>
            </div>
            <div className={styles.to_cart}>
                <span className={styles.price}>{props.price[size]} ₽</span>
                <ButtonAddToCart id={props.id} activeType={activeType} size={size} cart={cart}/>
            </div>
        </div>
    )
}

export {Card}