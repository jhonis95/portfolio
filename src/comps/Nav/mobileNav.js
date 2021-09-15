import React from 'react'
import '../style/navBar.css'
import NavBarLinks from './navBarLinks';
import {FiMenu} from 'react-icons/fi'
class MobileNav extends React.Component{
    constructor(props){
        super(props);
        this.state={
            click: false
        }
        this.handerClickMenu=this.handerClickMenu.bind(this);
    }
    handerClickMenu(){
        this.setState(prevState=>({
            click:!prevState.click
        }));
    }
    render(){
        return(
            <div id="mobileNav">
                <FiMenu className="hambugerMenu" onClick={this.handerClickMenu}/>
                {this.state.click&&<NavBarLinks/>}{/*if click is true will show the buttons */}
            </div>
        );
    }
}
export default MobileNav;