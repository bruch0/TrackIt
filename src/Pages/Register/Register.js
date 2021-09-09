import styled from "styled-components";
import logo from '../../Assets/logo.png';
import Loader from "react-loader-spinner";
import { Link, useHistory } from 'react-router-dom';
import { useState } from "react";
import { RegisterAPI } from "../../Services/Api";
import Swal from 'sweetalert2';


function Register() {
    let [userRegister, setUserRegister] = useState({email: '', name: '', image: '', password: ''});
    let [loading, setLoading] = useState(false);
    let history = useHistory();
    
    function changeEmail(e) {
        setUserRegister({email: e.target.value, name: userRegister.name, image: userRegister.image, password: userRegister.password})
    }
    function changeName(e) {
        setUserRegister({email: userRegister.email, name: e.target.value, image: userRegister.image, password: userRegister.password})
    }
    function changeImage(e) {
        setUserRegister({email: userRegister.email, name: userRegister.name, image: e.target.value, password: userRegister.password})
    }
    function changePassword(e) {
        setUserRegister({email: userRegister.email, name: userRegister.name, image: userRegister.image, password: e.target.value})
    }

    function RegisterUser(obj) {
        setLoading(true);
        RegisterAPI(obj)
            .then(() => history.push('/'))
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
            <Input placeholder="nome" onChange={(e) => changeName(e)} loading={loading}/>
            <Input placeholder="foto" onChange={(e) => changeImage(e)} loading={loading}/>

            {(!loading ? <Button onClick={() => RegisterUser(userRegister)}>Cadastrar</Button> : <Wrapper><Loader type="ThreeDots" color="white" height={45} width={80} /></Wrapper>)}
            
            <Link to='/'>
                <P>Já tem uma conta? Faça login!</P>
            </Link>
        </Main>
    )
}

const Main = styled.div`
    width: 100%;
    height: calc(100vh - 25%);
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
    border: 1px solid #D4D4D4;
    border-radius: 5px;
    margin-bottom: 6px;
    font-family: 'Lexend Deca';
    padding-left: 15px;
    pointer-events: ${props => props.loading ? 'none' : 'all'};
    opacity: ${props => props.loading ? '0.7' : '1'};
    :focus {
        outline: none;
    }
`

const Button = styled.button`
    width: 80%;
    height: 45px;
    margin: 0px;
    padding: 0px;
    border-radius: 4.5px;
    border: 0px;
    background-color: #52B6FF;
    color: white;
    font-size: 21px;
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
export default Register