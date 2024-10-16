import {get,set,remove} from "~/utils/storage";
import $axios from "~/utils/axios";
import { config } from "@/utils/baseUrl";

interface LoginUserModel{
    email:string,
    password:string
}

interface RegisterUserModel{
    name:string,
    email:string,
    password:string,
    password_confirmation:string
}

interface ResetUserPasswordModel {
    email:string,
    password:string,
    password_confirmation:string,
    token:string
}

interface ForgotPasswordModel {
    email:string
}

interface TokenModel {
    token:string
}

export async function isLoggedIn(){
    const access_token = await get('access_token')
    if(!access_token){
        return false
    }
    return true
}

export async function loginUser(user: LoginUserModel) {
    const data = await $axios.post(config.API_BASE_URL + 'login', user)
    .then((res: any) => {
        const access_token = res.data.access_token;
        const is_setup = res.data.user.calories > 0 ? 'true' : 'false';

        set('is_setup', is_setup);
        set('access_token', access_token);
        return true;
    })
    .catch((err: any) => {
        console.log(err);
        remove('access_token');
        remove('is_setup');
        return false;
    });

    return data;
}

export async function registerUser(user:RegisterUserModel){
    const data = await $axios.post(config.API_BASE_URL + 'register',user).then((res:any)=>{
        return true
    })
    .catch((err:any)=>{
        console.log(err)
        return false
    })
    return data

}

export async function logout(forceLogout = false){
    if(!forceLogout){
        await $axios.post(config.API_BASE_URL + 'logout').then((res:any)=>{
            remove('access_token')
            remove('is_setup')
            delete $axios.defaults.headers.common['Authorization']
        })
    }else{
        remove('access_token')
        remove('is_setup')
        delete $axios.defaults.headers.common['Authorization']
    }
}

export async function refreshToken(){
    const data = await $axios.post(config.API_BASE_URL + 'refresh').then((res:any)=>{
        const access_token = res.data.access_token
        set('access_token',access_token)
        return true
    })
    .catch((err:any)=>{
        console.log(err)
        return false
    })
    return data
}

export async function forgotPassword(email:ForgotPasswordModel){
    const data = await $axios.post(config.API_BASE_URL + 'forgotPassword',email).then((res:any)=>{
        if(res.status === 200){
            return true
        }
        return false
    })
    .catch((err:any)=>{
        console.log(err)
        return false
    })
    return data
}

export async function resetUserPassword(credentials:ResetUserPasswordModel){
    const data = await $axios.post(config.API_BASE_URL + 'resetPassword',credentials).then((res:any)=>{
        if(res.status === 200){
            return true
        }
        return false
    })
    .catch((err:any)=>{
        console.log(err)
        return false
    })
    return data
}

export async function storeFCMToken(token:TokenModel){
    const data = await $axios.post(config.API_BASE_URL + 'storeFCMToken',token).then((res:any)=>{
        return true
    })
    .catch((err:any)=>{
        console.log(err)
        return false
    })
    return data
}