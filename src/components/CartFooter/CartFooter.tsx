//@ts-nocheck
import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { selectCartContent } from "../../redux/cart/selectors"
import { fethOrder} from '../../redux/cart/asyncActions'

import styles from "./CartFooter.module.scss"
import { selectIsAuth } from "../../redux/auth/slice"
import { dropCart } from "../../redux/cart/slice";

type CartFooterProps = {totCount: number}

const CartFooter: React.FC<CartFooterProps> = (props) => {
  const dispatch = useDispatch()
  const cart = useSelector(selectCartContent)
  const isAuth = useSelector( selectIsAuth )
  const navigate = useNavigate();
  const location = useLocation()


  if ( !isAuth && !window.localStorage.getItem('token') ) {
    return <Navigate to='/auth' />
  }

  const checkout = (args) => {
    navigate('/pay')
  }

   return(
    <div className={styles.wrapper}>
        <span>количество товаров: {props.totCount}</span>
        <button onClick={() => checkout()} className={styles.btn + " cp"}>Оформить заказ</button>
    </div>
 
   )
}

export {CartFooter}