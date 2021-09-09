import * as dayjs from 'dayjs'
import styled from 'styled-components'
import { useState } from 'react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/calendar.css';
import Topbar from '../../Components/Topbar/Topbar'
import Footer from '../../Components/Footer/Footer'

function History() {
    const [value, onChange] = useState(new Date());

    return(
        <Main>
            <Topbar />
            <P>Histórico</P>
            <HistoryDiv>
                <Calendar />
            </HistoryDiv>
            <Footer />
        </Main>
    )
}

const Main = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #F2F2F2;
`

const P = styled.p`
    padding-top: 98px;
    margin-bottom: 20px;
    width: 92%;
    font-size: 23px;
    color: #126BA5;
`

const HistoryDiv = styled.div`
    width: 92%;
`

export default History