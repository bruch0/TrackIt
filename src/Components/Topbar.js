import styled from "styled-components";

function Topbar() {
    return (
        <TopbarDiv>
            <P>TrackIt</P>
            <Img src='https://yt3.ggpht.com/ytc/AKedOLQ6Ief26j8b1lgSA1OpXSCzJBlnlEEsWtQAfdwB=s176-c-k-c0x00ffffff-no-rj' />
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