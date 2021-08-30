import React from 'react'
import './style/navBar.css'
import NavBtn from './navBtn';
import Icon from './icon';
import Logo from './style/images/Logo.png';
import {Link} from 'react-router-dom'
class NavBar extends React.Component{
    render(){
    let icon=Logo;
    let style={textDecoration: 'none'}
        return(
            <div className="navbar">
                <Icon image={icon} text="Jonatan De Oliveira" subtext="front-end developer"/>
                <nav className="navBtn">
                    <Link to="/" style={style}>
                        <NavBtn ref="Home" namebtn="home"/>
                    </Link>
                    <Link to="/about" style={style}>
                        <NavBtn ref="About" namebtn="about me"/>
                    </Link>
                    <Link to="/contact" style={style}>
                        <NavBtn ref="Contact" namebtn="contact"/>
                    </Link>
                </nav>
            </div>
        );
    }
}
export default NavBar;