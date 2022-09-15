//@ts-nocheck
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "../../utils/axios"


export const fetchAuth = createAsyncThunk('auth/fetchAuth', async (args) => {
    const { data } = await axios.post('/auth/login', args)
    return data
})

export const fetchRegister = createAsyncThunk('auth/fetchRegister', async (args) => {
    const { data } = await axios.post('/auth/register', args)
    return data
})

export const fetchAuthMe = createAsyncThunk('auth/fetchAuthMe', async () => {
    const { data } = await axios.get('/auth/me')
    return data
})

const initialState = { data: null, status: 'loading' }
const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logout(state) {
            state.data = null
        }
    },
    extraReducers: {
        [fetchAuth.pending]: (state) => {
            state.status = 'loading'
            state.data = null
        },
        [fetchAuth.fulfilled]: (state, action) => {
            state.data = action.payload
            state.status = 'success'
        },
        [fetchAuth.rejected]: (state) => {
            state.data = null
            state.status = 'error'
        },
        
        [fetchRegister.pending]: (state) => {
            state.status = 'loading'
            state.data = null
        },
        [fetchRegister.fulfilled]: (state, action) => {
            state.data = action.payload
            state.status = 'success'
        },
        [fetchRegister.rejected]: (state) => {
            state.data = null
            state.status = 'error'
        },
        [fetchAuthMe.pending]: (state) => {
            state.status = 'loading'
            state.data = null
        },
        [fetchAuthMe.fulfilled]: (state, action) => {
            state.data = action.payload
            state.status = 'success'
        },
        [fetchAuthMe.rejected]: (state) => {
            state.data = null
            state.status = 'error'
        },
    }
})

export const selectIsAuth = state => Boolean(state.auth.data)

export const { logout } = authSlice.actions;
export const authReducer = authSlice.reducer