import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: [],

    reducers: {
        addItem(state, action) {
            const double = state.find(item => item.id === action.payload.id && item.size === action.payload.size && item.type === action.payload.type)
            const doubleIndx = state.indexOf(double)
            if ( double !== undefined ) {
                state[doubleIndx]["count"] += 1
            }else{
                state.push({count: 1, ...action.payload}) 
            }
        }, 
    }
})

export const { addItem } = cartSlice.actions;
export default cartSlice.reducer;