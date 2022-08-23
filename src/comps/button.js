import styled from "styled-components";

const Btn = styled.button`
    min-width: 267px;
    padding: 20px;
    color:${props=>props.textColor?props.textColor:'black'};
    background-color: ${props=>props.buttonColor?props.buttonColor:'white'};
    font-size: ${props=>props.fontSize}rem;
    border: 3px solid black;
    border-radius:5px;
    box-shadow: 5px 5px 14px 4px rgba(0,0,0,0.39);
`
export default function Button(props){
    return(
        <Btn 
            fontSize={props.textSize}
            buttonColor={props.buttonColor}
            textColor={props.textColor}
        >
            {props.btnName}
        </Btn>
    )
} 