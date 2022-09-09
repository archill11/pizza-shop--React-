
import { useDispatch, useSelector } from 'react-redux'
import { addItem } from '../../redux/cartSlice'
import styles from './ButtonAdd.module.scss'


const ButtonAdd = (props) => {
    const types = ["тонкое", "традиционное"]
    const dispatch = useDispatch()
    const item = useSelector(state => state.products.items.filter(item => item.id === props.id))[0] || props.item
    
    const addToCart = () => {
        const t = item.types ? types[props.activeType] : null

        const newItem = {
            id: item.id,
            imageUrl: item.imageUrl,
            price: item.price[props.size],
            title: item.title,
            size: item.sizes[props.size],
            type: t,
        }
        dispatch(addItem(newItem))
    }
  
    const count = props.cart.reduce((sum, curr) => (
        curr.id === props.id 
        ? curr.count + sum
        : sum + 0
    ), 0)

    return(
        <button onClick={addToCart} className={styles.bye_btn + ' cp'}>
            <span className={styles.plus}>+</span>
            <span>Добавить</span>
            {count ? <span className={styles.count}>{count}</span> : null}
        </button>
    )
}

export {ButtonAdd}