import React from 'react'
class ProjectsView extends React.Component{
    render(){
        return(
            <div className="projectViewContainer">
                <h3>{this.props.name}</h3>
                <img src="" alt="project img"/>
                <p>{this.props.description}</p>
            </div>
        );
    }
}
export default ProjectsView