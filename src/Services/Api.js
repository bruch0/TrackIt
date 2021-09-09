import axios from 'axios'
import { useContext } from 'react'


let URL = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/';

function LoginApi(obj) {
    const promise = axios.post(URL + 'auth/login', obj);
    return promise
}

function RegisterAPI(obj) {
    const promise = axios.post(URL + 'auth/sign-up', obj);
    return promise
}

function getTodayHabits() {
    const config = {
        headers: {
            Authorization: `Bearer `
        }
    }
    const promise = axios.get(URL + 'habits/today', config);
    return promise
}

export {
    LoginApi,
    RegisterAPI,
}