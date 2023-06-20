import styled from "styled-components"

const LearnedList= styled.ul`

`
const Content=styled.li`
    font-size: small;
`
export default function Learned(props){
    const list=props.content.map((text)=>{
        return <Content key={props.content.indexOf(text)}>{text}</Content>
    })
    return(
            <LearnedList>
                { 
                    list
                }
            </LearnedList>
    )
}