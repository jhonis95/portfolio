import styled from "styled-components"
import SkillCard from "./skillCard"

const SecondText=styled.h2`
    font-size: ${props=>props.textSize?props.textSize:'3rem'};
    text-align: ${props=>props.textSize?'center':'start'};
`
const SkillsContainer= styled.div`
    width: 100%;
    margin: 0px 30px;
`
const CardContainer= styled(SkillsContainer)`
    display: grid;
    grid-gap: 10px;
    grid-template-columns: ${props=>props.cardSize?'repeat(auto-fill, 150px)':'repeat(auto-fill, 186px)'};
`
export default function Skills(props){
    const cardContente={
        html:{
            color:'rgba(239, 52, 0, 1)',
            icon:'FaHtml5',
            text:'HTML'
        },
        css:{
            color:'rgba(49, 84, 183, 1)',
            icon:'FaCss3Alt',
            text:'CSS'
        },
        javascript:{
            color:'rgba(236, 249, 10, 1)',
            icon:'FaJsSquare',
            text:'JavaScript'
        },
        react:{
            color:'rgba(90, 218, 253, 1)',
            icon:'FaReact',
            text:'React js'
        },
        git:{
            color:'rgba(240, 80, 51, 1)',
            icon: 'FaGitSquare',
            text:'Git'
        },
    }
    return(
        <SkillsContainer>
            <SecondText
                textSize={props.textSize}
            >   
                {props.title?props.title:'Skills'}
            </SecondText>
            <CardContainer
                cardSize={props.cardSize}
            >
                {
                    props.skills.map((lin,index)=>{
                        return(
                            <SkillCard
                                icon={cardContente[lin].icon}
                                backgroundColor={cardContente[lin].color}
                                text={cardContente[lin].text}
                                key={index}
                            />
                        )
                    })
                }
            </CardContainer>
        </SkillsContainer>
    )
}