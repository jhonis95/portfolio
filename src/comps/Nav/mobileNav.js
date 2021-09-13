import React from 'react'
import '../style/navBar.css'
import NavBarLinks from './navBarLinks';
class MobileNav extends React.Component{
    render(){
        return(
            <div id="mobileNav">
                <NavBarLinks/>
            </div>
        );
    }
}
export default MobileNav;