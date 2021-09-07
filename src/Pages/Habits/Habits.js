import Topbar from "../../Components/Topbar";
import styled from "styled-components";
import { Link } from "react-router-dom";
import CreateHabit from './CreateHabit'
import { useState } from "react";

function Habits() {
    let [createHabit, setCreateHabit] = useState(false)

    return (
        <Main>
            <Topbar />
            <MyHabits>
                <AddHabit>
                    <P>Meus hábitos</P>
                    <Button onClick={() => setCreateHabit(true)}>+</Button>
                </AddHabit>
                {createHabit ? <CreateHabit setCreateHabit={setCreateHabit}/> : ''}
            </MyHabits>
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

export default Habits