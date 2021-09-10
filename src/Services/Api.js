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

function GetHabits(token) {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    const promise = axios.get(URL + 'habits', config);
    return promise
}

function CreateUserHabit(token, body) {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    const promise = axios.post(URL + 'habits', body, config);
    return promise
}

function DeleteHabit(token, id) {
    const config = {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }

    const promise = axios.delete(URL + `habits/${id}`, config);
    return promise
}

function ChangeHabitState(token, id, state) {
    const config = {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    axios.post(URL + `habits/${id}/${state}`, {}, config)
}

export {
    LoginApi,
    RegisterAPI,
    GetTodayHabits,
    GetHabits,
    CreateUserHabit,
    DeleteHabit,
    ChangeHabitState,
}