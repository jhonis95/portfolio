import styled from "styled-components"

const MainText =styled.h1`
    font-size: 3.438rem;
    color: rgba(31, 66, 135, 1);
`
const SecondText=styled.h2`
    font-size: 3rem;
    opacity: 50%;
`
const Text=styled.p`
    text-align: justify;
`


export default function devInfo(){
    const text=`
    Studying to become a programmer made me develop a passion for productivity and optimization. I believe that we can always make things better, not only at work but also in everyday things.
    For the future, I see myself working as a full stack developer helping those new to web development to create great things.
    `
    return(
        <>
            <MainText>Jonatan de Oliveira</MainText>
            <SecondText>Web Developer</SecondText>
            <Text>{text}</Text>
        </>
    )
}