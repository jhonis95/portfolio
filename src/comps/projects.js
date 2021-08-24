import React from 'react'
import ProjectsView from './projectsView';
class Projects extends React.Component{
    projects={
        name:"projeto 1",
        image:"",
        description:""
    };
    createProjectsView(){
    }
    render(){
        return(
            <div className="projectsContainer">
                <ProjectsView name={this.projects.name} description="" image=""/>
            </div>
        );
    }
}
export default Projects 