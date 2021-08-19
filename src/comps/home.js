import React from 'react'
import './style/home.css'

class Home extends React.Component{
    constructor(props){
        super(props);
        this.state={
            isToggleOnBtnResume:false,
            isToggleOnBtnPortfolio:false
        }
        this.handerClickResume=this.handerClickResume.bind(this);
        this.handerClickPortifolio=this.handerClickPortifolio.bind(this);
    }
    handerClickResume(){//might need to change 
        this.setState(prevState=>({
            isToggleOnBtnResume:!prevState.isToggleOnBtnResume
        }));
        
        if(this.state.isToggleOnBtnResume===true){
            
        }
    }
    handerClickPortifolio(){
        
        this.setState(prevState=>({
            isToggleOnBtnPortfolio:!prevState.isToggleOnBtnPortfolio
        }));
        if(this.state.isToggleOnBtnPortfolio===true){

        }
    }
    render(){//resolve the warning 
        return(
            <div>
                <img src={this.props.image} alt="backGroundImg"/>
                <button onClick={this.handerClickResume}>Resume</button>
                <button onClick={this.handerClickPortifolio}>Portfolio</button>
            </div>
        );
    }
}
export default Home