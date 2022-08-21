import styled from "styled-components"
import SkillCard from "./skillCard"
// import { useState } from "react"

const SkillsContainer= styled.div`

`
// skills.forEach((lin)=>{
//     return(
//         <SkillCard
//             id={lin}
//             skillName={lin}
//         />
//     )
// })
export default function Skills(){
    const skills=['HTML','CSS','JavaScrip','React']
    return(
        <SkillsContainer>
            <h1>Skills</h1>
            {
                skills.map((lin,index)=>{
                    return(
                        <SkillCard
                            skillName={lin}
                            id={index}
                        />
                    )
                })
            }
        </SkillsContainer>
    )
}
// function Cards(skills){
//     return(
//         <ul>
//             {skills.forEach((lin)=>{
//                 <SkillCard
//                     skillName={lin}
//                 />
//             })}
//         </ul>
//     )
// }