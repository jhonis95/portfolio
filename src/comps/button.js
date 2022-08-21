import styled from "styled-components";

const Btn = styled.button`

`
export default function Button(){
    
    return(
        <Btn>
            {this.props.btnName}
        </Btn>
    )
} 