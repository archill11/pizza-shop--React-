//@ts-nocheck
import axios from "axios";

//задаем базовый URL для всех запросов
const instance = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
})

//делаем так что бы в headers Authorization передавался token из localStorage
instance.interceptors.request.use((config: { headers: { Authorization: string | null } }) => {
    config.headers.Authorization = window.localStorage.getItem('token')
    return config
})


export default instance