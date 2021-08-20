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
            //make the overload page to  show the resume
        }
    }
    handerClickPortifolio(){
        
        this.setState(prevState=>({
            isToggleOnBtnPortfolio:!prevState.isToggleOnBtnPortfolio
        }));
        if(this.state.isToggleOnBtnPortfolio===true){
            //make the overload page to  show the projects
        }
    }
    render(){//resolve the warning 
        return(
            <div className="home">
                <img src={this.props.image} alt="backGroundImg"/>
                <h1>hi my name is Jonantan</h1>
                <p>wellcome to my Portfolio</p>
                <div className="btnContainer">
                    <button id="resumeBtn" onClick={this.handerClickResume}>Resume</button>
                    <button id="portfolioBtn" onClick={this.handerClickPortifolio}>Portfolio</button>
                </div>
            </div>
        );
    }
}
export default Home