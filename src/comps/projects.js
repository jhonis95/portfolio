import React from 'react'
import ProjectsBox from './projectsView';
class Projects extends React.Component{
    projects=[
        {
            name:"Sing In and Sing Up page",
            image:"",
            description:"Show my skills in HTML, CSS and JavaScript making a good look and responsive sing in and sing up page",
            code:"",
            site:"",
            technologies:"HTML CSS Java script"//might be better use a array to [] keep all the technologies that was use 
        },
        {
            name:"Stream videos page",
            image:"",
            description:"Show that i can work in more commercial projects making a stream video page using react and some react libraries to complete the projectow my skills in HTML, CSS and JavaScript making a good look and responsive sing in and sing up page",
            code:"",
            site:"",
            technologies:"React"
        }
    ]
    render(){
        return(
            <div className="projectsContainer">
                <h2>Projects</h2>
                <div className="projectsViewContainer">
                    {
                        this.projects.map((p)=>(
                            <ProjectsBox name={p.name} description={p.description} image={p.image} code={p.code} site={p.site} technologies={p.technologies}/>
                        ))
                    }
                </div>
            </div>
        );
    }
}
export default Projects 