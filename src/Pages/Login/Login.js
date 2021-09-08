import styled  from 'styled-components' 
import { Link, useHistory } from 'react-router-dom'
import logo from '../../logo.png'
import { LoginApi } from '../../Services/Api'
import { useState } from 'react'
import Loader from "react-loader-spinner";
import Swal from 'sweetalert2';


function Login() {
    let [userLogin, setUserLogin] = useState({email: '', password: ''});
    let [loading, setLoading] = useState(false);
    let history = useHistory();

    function changeEmail(e) {
        setUserLogin({email: e.target.value, password: userLogin.password})
    }
    function changePassword(e) {
        setUserLogin({email: userLogin.email, password: e.target.value})
    }

    function tryLogin() {
        setLoading(true);
        LoginApi(userLogin)
            .then((response) => {history.push('/hoje'); console.log(response)})
            .catch(() => {
                setLoading(false)
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Alguma coisa deu errado, tente novamente mais tarde',
                })
            })
    }
    return (
        <Main>
            <Img src={logo} />
            <Input placeholder="email" onChange={(e) => changeEmail(e)} loading={loading}/>
            <Input type='password' placeholder="senha" onChange={(e) => changePassword(e)} loading={loading}/>

            {(!loading ? <Button onClick={tryLogin}>Entrar</Button> : <Wrapper><Loader type="ThreeDots" color="white" height={45} width={80} /></Wrapper>)}

            <Link to='/cadastro'>
                <P>Não tem uma conta? Cadastre-se!</P>
            </Link>
        </Main>
    )
}

const Main = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    margin-top: 25%;
    align-items: center;
`

const Img = styled.img`
    width: 180px;
    margin-bottom: 35px;
`

const Input = styled.input`
    width: 80%;
    height: 45px;
    background: transparent;
    color: black;
    border: 1px solid #D4D4D4;
    border-radius: 5px;
    margin-bottom: 6px;
    font-family: 'Lexend Deca';
    padding-left: 15px;
    pointer-events: ${props => props.loading ? 'none' : 'all'};
    opacity: ${props => props.loading ? '0.7' : '1'};
`

const Button = styled.button`
    height: 45px;
    width: 80%;
    margin: 0px;
    border-radius: 4.5px;
    border: 0px;
    background-color: #52B6FF;
    border: 0px;
    color: white;
    font-size: 21px;
    font-family: 'Lexend Deca';
`

const P = styled.p`
    text-align: center;
    font-size: 14px;
    color: #52B6FF;
    text-decoration: underline;
    margin-top: 19px;
`

const Wrapper = styled.div`
    width: 80%;
    height: 45px;
    border-radius: 4.5px;
    background-color: #52B6FF;
    opacity: 0.7;
    display: flex;
    justify-content: center;
`

export default Login