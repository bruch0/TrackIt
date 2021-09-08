import styled from "styled-components";
import {  useContext } from 'react'
import { LoginContext } from '../../Context/Context'


function Topbar() {
    const {userPhoto} = useContext(LoginContext);

    return (
        <TopbarDiv>
            <P>TrackIt</P>
            <Img src={userPhoto} />
        </TopbarDiv>
    )
}

const TopbarDiv = styled.div`
    width: 100%;
    height: 70px;
    padding: 0px 5%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
    background-color: #126BA5;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0px 4px 4px 0px #00000026;
`

const P = styled.p`
    font-family: 'Playball';
    font-size: 39px;
    color: white;
`

const Img = styled.img`
    width: 51px;
    height: 51px;
    border-radius: 50%;
`

export default Topbar