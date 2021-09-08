import * as dayjs from 'dayjs'
import styled from 'styled-components'
import { useState } from 'react'
import Topbar from '../../Components/Topbar/Topbar'
import Footer from '../../Components/Footer/Footer'


function Today() {
    return(
        <Main>
            <Topbar />
            <TodayDiv>
                
            </TodayDiv>
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

const TodayDiv = styled.div`
    width: 100%;
    padding-top: 98px;
`

export default Today