import styled from "styled-components"
import Button from "./button"

const ProjectCardContainer=styled.div`
    width: 1144px;
    height: 418px;
    display: flex;
    justify-content: flex-start;
    border: 4px solid black;
    border-radius: 10px;
`
const ProjectImage=styled.div`
    width: 50%;
    border-radius: 10px;
    border: 4px solid black;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    background-image: url(${props=>props.backGroundImg}),linear-gradient(0deg, rgba(2,0,36,1) 0%, rgba(54,54,54,1) 35%, rgba(255,255,255,1) 100%);
    background-repeat: no-repeat;
    background-size: cover;
    color: white;
`
const ProjectInfo=styled(ProjectImage)`
    color:black;
    background-image: none;
    background-color: white;
`
const Title=styled.h2`
`
const Text=styled.p`
    margin: 10px 10px;
    text-align: justify;
`



export default function ProjectCard(props){
    const btnContainerStyle = {
        width:"100%",
        display:"flex",
        margin:"10px 0",
        justifyContent:"space-evenly",
      };
  
    return(
        <ProjectCardContainer>
            <ProjectImage
                backGroundImg={''}
            >   
                <Title>{props.projectName}</Title>
                <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis id, obcaecati autem debitis, enim, totam magni animi ipsum neque soluta sit quidem rerum consectetur iure in inventore doloribus voluptatibus. Dolore.</Text>
                <div style={btnContainerStyle}>
                    <Button
                        btnName={'Site'}
                        textSize={'2'}
                        buttonColor={'rgba(33, 230, 193, 1)'}
                        btnWidth={'200px'}
                    />
                    <Button 
                        btnName={'Github'}
                        textSize={'2'}
                        textColor={'rgba(39, 142, 165, 1)'}
                        btnWidth={'200px'}
                    />
                </div>
            </ProjectImage>
            <ProjectInfo>

            </ProjectInfo>
        </ProjectCardContainer>
    )
}