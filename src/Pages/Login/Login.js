import styled  from 'styled-components' 
import { Link } from 'react-router-dom'
import logo from '../../logo.png'
import LoginApi from '../../Api/Api'

function Login() {
    return (
        <Main>
            <Img src={logo} />
            <Input placeholder="email" />
            <Input placeholder="senha" />
            <Link to='/habitos'>
                <Input
                    type="submit"
                    value="Entrar"
                    background={'#52B6FF'}
                    color={'white'}
                    size={'21px'}
                    link={true}
                />
            </Link>
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
    width: ${props => props.link ? '100%' : '80%'};
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

export default Login