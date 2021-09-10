import * as dayjs from 'dayjs'
import styled from 'styled-components'
import { Checkmark } from 'react-ionicons'
import { useContext, useEffect, useState } from 'react'
import { GetTodayHabits, ChangeHabitState } from '../../Services/Api'
import { Context } from '../../Context/Context'
import Topbar from '../../Components/Topbar/Topbar'
import Footer from '../../Components/Footer/Footer'
import Swal from 'sweetalert2';

function Today() {
    require('dayjs/locale/pt-br')
    let date = dayjs().locale('pt-br').format('dddd, DD/MM')

    const {userToken, dayProgress} = useContext(Context);
    let [habits, setHabits] = useState([])

    useEffect(() => {
        GetTodayHabits(userToken)
        .then((response) => setHabits(response.data))
        .catch(() => {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Alguma coisa deu errado, tente novamente mais tarde',
            })
        });
	}, [userToken]);

    return(
        <Main>
            <Topbar />
            <TodayDiv>
                <P>{date}</P>
                <HabitPercentage color={dayProgress !== 0}>{dayProgress !== 0 ? `${dayProgress}% dos hábitos concluídos` : 'Nenhum hábito concluído ainda'}</HabitPercentage>
                {habits.map((habit, index) => <UserHabit title={habit.name} habitSpree={habit.currentSequence} habitRecord={habit.highestSequence} id={habit.id} key={index} habitDone={habit.done} />)}
            </TodayDiv>
            <Footer />
        </Main>
    )
}

function UserHabit({title, habitSpree, habitRecord, id, habitDone}) {
    let [done, setDone] = useState(habitDone);
    let [spree, setSpree] = useState(habitSpree);
    let [record, setRecord] = useState(habitRecord);
    const {userToken} = useContext(Context);

    function uncheck() {
        if (record === spree && record !== 0) {
            setRecord(record - 1)
        }
        setSpree(spree - 1);
    }

    function check() {
        if (record === spree) {
            setRecord(record + 1)
        }
        setSpree(spree + 1);
    }

    function ChangeHabit(token, id) {
        if (!done) {
            ChangeHabitState(token, id, 'check');
            setDone(true);
            check();
        }
        else {
            ChangeHabitState(token, id, 'uncheck');
            setDone(false);
            uncheck();
        }
    }

    return (
        <Habit>
            <Wrapper>
                <HabitTitle>{title}</HabitTitle>
                <HabitDescription>Sequencia atual: <Span done={done}>{spree} {spree > 1 ? 'dias' : 'dia'}</Span></HabitDescription>
                <HabitDescription>Seu recorde: <Span done={spree === record && record !== 0}>{record} {spree > 1 ? 'dias' : 'dia'}</Span></HabitDescription>
            </Wrapper>
            <HabitButton onClick={() => ChangeHabit(userToken, id)} done={done}>
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

const Span = styled.span`
    color: ${props => props.done ? '#8FC549' : '#666666'};
`

const HabitButton = styled.button`
    height: 69px;
    width: 69px;
    margin: 0px;
    border-radius: 5px;
    border: 0px;
    background-color: ${props => props.done ? '#8FC549' : '#EBEBEB'};
    border: 0px;
    font-weight: bold;
    font-family: 'Lexend Deca';
`

export default Today