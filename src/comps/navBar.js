import React from 'react'
import './style/navBar.css'
import NavBtn from './navBtn';
import Icon from './icon';
import Logo from './style/images/Logo.png';
import {Link} from 'react-router-dom'
class NavBar extends React.Component{
    render(){
    let icon=Logo;
        return(
            <div className="navbar">
                <Icon image={icon} text="Jonatan De Oliveira" subtext="front-end developer"/>
                <nav className="navBtn">
                    {/*<Link to="/">*/}
                        <NavBtn ref="Home" namebtn="home"/>
                    {/*</Link>*/}
                    {/*<Link to="/about">*/}
                        <NavBtn ref="About" namebtn="about me"/>
                    {/*</Link>*/}
                    {/*<Link to="/contact">*/}
                        <NavBtn ref="Contact" namebtn="contact"/>
                    {/*</Link>*/}
                </nav>
            </div>
        );
    }
}
export default NavBar;