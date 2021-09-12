import React from "react";
import {Link} from 'react-router-dom'
import NavBtn from './navBtn'
import '../style/navBar.css'
class WebNav extends React.Component{
    render(){
        let style={textDecoration: 'none'}
        return(
            <div className="navBtn">
                <Link to="/" style={style}>
                    <NavBtn ref="Home" namebtn="Home"/>
                </Link>
                <Link to="/about" style={style}>
                    <NavBtn ref="About" namebtn="About Me"/>
                </Link>
                <Link to="/contact" style={style}>
                    <NavBtn ref="Contact" namebtn="Contact"/>
                </Link>
            </div>
        );
    }
}
export default WebNav;