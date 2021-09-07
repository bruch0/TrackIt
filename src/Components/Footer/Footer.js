import {
    CircularProgressbar,
    buildStyles
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import styled from "styled-components";

function Footer(props) {
    let percentage = 66;
    return (
        <FooterDiv>
            <P>Hábitos</P>
            <Wrapper>
                <CircularProgressbar
                    value={percentage}
                    text={`Hoje`}
                    background
                    backgroundPadding={6}
                    styles={buildStyles({
                    backgroundColor: "#52B6FF",
                    textColor: "#fff",
                    pathColor: "#fff",
                    trailColor: "transparent",
                    })}
                />
            </Wrapper>
            <P>Histórico</P>
        </FooterDiv>
    )
}

const FooterDiv = styled.div`
    width: 100%;
    height: 70px;
    background-color: white;
    display: flex;
    justify-content: space-around;
    align-items: center;
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 1;
`

const P = styled.p`
    font-size: 18px;
    color: #52B6FF;
`

const Wrapper = styled.div`
    width: 91px;
    padding-bottom: 45px;
`

export default Footer