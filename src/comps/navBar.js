import React from 'react'
import './style/navBar.css'
class navBar extends React.Component{
    render(){
        return(
            <div className="navbar">
                <img src="" alt="icone"/>
                <nav>
                    <a href="Home"></a>
                    <a href="Contacs"></a>
                    <a href="About me"></a>
                </nav>
            </div>
        );
    }
}
export default navBar;