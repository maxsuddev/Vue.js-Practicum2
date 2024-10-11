import axios from 'axios'
import {getItem} from "@/helpers/persistaneStorage.js";

axios.defaults.baseURL = 'http://127.0.0.1:8000/api'

axios.interceptors.request.use(config => {
    const token = getItem('token');
    console.log(token);
    config.headers['Authorization'] = token ? `Bearer ${token}` : '';

    return config
})
export default axios