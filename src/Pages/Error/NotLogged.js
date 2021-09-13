import { Link } from "react-router-dom";
import styled from "styled-components";

function NotLogged() {
    return (
        <Main>
            <Container>
                <P>Opa! Parece que você não está logado</P>
                <Link to='/'>
                    <Button>
                        Clique aqui para voltar para o menu principal
                    </Button>
                </Link>
            </Container>
        </Main>
    )
}

const Main = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Container = styled.div`
    width: 80%;
    height: 90%;
    background-color: #F2F2F2;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
`

const P = styled.p`
    font-size: 25px;
    text-align: center
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
    font-size: 15px;
    font-family: 'Lexend Deca';
    margin: 0px 10%;
`

export default NotLogged