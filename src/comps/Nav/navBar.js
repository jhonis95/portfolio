import React, { Component } from 'react';

class navBar extends Component{
    render(){
        return(
            <>
                <img src={"./logo192.png"} alt="logo"/>
                <h2 className="title">Jhonis.dev</h2>
                <ul>
                    <a>Home</a>s
                    <a>Projects</a>
                    <a>Contact</a>
                </ul>
            </>
        )
    }
}
export default navBar