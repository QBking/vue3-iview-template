import axios from "axios"
const { VUE_APP_BASE_URL, VUE_APP_TIME_OUT } = process.env

//axios的封装
class Request {
    //默认配置baseURL等
    constructor(baseURL, timeout = 1000) {
        this.instance = axios.create({
            baseURL,
            timeout
        })
    }
    request(config) {
        //request请求 返回promise对象
        return new Promise((resolve, reject) => {
            this.instance.request(config).then(res => {
                resolve(res.data)
            }).catch(err => {
                reject(err)
            })
        })
    }
    get(config) {
        return this.request({ ...config, method: "get" })
    }
    post(config) {
        return this.request({ ...config, method: "post" })
    }
}

export default new Request(VUE_APP_BASE_URL, VUE_APP_TIME_OUT)