import React from "react"
import styled from 'styled-components'
import { useSelector } from "react-redux"
import { CartItem } from "../components/CartItem/CartItem"
import { CartHeader } from "../components/CartHeader/CartHeader" 
import { CartFooter } from "../components/CartFooter/CartFooter" 
import { selectCartContent } from "../redux/cart/selectors"
import { cartItem } from "../redux/cart/types"


const Wrapper = styled.div`
background-color: #fff;
padding: 30px;
display: grid;
justify-items: center;
justify-content: center;
width: 100%;
margin: 0 auto;
@media (max-width: 500px) {
   padding: 10px;
}`


const Cart: React.FC = () => {
   const cart = useSelector(selectCartContent)
   const totCount = cart.reduce((cum: number, curr: {count: number}) => curr.count + cum, 0)

   const cartList = cart.map((item: cartItem, indx: number) => (
         <CartItem {...item} indx={indx} key={item._id + item.type + String(item.size)}/>
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