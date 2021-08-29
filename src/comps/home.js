import React from 'react'
import Modal from 'react-modal'
import {Link} from 'react-router-dom'
import './style/home.css'
Modal.setAppElement('#root')//seting the app element

class Home extends React.Component{
    constructor(props){
        super(props);
        this.state={
            isToggleOnBtnResume:false,
            isToggleOnBtnProject:false,
            modalState:false
        }
        this.handerClickResume=this.handerClickResume.bind(this);
        this.handerClickProject=this.handerClickProject.bind(this);
    }
    handerClickResume(){
        this.setState(prevState=>({
            isToggleOnBtnResume:!prevState.isToggleOnBtnResume,
            modalState:!prevState.modalState //on click of resume props isOpen of modal will be true 
        }));
    }
    handerClickProject(){
        this.setState(prevState=>({
            isToggleOnBtnProject:!prevState.isToggleOnBtnProject
        }));
        if(this.state.isToggleOnBtnPortfolio===true){
        }
    }
    render(){//resolve the warning 
        return(
            <div className="home">
                <img src={this.props.image} alt="backGroundImg"/>
                <h1>Hi my name is Jonantan</h1>
                <p>welcome to my Portfolio</p>
                <div className="btnContainer">
                    <button id="resumeBtn" onClick={this.handerClickResume}>Resume</button>
                    <Link to="/projects"><button id="projectBtn" onClick={this.handerClickProject}>Portfolio</button></Link>
                </div>
                <Modal isOpen={this.state.modalState} onRequestClose={this.handerClickResume} style={{
                    overlay:{
                        backgroundColor:'gray',
                    },
                    content:{
                        color:'orange',
                    }
                }}>
                    <div className="closeBtn">
                        <button onClick={this.handerClickResume}>close modal</button>
                    </div>
                    <h2>My Resume</h2>
                    <img src="" alt=""/>
                    <button>download</button>
                </Modal>
            </div>
        );
    }
}
export default Home;