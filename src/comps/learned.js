import styled from "styled-components"

const LearnedList= styled.ul`

`
const Content=styled.p`
    
`
export default function Learned(props){
    return(
        <LearnedList>
            <Content>{props.content}</Content>
        </LearnedList>
    )
}