import React from 'react'
import './style/projectsView.css'
class ProjectsBox extends React.Component{
    render(){
        return(
            <div className="project">
                <h3>{this.props.name}</h3>
                <div className="imageContainer">
                    <img src={this.props.image} alt="project img"/>
                </div>
                <div className="descripitionContainer">
                    <p>{this.props.description}</p>
                </div>
                <p className="subTitle">technologies used in this project:</p>
                <p>{this.props.technologies}</p>
                <p className="subTitle">View:</p>
                <div className="buttonContainer">
                <button>code</button>{/*using the props code to link the project to github code */}
                <button>project</button>{/*using the props site to link the project to the site*/}
                </div>
            </div>
        );
    }
}
export default ProjectsBox;