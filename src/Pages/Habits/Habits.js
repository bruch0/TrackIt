import Topbar from "../../Components/Topbar";
import styled from "styled-components";
import { Link } from "react-router-dom";

function Habits() {
    return (
        <Main>
            <Topbar />
        </Main>
    )
}

const Main = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export default Habits