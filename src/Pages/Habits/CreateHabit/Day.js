import styled from "styled-components"


function Day({day, changeCurrentDays, selectedDays, access}) {
    return (
        <WeekDay
            onClick={(e) => changeCurrentDays(e)}
            selected={(selectedDays.indexOf(access) !== -1)}>
                {day}
        </WeekDay>
    )
}

const WeekDay = styled.button`
    width: 30px;
    height: 30px;
    margin: 0px 4px 0px 0px;
    padding: 0px;
    border-radius: 5px;
    border: 0px;
    background-color: ${props => props.selected ? '#CFCFCF' : 'transparent'};
    border: 1px solid #D4D4D4;
    color: ${props => props.selected ? 'white' : '#DBDBDB'};
    font-size: 20px;
`

export default Day