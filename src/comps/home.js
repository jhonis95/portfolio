import React from 'react'

class Home extends React.Component{
    constructor(props){
        super(props);
        this.state={
            isToggleOn:true
        }
        this.handerClick=this.handerClick.bind(this);
    }
    handerClick(){//might need to change 
        this.setState(prevState=>({
            isToggleOn:!prevState.isToggleOn
        }));
    }
    render(){//resolve the warning 
        return(
            <div>
                <img src={this.props.image} alt="backGroundImg"/>
                <button onClick={this.handerClick}>Resume</button>
                <button onClick={this.handerClick}>Portfolio</button>
            </div>
        );
    }
}
export default Home