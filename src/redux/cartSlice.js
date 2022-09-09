import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: [],

    reducers: {
        addItem(state, action) {
            const obj = action.payload
            const double = state.find(item => item.id === obj.id && item.size === obj.size && item.type === obj.type)
            const doubleIndx = state.indexOf(double)
            if ( double !== undefined ) {
                state[doubleIndx]["count"] += 1
            }else{
                state.push({count: 1, ...obj}) 
            }
        }, 
        delItem(state, action) {
            const indx = action.payload
            state.splice(indx, 1)
        }, 
        incItem(state, action) {
            const indx = action.payload
            state[indx]["count"] += 1
        }, 
        decItem(state, action) {
            const indx = action.payload
            const count = state[indx]["count"]
            if ( count === 1 ) {
                state.splice(indx, 1)
            }else{
                state[indx]["count"] -= 1
            }
        }, 
        dropCart(state, action) {
            state.length = 0
        }, 
    }
})


export const selectCartContent = state => state.cart
export const { addItem, delItem, incItem, decItem, dropCart } = cartSlice.actions;
export default cartSlice.reducer;