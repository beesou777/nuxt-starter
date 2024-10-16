import axios,{type AxiosInstance} from "axios";
const $axios:AxiosInstance = axios.create()
import {useRouter} from 'vue-router'
import {get} from "~/utils/storage";
import {logout,refreshToken} from "~/store/authStore";

const router = useRouter()

$axios.interceptors.request.use(
    async config => {
        const accessToken = await get('access_token')
        if(config.headers && accessToken){
            config.headers['Authorization'] = `Bearer ${accessToken}`
        }
        return config
    },
    (error)=>{
        return Promise.reject(error)
    }
)

let isRefreshing = false;
let failQueue:Array<any> = [];

const processQueue = (error:any,token:string| null = null)=>{
    failQueue.forEach(prom =>{
        if(error){
            prom.reject(error)
        }else{
            prom.resolve(token)
        }
    })
    failQueue = []
}

$axios.interceptors.response.use(
    response=>{
        return response
    },err =>{
        const originalRequest = err.config

        if(originalRequest.url.includes("refresh") || originalRequest.url.includes("logout") || originalRequest.url.includes("login")){
            logout(true).then(()=>{
                router.push('/login')
            })
        }else{
            if(isRefreshing){
                return new Promise(function(resolve,reject){
                    failQueue.push({resolve,reject})
                }).then(token =>{
                    originalRequest.headers['Authorization'] = `Bearer ${token}`
                    return $axios(originalRequest)
                }).catch(err =>{
                    return Promise.reject(err)
                })
            }

            originalRequest._retry = true;
            isRefreshing = true;

            return new Promise(function(resolve,reject){
                refreshToken().then(async (res)=>{
                    if(res){
                        const access_token = await get('access_token')
                        $axios.defaults.headers.common['Authorization'] = `Bearer ${access_token}`
                        originalRequest.headers['Authorization'] = `Bearer ${access_token}`

                        processQueue(null,access_token)
                        resolve($axios(originalRequest))
                    }else{
                        processQueue(err,null)

                        logout().then(()=>{
                            router.push('/login')
                        })

                        reject(err)
                    }

                    isRefreshing = false
                })
            })
        }
        return Promise.reject(err)
    }
)

export default $axios