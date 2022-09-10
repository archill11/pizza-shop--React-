import { createSlice } from "@reduxjs/toolkit";
import { fethProducts } from "./asyncActions";
import { productsSliceState, status, } from "./types";


const initialState: productsSliceState = { items: [], status: status.LOADING, }

const productsSlice = createSlice({
    name: "products",
    initialState: initialState,

    reducers: {
        setProducts(state, action) {
            state.items = action.payload
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fethProducts.pending, (state) => {
            state.status = status.LOADING
            state.items = []
        })
        builder.addCase(fethProducts.fulfilled, (state, action) => {
            state.status = status.SUCCESS
            state.items = action.payload
        })
        builder.addCase(fethProducts.rejected, (state) => {
            state.status = status.ERROR
            state.items = []
            alert('Ошибка при запросе данных')
        })
    }
})

export const { setProducts } = productsSlice.actions;
export default productsSlice.reducer;