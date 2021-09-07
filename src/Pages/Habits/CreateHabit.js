import styled from "styled-components";
import { useState } from "react";
import Day from './Day';

function CreateHabit({setCreateHabit}) {
    let [selectedDays, setSelectedDays] = useState([]);
    let weekdays = ['S', 'T', 'Q', 'Q', 'S', 'S', 'D'];

    function changeCurrentDays(e) {
        let arr = [].slice.call(e.target.parentNode.children);
        let x = ((arr.indexOf(e.target)));
        let index = selectedDays.indexOf(x);
        if (index === -1){
            setSelectedDays([...selectedDays, x]);
        }
        else {
            selectedDays.splice(index, 1);
            setSelectedDays([...selectedDays]);
        }
    }
    console.log(selectedDays)

    return (
        <CreateNewHabit>
            <Wrapper>
                <Input placeholder='nome do hábito' />
                <Week>
                    {weekdays.map((day, index) => <Day day={day} changeCurrentDays={changeCurrentDays} selectedDays={selectedDays} key={index} access={index}/>)}
                </Week>
            </Wrapper>
            <Options>
                <OptionsButton onClick={() => setCreateHabit(false)}>
                    Cancelar
                </OptionsButton>
                <OptionsButton background={'#52B6FF'} color={'white'}>
                    Salvar
                </OptionsButton>
            </Options>
        </CreateNewHabit>
    )
}

const CreateNewHabit = styled.div`
    width: 100%;
    height: 180px;
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    margin-bottom: 30px;
`

const Wrapper = styled.div`
    width: 90%;
    display: flex;
    flex-direction: column;
`

const Input = styled.input`
    width: 100%;
    height: 45px;
    background: transparent;
    font-size: 20px;
    border: 1px solid #D4D4D4;
    border-radius: 5px;
    margin-bottom: 8px;
    font-family: 'Lexend Deca';
    padding-left: 15px;
`

const Week = styled.div`
    height: 30px;
    width: 100%;
    display: flex;
`

const Options = styled.div`
    width: 90%;
    height: 35px;
    display: flex;
    justify-content: end;
`

const OptionsButton = styled.button`
    height: 35px;
    margin: 0px 0px 0px 20px;
    padding: ${props => props.background ? '7px 17px' : '0px'};
    border-radius: 4.5px;
    border: 0px;
    background-color: ${props => props.background ? props.background : 'transparent'};
    border: 0px;
    color: ${props => props.color ? props.color : '#52B6FF'};;
    font-size: 16px;
`

export default CreateHabit