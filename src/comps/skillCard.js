import styled from "styled-components";

const CardContainer=styled.div`
    background-color: bisque;
    height: 15px;
    width: 100px;
`

export default function skillCard(props){
    return(
        <CardContainer>
            {props.skillName}           
        </CardContainer>
    )
}