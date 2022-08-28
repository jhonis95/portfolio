import styled from "styled-components"
import Skills from "../skills"
import ProjectCard from "../projectCard"

const ProjectsContainer=styled.section`
    width: 100%;
    height: 100vh;
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    top:0;
    z-index: -1;
    background-color: rgba(33, 230, 193, 1);
`
const PageTitle=styled.h1`
    font-size: 2.5rem;
    margin-top:10vh;
`

export default function projects(){
    let projects=['To Do List','Weather App']
    return(
        <ProjectsContainer>
            <PageTitle>Projects</PageTitle>
            {
                projects.map((proj,index)=>{
                        return(
                            <ProjectCard
                                projectName={proj}
                                key={index}
                            >
                                <Skills
                                    skills={['html','css','javascript']}
                                />
                            </ProjectCard>
                        )
                })
            }
        </ProjectsContainer>
    )
}
// function setProjects(projects){
//     projects.map((proj,index)=>{
//         return(
//             // <ProjectCard
//             //     projectName={proj}
//             //     key={index}
//             // >
//             //     <Skills
//             //         skills={['html','css','javascript']}
//             //     />
//             // </ProjectCard>
//             <h1>{'test'}</h1>
//         )
//     })
// }