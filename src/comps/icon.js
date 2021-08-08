import React from 'react'
import './style/icon.css'
class Icon extends React.Component{
    render(){
        return(
            <div className="icon">
               <img src={this.props.image} alt="icom"/>
               <p>{this.props.text}</p>
            </div>
        );
    }
}
export default Icon;