import axios from 'axios'

let URL = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/';

function LoginApi() {
    let obj = {
        email: "lucas",
        password: "123"
    }
    axios.post(URL + 'auth/login', obj)
        .then(function(response) {console.log(response)})
}

function RegisterAPI(obj) {
    axios.post(URL + 'auth/sign-up', obj);
}
export {
    LoginApi,
    RegisterAPI,
}