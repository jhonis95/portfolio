import styled from "styled-components";

const Btn = styled.button`

`
export default function Button(props){
    return(
        <Btn>
            {props.btnName}
        </Btn>
    )
} 