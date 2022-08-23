import styled from 'styled-components';
import Skills from '../skills';
import Button from '../button'
import DevImg from '../devImg';
import DevInfo from '../devInfo'

const HomeContainer = styled.section`
    width: 100%;
    height: 95vh;
    display: grid; 
    grid-template-columns: 0.8fr 1.9fr 0.8fr; 
    grid-template-rows: 1fr 1fr 1fr; 
    gap: 0px 0px; 
    grid-template-areas: 
      "DevImgContainer .  ModalsLinksContainer"
      "DevImgContainer DevInfoContainer ModalsLinksContainer"
      "DevImgContainer DevskillContainer ModalsLinksContainer"; 
`
const DevImgContainer=styled.div`
    height: 100%;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    grid-area: DevImgContainer;
`
const DevInfoContainer=styled.div`
    grid-area: DevInfoContainer;
`
const DevskillContainer=styled.div`
    background-color: aqua;
    grid-area: DevskillContainer;
`
const ModalsLinksContainer=styled.div`
    background-color: aquamarine;
    grid-area: ModalsLinksContainer;
`
export default function Home(){
    return(
        <HomeContainer className="home" id="home">
            <DevImgContainer>
                <DevImg />
            </DevImgContainer>
            <DevInfoContainer>
                <DevInfo/>
            </DevInfoContainer>
            <DevskillContainer>
                <Skills/>
            </DevskillContainer>
            <ModalsLinksContainer>
                <Button btnName={'My Resulme'}/>
                <Button btnName={'About Me'}/>
            </ModalsLinksContainer>
        </HomeContainer>
    )
}