import styled from "styled-components";

const Card=styled.div`
    background-color: bisque;
    height: 15px;
    width: 100px;
`

export default function skillCard(props){
    return(
        <Card>
            {props.skillName}           
        </Card>
    )
}