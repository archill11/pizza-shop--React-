import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";

export type cartItem = {
    imageUrl: string,
    title: string,
    id: string,
    size: number,
    type: string,
    price: number,
    count: number,
}
export type actionItem = {
    imageUrl: string,
    title: string,
    id: string,
    size: number,
    type: string,
    price: number,
}


const initialState: cartItem[] = []

const cartSlice = createSlice({
    name: "cart",
    initialState: initialState,

    reducers: {
        addItem(state, action: PayloadAction<actionItem>) {
            const obj: actionItem = action.payload
            const double: cartItem | undefined = state.find(item => item.id === obj.id && item.size === obj.size && item.type === obj.type)
            const doubleIndx: number | undefined = double && state.indexOf(double)
            
           if ( double && doubleIndx !== undefined  ) {
                state[doubleIndx]["count"] += 1
            }else{
                state.push({count: 1, ...obj}) 
            }
        }, 
        delItem(state, action: PayloadAction<number>) {
            const indx = action.payload
            state.splice(indx, 1)
        }, 
        incItem(state, action: PayloadAction<number>) {
            const indx = action.payload
            state[indx]["count"] += 1
        }, 
        decItem(state, action: PayloadAction<number>) {
            const indx = action.payload
            const count = state[indx]["count"]
            if ( count === 1 ) {
                state.splice(indx, 1)
            }else{
                state[indx]["count"] -= 1
            }
        }, 
        dropCart(state) {
            state.length = 0
        }, 
    }
})


export const selectCartContent = (state: RootState) => state.cart
export const { addItem, delItem, incItem, decItem, dropCart } = cartSlice.actions;
export default cartSlice.reducer;