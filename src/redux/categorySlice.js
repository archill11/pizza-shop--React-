import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
    name: "filter",
    initialState: { categoryVal: 0, sortingVal: 'rating&order=desc' },

    reducers: {
        setCategoryVal(state, action) {
            state.categoryVal = action.payload
        },
        setSortingVal(state, action) {
            state.sortingVal = action.payload 
        },
    }

})

export const { setCategoryVal, setSortingVal } = filterSlice.actions;
export default filterSlice.reducer;