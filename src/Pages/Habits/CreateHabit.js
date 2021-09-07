import styled from "styled-components"

function CreateHabit() {
    return (
        <CreateNewHabit>
            <Wrapper>
                <Input placeholder='nome do hábito' />
                <Week>
                    <Day>S</Day>
                    <Day>T</Day>
                    <Day>Q</Day>
                    <Day>Q</Day>
                    <Day>S</Day>
                    <Day>S</Day>
                    <Day>D</Day>
                </Week>
            </Wrapper>
            <Options>
                <OptionsButton >
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

const Day = styled.button`
    width: 30px;
    height: 30px;
    margin: 0px 4px 0px 0px;
    padding: 0px;
    border-radius: 5px;
    border: 0px;
    background-color: transparent;
    border: 1px solid #D4D4D4;
    color: #DBDBDB;
    font-size: 20px;
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