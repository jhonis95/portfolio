import React from 'react'
import '../style/navBar.css'
import Icon from './icon';
import Logo from '../style/images/Logo.png';
import WebNav from './webNav';
import MobileNav from './mobileNav'
class NavBar extends React.Component{
    render(){
    let icon=Logo;
        return(
            <nav className="navBar">
                <Icon image={icon} text="Jonatan De Oliveira" subtext="front-end developer"/>
                <WebNav/>
                <MobileNav/>
            </nav>
        );
    }
}
export default NavBar;