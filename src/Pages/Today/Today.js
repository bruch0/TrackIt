import * as dayjs from 'dayjs'
import styled from 'styled-components'
import { Checkmark } from 'react-ionicons'
import { useContext, useState } from 'react'
import { GetTodayHabits } from '../../Services/Api'
import { Context } from '../../Context/Context'
import Topbar from '../../Components/Topbar/Topbar'
import Footer from '../../Components/Footer/Footer'
import Swal from 'sweetalert2';

function Today() {
    require('dayjs/locale/pt-br')
    let date = dayjs().locale('pt-br').format('dddd, DD/MM')

    const {userToken, dayProgress} = useContext(Context);
    let habits;

    GetTodayHabits(userToken)
        .then((response) => habits = response.data)
        .catch(() => {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Alguma coisa deu errado, tente novamente mais tarde',
            })
        });

    return(
        <Main>
            <Topbar />
            <TodayDiv>
                <P>{date}</P>
                <HabitPercentage color={dayProgress !== 0}>{dayProgress !== 0 ? `${dayProgress}% dos hábitos concluídos` : 'Nenhum hábito concluído ainda'}</HabitPercentage>
                <UserHabit />
            </TodayDiv>
            <Footer />
        </Main>
    )
}

function UserHabit() {
    return (
        <Habit>
            <Wrapper>
                <HabitTitle>Ler 1 livro</HabitTitle>
                <HabitDescription>sequencia atual: 5 dias</HabitDescription>
                <HabitDescription>seu recorde: 3 dias</HabitDescription>
            </Wrapper>
            <HabitButton>
                <Checkmark
                color={'#ffffff'} 
                title={''}
                height="60px"
                width="60px"
                />
            </HabitButton>
        </Habit>
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
    width: 92%;
    padding-top: 98px;
`

const P = styled.p`
    font-size: 23px;
    color: #126BA5;
`
const HabitPercentage = styled.p`
    margin: 10px 0px 30px 0px;
    font-size: 18px;
    color: ${props => props.color ? '#8FC549' : '#BABABA'};
`

const Habit = styled.div`
    width: 100%;
    height: 95px;
    padding: 0px 15px;
    background: #FFFFFF;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 10px;
`

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
`

const HabitTitle = styled.p`
    font-size: 20;
    color: #666666;
    margin-bottom: 10px;
`

const HabitDescription = styled.p`
    font-size: 13px;
    color: #666666;
    margin-bottom: 5px;
`

const HabitButton = styled.button`
    height: 69px;
    width: 69px;
    margin: 0px;
    border-radius: 5px;
    border: 0px;
    background-color: #EBEBEB;
    border: 0px;
    font-weight: bold;
    font-family: 'Lexend Deca';
`

export default Today