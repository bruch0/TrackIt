import * as dayjs from 'dayjs'
import styled from 'styled-components'
import { useState, useContext, useEffect } from 'react'
import Calendar from 'react-calendar'
import '../../Assets/Calendar.css';
import Topbar from '../../Components/Topbar/Topbar'
import Footer from '../../Components/Footer/Footer'
import { Context } from '../../Context/Context';
import { GetHistory } from '../../Services/Api';
import ShowDayActivity from './ShowDayActivity';
import NotLogged from '../Error/NotLogged'

function CheckLoggedHistory() {
    const {logged} = useContext(Context);
    if(logged) {
        return(
            <History />
        )
    }
    else {
        return(
            <NotLogged />
        )
    }
}

function History() {
    const {userToken} = useContext(Context);
    let [days, setDays] = useState([])
    let dates = [];
    let dones = [];

    useEffect(() => {
        GetHistory(userToken)
            .then((response) => {setDays(response.data)})
	}, [userToken]);

    function checkDay() {
        let check = []
        days.map((day) => dates.push(day.day))
        days.forEach(day => {
            day.habits.map((habit) => check.push(habit.done));
            if (check.indexOf(false) !== -1) {
                dones.push(false)
                check = [];
            }
            else {
                check = [];
                dones.push(true)
            }
        })
    }

    if (days.length !== 0) {
        checkDay();
        let today = dayjs().format('DD/MM/YYYY');
        if (dates[0] === today) {
            dates.shift()
            dones.shift()
        }
    }

    function setTileClassName (date) {
        let index = dates.indexOf(date);
        let calendarTileClass;
        let check = dones[index];
        check ? calendarTileClass = 'all-done' : calendarTileClass = 'not-all-done';
        return calendarTileClass
    }
    let [selected, setSelected] = useState({called: false, dates: [], day: ''});

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
                    onClickDay={(day) => setSelected({called: true, dates: dates, day: dayjs(day).format('DD/MM/YYYY')}) }
                />
            </HistoryDiv>
            {selected.called ? <ShowDayActivity data={selected} setSelected={setSelected} days={days} /> : ''}
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

export default CheckLoggedHistory