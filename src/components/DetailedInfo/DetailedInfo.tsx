import axios from "../../utils/axios"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { selectCartContent } from "../../redux/cart/selectors"
import { ButtonAddToCart } from "../ButtonAddToCart/ButtonAddToCart"
import { SizeSelector } from "../SizeSelector/SizeSelector"
import { TypeSelector } from "../TypeSelector/TypeSelector"


import styles from './DetailedInfo.module.scss'

export type toCartItem = {
    imageUrl: string
    title: string
    price: string
    compound: string
    id: string
    _id: string
    types: number[]
    sizes: number[]
    category: number
}

const DetailedInfo: React.FC = () => {
    const [activeType, setActiveType] = useState(0)
    const [size, setSize] = useState(0)
    const [item, setItem] = useState<toCartItem>()
    const {id} = useParams()
    const cart = useSelector(selectCartContent)
   
    useEffect(()=> {
        (async () =>  {
            try {
                const {data} = await axios.get(`/products/${id}`)
                setItem(data)
            } catch (error) {
                alert('Ошибка запроса данных')
            }
        })()
    },[])

    if (!item) {
        return <h2>Загрузка</h2>
    }
    
    return(
        <>
            <div className={styles.info}>
                <img src={item.imageUrl} alt="cart"></img>
                <span className={styles.title}>{item.title}</span>
            </div>
            <div className={styles.order}>
                    {item.compound && <span className={styles.compound}>Состав: {item.compound}</span>}
                <div className={styles.selector}>
                    {item.types && <TypeSelector setActiveType={setActiveType} activeType={activeType} itemTipes={item.types}/>}
                    <SizeSelector id={item._id} setSize={setSize} category={item.category} size={size} itemSizes={item.sizes} />
                </div>
                <div className={styles.to_cart}>
                    <span className={styles.price}>{item.price[size]} ₽</span>
                    <ButtonAddToCart id={item._id} item={item} activeType={activeType} size={size} 
                    cart={cart }
                    
                    />
                </div>
            </div>
        </>
    )
}

export {DetailedInfo}