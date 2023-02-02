import axios from 'axios'

const baseUrl = 'https://api-dev.yeshtery.com/v1/yeshtery/'

export const axiosInstance = axios.create({
    
    baseURL: baseUrl,
    timeout: 5000,
    headers: {
        'Content-Type': 'application/json',
        'accept': 'application/json'
    }
});





