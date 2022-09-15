
import { useDispatch, useSelector } from 'react-redux'
import { addItem} from '../../redux/cart/slice'
import { actionItem, cartItem } from '../../redux/cart/types'
import { RootState } from '../../redux/store'
import { toCartItem } from '../DetailedInfo/DetailedInfo'
import styles from './ButtonAddToCart.module.scss'

type ButtonAddToCartProps = {activeType: number, size: number, id: string, item?: toCartItem, cart: cartItem[]}

const ButtonAddToCart: React.FC<ButtonAddToCartProps> = (props) => {
    const types: string[] = ["тонкое", "традиционное"]
    const dispatch = useDispatch()
    const item = useSelector((state: RootState) => state.products.items.filter(item => item._id === props.id))[0] || props.item
    
    const addToCart = () => {
        const t = item.types && types[props.activeType] 

        const newItem: actionItem = {
            _id: item._id,
            imageUrl: item.imageUrl,
            price: item.price[props.size],
            title: item.title,
            size: item.sizes[props.size],
            category: item.category,
            type: t,
        }
        dispatch(addItem(newItem))
    }
  
    const count = props.cart && props.cart.reduce((sum: number, curr: {count: number, _id: string}) => (
        curr._id === props.id 
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

export {ButtonAddToCart}