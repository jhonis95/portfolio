import styled from "styled-components"
import SkillCard from "./skillCard"
// import { useState } from "react"
const SecondText=styled.h2`
    font-size: 3rem;
`

const SkillsContainer= styled.div`
    
`
const CardContainer= styled(SkillsContainer)`
    display: grid;
    grid-gap: 10px;
    grid-template-columns: repeat(auto-fill, 186px);
`
export default function Skills(){
    const skills=['HTML','CSS','JavaScrip','React']
    return(
        <SkillsContainer>
            <SecondText>Skills</SecondText>
            <CardContainer>
                {
                    skills.map((lin,index)=>{
                        
                        return(
                            <SkillCard
                                skillName={lin}
                                key={index}
                            />
                        )
                    })
                }
            </CardContainer>
        </SkillsContainer>
    )
}