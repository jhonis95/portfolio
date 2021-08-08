import React from 'react'
import './style/navBar.css'
import NavBtn from './navBtn';
class NavBar extends React.Component{
    render(){
        return(
            <div className="navbar">
                <img src="" alt="icone"/>
                <nav className="navbtn">
                    <NavBtn ref="Home" namebtn="home"/>
                    <NavBtn ref="About" namebtn="about me"/>
                    <NavBtn ref="Contact" namebtn="contact"/>
                </nav>
            </div>
        );
    }
}
export default NavBar;