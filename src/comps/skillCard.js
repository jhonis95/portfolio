import styled from "styled-components";
import {FaGitSquare,FaReact,FaJsSquare,FaCss3Alt,FaHtml5 } from "react-icons/fa";
const Card=styled.div`
    background-color: ${props=>props.backgroundColor};
    height: 30px;
    width: 100%;
    display: flex;
    justify-content: center;
    border-radius: 5px;
    border: 2px solid black;
`
const Text=styled.p`
    margin: 5px 0px;
    font-size: large;
    font-weight: 1000;
    -webkit-text-stroke: 0.8px white;
`
export default function skillCard(props){
    return(
        <Card backgroundColor={props.backgroundColor}>
            {
                setIcon(props.icon)
            }
            <Text>{[props.text]}</Text>
        </Card>
    )
}
function setIcon(icon){
    const fontStyles = {fontSize: '2rem',};
    switch(icon){
        case 'FaGitSquare':
            return(<FaGitSquare style={fontStyles}/>);
        case 'FaReact':
            return(<FaReact style={fontStyles} />);
        case 'FaJsSquare':
            return(<FaJsSquare style={fontStyles}/>)
        case 'FaCss3Alt':
            return(<FaCss3Alt style={fontStyles}/>)
        case 'FaHtml5':
            return(<FaHtml5 style={fontStyles}/>)
        default:
            break;
    }
}