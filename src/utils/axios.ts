//@ts-nocheck
import axios from "axios";

//задаем базовый URL для всех запросов
const instance = axios.create({
    baseURL: 'http://localhost:4444',
})

//делаем так что бы в headers Authorization передавался token из localStorage
instance.interceptors.request.use((config: { headers: { Authorization: string | null } }) => {
    config.headers.Authorization = window.localStorage.getItem('token')
    return config
})


export default instance