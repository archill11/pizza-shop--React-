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
        setQueryParams(state, action) {
            state.categoryVal = Number(action.payload.category) 
            state.sortingVal = action.payload.sortProperty 
        },
    }

})

export const { setCategoryVal, setSortingVal, setQueryParams } = filterSlice.actions;
export default filterSlice.reducer;