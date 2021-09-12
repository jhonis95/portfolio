import React from 'react'
import '../style/icon.css'
class Icon extends React.Component{
    render(){
        return(
            <div className="icon">
               <img id="iconImg"src={this.props.image} alt="icon"width="50" height="50" />
               <div className="iconText">
                    <p id="name">{this.props.text}</p>
                    <p id="subtext">{this.props.subtext}</p>
               </div>
            </div>
        );
    }
}
export default Icon;