import { cartItem } from "../redux/cart/types"

export const getCartFrLS = () => {
    const data = localStorage.getItem('cart')
    return data ? JSON.parse(data) as cartItem[] : []
}