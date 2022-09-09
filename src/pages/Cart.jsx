import React from "react"
import styled from 'styled-components'
import { useDispatch, useSelector } from "react-redux"
import { CartItem } from "../components/CartItem/CartItem"
import { CartHeader } from "../components/CartHeader/CartHeader" 
import { CartFooter } from "../components/CartFooter/CartFooter" 
import { dropCart, selectCartContent } from "../redux/cartSlice"

const Wrapper = styled.div`
background-color: #fff;
padding: 30px;
display: grid;
justify-items: center;
justify-content: center;
width: 800px;
margin: 0 auto;`




const Cart = (props) => {
   const dispatch = useDispatch()
   const cart = useSelector(selectCartContent)
   const totCount = cart.reduce((cum, curr) => curr.count + cum, 0)

   const cartList = cart.map((item, indx) => (
         <CartItem {...item} indx={indx} key={item.id + item.type + item.size}/>
      ))

   return(
      
      <Wrapper>
         {cartList.length === 0 ? <h2>Ничего не найдено...</h2> :
         <>
            <CartHeader/>
            {cartList }
            <CartFooter totCount={totCount}/>
         </> }
      </Wrapper>
   )
}

export {Cart}