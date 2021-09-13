import Swal from 'sweetalert2';
import styled from 'styled-components';
import { CloseCircleOutline, Checkmark, CloseOutline } from 'react-ionicons'


function ShowDayActivity({data, setSelected, days}) {
    const {dates, day} = data;
    if (dates.indexOf(day) === -1) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Não há nenhum registro para esse dia',
        })
        return('')
    }
    else {
        let habits = []
        days.forEach((date) => {if (date.day === day) {
            habits = date.habits
        }})

        return <Activity setSelected={setSelected} day={day} habits={habits}/>
    }
}

function Activity({setSelected, day, habits}) {
    return (
        <DayActivity>
            <Container>
                <Top>
                    <P>{day}</P>
                    <CloseCircleOutline onClick={() => setSelected({called: false, dates: [], day: ''})}
                        color={'#00000'} 
                        height="30px"
                        width="30px"
                        />
                </Top>
                <HabitsContainer>
                    {habits.map((habit, index) => <HabitReview title={habit.name} done={habit.done} key={index}/>)}
                    
                    
                </HabitsContainer>
            </Container>
        </DayActivity>
    )
}

function HabitReview({title, done}) {
    return (
        <Habit>
            <HabitTitle>{title}</HabitTitle>
            {done ? <Checkmark
                color={'#8FC549'} 
                height="50px"
                width="50px"
            /> 
            : 
            <CloseOutline
            color={'red'} 
            height="50px"
            width="50px"
            />
            }
            
        </Habit>
    )
}

const DayActivity = styled.div`
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 2;
    background-color: rgba(0, 0, 0, 0.6);
    display: flex;
    justify-content: center;
    align-items: center;
`

const Container = styled.div`
    width: 80%;
    height: 60%;
    display: flex;
    flex-direction: column;
    background-color: white;
    padding: 15px;
    border-radius: 5px;
`

const Top = styled.div`
    width: 100%;
    height: 10%;
    display: flex;
    justify-content: space-between;
`

const P = styled.p`
    font-size: 30px;
`

const HabitsContainer = styled.div`
    width: 100%;
    height: 90%;
    padding-top: 15px;
`

const Habit = styled.div`
    width: 100%;
    height: 50px;
    padding: 0px 15px;
    background: #F2F2F2;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 15px;
`

const HabitTitle = styled.p`
    font-size: 20;
    color: #666666;
`

export default ShowDayActivity