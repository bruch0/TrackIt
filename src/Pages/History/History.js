import * as dayjs from 'dayjs'
import styled from 'styled-components'
import { useState, useContext, useEffect } from 'react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/calendar.css';
import Topbar from '../../Components/Topbar/Topbar'
import Footer from '../../Components/Footer/Footer'
import { Context } from '../../Context/Context';
import { GetHistory } from '../../Services/Api';

function History() {
    const {userToken} = useContext(Context);
    let [days, setDays] = useState([])
    let dates = [];
    let dones = [];

    useEffect(() => {
        GetHistory(userToken)
            .then((response) => setDays(response.data))
	}, [days]);

    

    function checkDay() {
        days.map((day) => dates.push(day.day))
        let check = []
        for (let i = 0; i < days.length; i++) {
        days[i].habits.map((habit) => check.push(habit.done));
        if (check.indexOf(false) !== -1) {
            dones.push(false)
            check = [];
        }
        else {
            check = [];
            dones.push(true)
        }
        }
    }

    if (days.length !== 0) {
        checkDay();
    }

    function setTileClassName (date) {
        let index = dates.indexOf(date);
        let calendarTileClass;
        let check = dones[index];
        console.log(date)
        check ? calendarTileClass = 'all-done' : calendarTileClass = 'not-all-done';
        return calendarTileClass
    }

    return(
        <Main>
            <Topbar />
            <P>Histórico</P>
            <HistoryDiv>
                <Calendar 
                    calendarType={'US'}
                    tileClassName={({ date }) => {
                        if (dates.indexOf(dayjs(date).format('DD/MM/YYYY')) !== -1) {
                          let tileClass = setTileClassName(dayjs(date).format('DD/MM/YYYY'));
                          return tileClass
                        }
                      }}
                />
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