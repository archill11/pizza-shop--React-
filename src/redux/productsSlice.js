import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';

export const fethProducts = createAsyncThunk('products/fetchProducts', async ([c, s]) => {
    const { data } = await axios.get(`https://6316f07e82797be77feea866.mockapi.io/items?${c}${s}` )
    return data;
})


const productsSlice = createSlice({
    name: "products",
    initialState: {
        items: [],
        status: 'loading'
    },

    reducers: {
        setProducts(state, action) {
            state.items = action.payload
        },
    },
    extraReducers: {
        [fethProducts.pending]: (state, action) => {
            state.status = 'loading'
            state.items = []
        },
        [fethProducts.fulfilled]: (state, action) => {
            state.status = 'success'
            state.items = action.payload
        },
        [fethProducts.rejected]: (state, action) => {
            state.status = 'error'
            state.items = []
            alert('Ошибка при запросе данных')
        },
    }
})
export const { setProducts } = productsSlice.actions;
export default productsSlice.reducer;