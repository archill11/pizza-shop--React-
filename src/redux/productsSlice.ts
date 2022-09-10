import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';

export const fethProducts = createAsyncThunk<Item[], string[]>('products/fetchProducts', async ([c, s]) => {
    const { data } = await axios.get<Item[]>(`https://6316f07e82797be77feea866.mockapi.io/items?${c}${s}` )
    return data;
})

export type Item = {
    imageUrl: string,
    title: string,
    price: number[],
    compound: string,
    id: string,
    types: number[],
    sizes: number[],
    category: number,
    rating: number
}

enum status {
    LOADING= 'loading',
    SUCCESS= 'success',
    ERROR= 'error',
}

interface productsSliceState { items: Item[], status: status} 

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