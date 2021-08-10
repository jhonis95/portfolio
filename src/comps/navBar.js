import React from 'react'
import './style/navBar.css'
import NavBtn from './navBtn';
import Icon from './icon';
import Logo from './style/images/Logo.png';
class NavBar extends React.Component{
    render(){
    let icon=Logo;
        return(
            <div className="navbar">
                <Icon image={icon} text="Jonatan De Oliveira" subtext="front-end developer"/>
                <nav className="navBtn">
                    <NavBtn ref="Home" namebtn="home"/>
                    <NavBtn ref="About" namebtn="about me"/>
                    <NavBtn ref="Contact" namebtn="contact"/>
                </nav>
            </div>
        );
    }
}
export default NavBar;