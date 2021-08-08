import React from 'react'
import './style/navBar.css'
import NavBtn from './navBtn';
import Icon from './icon';
class NavBar extends React.Component{
    render(){
        return(
            <div className="navbar">
                <Icon image="" text="Jonatan De Oliveira"/>
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