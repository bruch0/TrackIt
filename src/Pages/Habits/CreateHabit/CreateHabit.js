import styled from "styled-components";
import { useState, useContext } from "react";
import { useHistory } from 'react-router-dom'
import Day from './Day';
import { CreateUserHabit } from '../../../Services/Api';
import Swal from 'sweetalert2';
import { Context } from "../../../Context/Context";
import Loader from "react-loader-spinner";

function CreateHabit({setCreateHabit, weekdays, newHabit, setNewHabit, habits, setHabits}) {
    let history = useHistory();
    let [selectedDays, setSelectedDays] = useState([]);
    let [loading, setLoading] = useState(false);
    
    const {userToken} = useContext(Context);

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

    let postBody = {
        name: newHabit,
        days: selectedDays
    }

    function sendToAPI() {
        setLoading(true);
        CreateUserHabit(userToken, postBody)
            .then(() => {
                history.push('/habitos');
                setLoading(false);
                setCreateHabit(false);
                setHabits([...habits, postBody])
            })
            .catch(() => {
                setLoading(false)
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Alguma coisa deu errado, tente novamente mais tarde',
                })
            })
    }

    return (
        <CreateNewHabit>
            <Wrapper>
                <Input placeholder='nome do hábito' onChange={(e) => setNewHabit(e.target.value)} value={newHabit} loading={loading}/>
                <Week>
                    {weekdays.map((day, index) => <Day day={day} changeCurrentDays={changeCurrentDays} selectedDays={selectedDays} key={index} access={index}  loading={loading}/>)}
                </Week>
            </Wrapper>
            <Options>
                <OptionsButton onClick={() => setCreateHabit(false)}>
                    Cancelar
                </OptionsButton>
                
                {(!loading ?
                <OptionsButton background={'#52B6FF'} color={'white'} onClick={() => sendToAPI()}>
                    Salvar
                </OptionsButton>
                 : 
                <LoadingWrapper>
                     <Loader type="ThreeDots" color="white" height={45} width={80} />
                </LoadingWrapper>
                 )}
                
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
    pointer-events: ${props => props.loading ? 'none' : 'all'};
    opacity: ${props => props.loading ? '0.7' : '1'};
`

const Week = styled.div`
    height: 30px;
    width: 100%;
    display: flex;
    pointer-events: ${props => props.loading ? 'none' : 'all'};
    opacity: ${props => props.loading ? '0.7' : '1'};
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
const LoadingWrapper = styled.div`
    width: 80px;
    height: 35px;
    margin-left: 20px;
    border-radius: 4.5px;
    background-color: #52B6FF;
    opacity: 0.7;
    display: flex;
    justify-content: center;
    align-items: center;
`

export default CreateHabit