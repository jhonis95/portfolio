import React from 'react'
class ProjectsBox extends React.Component{
    render(){
        return(
            <div className="projectViewContainer">
                <h3>{this.props.name}</h3>
                <img src={this.props.image} alt="project img"/>
                <p>{this.props.description}</p>
                <p>View:</p> 
                <button>code</button>{/*using the props code to link the project to github code */}
                <button>project</button>{/*using the props site to link the project to the site*/}
            </div>
        );
    }
}
export default ProjectsBox