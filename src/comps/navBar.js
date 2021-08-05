import React from 'react'
import './style/navBar.css'
class NavBar extends React.Component{
    render(){
        return(
            <div className="navbar">
                <img src="" alt="icone"/>
                <nav className="navbtn">
                    <a href="Home">home</a>
                    <a href="Contacs">contacs</a>
                    <a href="About me">about me</a>
                </nav>
            </div>
        );
    }
}
export default NavBar;