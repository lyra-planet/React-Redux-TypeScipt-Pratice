import axios from 'axios'

const request = axios.create({
    baseURL:'http://geek.itheima.net/v1_0/',
    timeout:5000
})

export default request