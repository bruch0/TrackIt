import styled from "styled-components";
import { useState, useContext, useEffect } from "react";
import icon from '../../Assets/thrashIcon.png'
import Swal from 'sweetalert2';

import { Context } from "../../Context/Context";
import NotLogged from '../Error/NotLogged'
import Topbar from "../../Components/Topbar/Topbar";
import Footer from "../../Components/Footer/Footer";
import { GetHabits, DeleteHabit } from '../../Services/Api'
import CreateHabit from './CreateHabit/CreateHabit';


function CheckLoggedHabits() {
    const {logged} = useContext(Context);
    if(logged) {
        return(
            <Habits />
        )
    }
    else {
        return(
            <NotLogged />
        )
    }
}

function Habits() {
    let [createHabit, setCreateHabit] = useState(false);
    let [habits, setHabits] = useState([]);
    let [newHabit, setNewHabit] = useState('');
    let {userToken} = useContext(Context);
    let weekdays = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'];

    useEffect(() => {
        GetHabits(userToken)
            .then((response) => {
                setHabits(response.data);
            })
	}, [userToken]);

    return (
        <Main>
            <Topbar />
            <MyHabits>
                <AddHabit>
                    <P>Meus hábitos</P>
                    <Button onClick={() => setCreateHabit(true)}>+</Button>
                </AddHabit>

                {createHabit ? <CreateHabit setCreateHabit={setCreateHabit} weekdays={weekdays} newHabit={newHabit} setNewHabit={setNewHabit} habits={habits} setHabits={setHabits}/> : ''}

                {habits.map((habit, index) => <Habit habits={habits} setHabits={setHabits} weekdays={weekdays} name={habit.name} selectedDays={habit.days} key={index} id={habit.id} access={index}/>)}
            </MyHabits>
            {habits.length === 0 ? <Tip /> : ''}
            <Footer />
        </Main>
    )
}

function Tip() {
    return (
        <TipText>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</TipText>
    )
}

function Habit({weekdays, name, selectedDays, id, habits, setHabits, access}) {
    let {userToken} = useContext(Context);

    function ConfirmDelete() {
        Swal.fire({
            title: 'Tem certeza?',
            text: "Essa ação não poderá ser revertida!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sim, deletar'
          }).then((result) => {
            if (result.isConfirmed) {
                let index = habits.indexOf(habits[access])
                habits.splice(index, 1)
                setHabits([...habits])
                DeleteHabit(userToken, id)
                    .then(() => Swal.fire(
                        'Sucesso',
                        'Esse hábito foi deletado',
                        'success'
                      ))
            }
          })
    }
    return(
        <CreatedHabit>
            <Wrapper>
                <HabitTitle>{name}</HabitTitle>
                <Week>
                    {weekdays.map((day, index) => <Day day={day} key={index} access={index} selectedDays={selectedDays}/>)}
                </Week>
            </Wrapper>
            <Delete src={icon} onClick={ConfirmDelete}/>
        </CreatedHabit>
    )
}

function Day({day, access, selectedDays}) {
    return (
        <WeekDay selected={selectedDays.indexOf(access) !== -1}>{day}</WeekDay>
    )
}

const Main = styled.div`
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #F2F2F2;
    padding-bottom: 80px;
`

const MyHabits = styled.div`
    width: 92%;
    padding-top: 98px;
`

const AddHabit = styled.div`
    width: 100%;
    height: 35px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
`

const P = styled.p`
    font-size: 23px;
    color: #126BA5;
`

const Button = styled.button`
    width: 40px;
    height: 35px;
    margin: 0px;
    padding: 0px;
    border-radius: 4.5px;
    border: 0px;
    background-color: #52B6FF;
    color: white;
    font-size: 29px;
`

const TipText = styled.p`
    width: 92%;
    font-size: 18px;
    color: #666666;
`

const CreatedHabit = styled.div`
    width: 100%;
    height: 90px;
    border-radius: 5px;
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    margin-bottom: 30px;
    position: relative;
`

const Delete = styled.img`
    width: 15px;
    position: absolute;
    top: 11px;
    right: 10px;
`

const Wrapper = styled.div`
    width: 90%;
    display: flex;
    flex-direction: column;
`

const HabitTitle = styled.p`
    font-size: 20px;
    color: #666666;
    margin-bottom: 15px;
`

const Week = styled.div`
    height: 30px;
    width: 100%;
    display: flex;
    pointer-events: ${props => props.loading ? 'none' : 'all'};
    opacity: ${props => props.loading ? '0.7' : '1'};
`

const WeekDay = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 30px;
    margin: 0px 4px 0px 0px;
    padding: 0px;
    border-radius: 5px;
    background-color: ${props => props.selected ? '#CFCFCF' : 'transparent'};
    border: 1px solid #D4D4D4;
    color: ${props => props.selected ? 'white' : '#DBDBDB'};
    font-size: 20px;
`

export default CheckLoggedHabits