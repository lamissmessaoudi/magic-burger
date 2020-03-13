import axios from 'axios'

const axiosInstance = axios.create({
    baseURL: ('http://51.75.20.206:3100/')
})


export default axiosInstance