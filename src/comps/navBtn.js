import React from 'react'
import './style/navBtn.css'
class NavBtn extends React.Component{
    render(){
        return(
            <div className="navbtn">
                <a href={this.props.ref}>
                    {this.props.namebtn}
                </a>
            </div>
        );
    }
}
export default NavBtn;