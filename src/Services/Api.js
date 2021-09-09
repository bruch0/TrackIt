import axios from 'axios'


let URL = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/';

function LoginApi(obj) {
    const promise = axios.post(URL + 'auth/login', obj);
    return promise
}

function RegisterAPI(obj) {
    const promise = axios.post(URL + 'auth/sign-up', obj);
    return promise
}

function GetTodayHabits(token) {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    const promise = axios.get(URL + 'habits/today', config);
    return promise
}

export {
    LoginApi,
    RegisterAPI,
    GetTodayHabits,
}