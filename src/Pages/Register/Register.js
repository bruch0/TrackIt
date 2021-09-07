import styled from "styled-components"
import logo from '../../logo.png'
import { Link } from 'react-router-dom'

function Register() {
    return (
        <Main>
            <Img src={logo} />
            <Input placeholder="email" />
            <Input placeholder="senha" />
            <Input placeholder="nome" />
            <Input placeholder="foto" />
            <Input
                type="submit"
                value="Cadastrar"
                background={'#52B6FF'}
                color={'white'}
                size={'21px'}
            />
            <Link to='/'>
                <P>Já tem uma conta? Faça login!</P>
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
    background: ${props => props.background ? props.background : 'transparent'};
    color: ${props => props.color ? props.color : 'black'};
    font-size: ${props => props.size ? props.size : ''};
    border: 1px solid #D4D4D4;
    border-radius: 5px;
    margin-bottom: 6px;
    font-family: 'Lexend Deca';
    padding-left: 15px;
`

const P = styled.p`
    text-align: center;
    font-size: 14px;
    color: #52B6FF;
    text-decoration: underline;
    margin-top: 19px;
`
export default Register