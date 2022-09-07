import React from "react"
import styled from 'styled-components'
import { useDispatch, useSelector } from "react-redux"

import styles from './Cart.module.scss'
import { CartItem } from "../components/CartItem/CartItem"




const Cart = (props) => {

   const cart = useSelector(state => state.cart)

   const cartList = cart.map(item => (
         <CartItem {...item} key={item.id}/>
      ))


   return(
      <div className={styles.wrapper}>
         {cartList.length > 0 ? cartList : <h2>Ничего не найдено...</h2>}
      </div>
   )
}

export {Cart}