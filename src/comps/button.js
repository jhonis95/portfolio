import {Component} from "react";
import styled from "styled-components";

const Btn = styled.button`

`

class Button extends Component{
    render(){
        return(
            <Btn>
                {this.props.btnName}
            </Btn>
        )
    }
}
export default Button