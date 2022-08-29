import styled from 'styled-components';
import Skills from '../skills';
import Button from '../button'
import DevImg from '../devImg';
import DevInfo from '../devInfo'

const HomeContainer = styled.section`
    width: 100%;
    height: 94vh;
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
    margin: 0px 20px;
`
const DevskillContainer=styled.div`
    grid-area: DevskillContainer;
`
const ModalsLinksContainer=styled.div`
    display: flex;
    margin: auto 0;
    height: 30rem;
    margin-right:10px;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
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
                <Skills skills={['html','css','javascript','react','git']}/>
            </DevskillContainer>
            <ModalsLinksContainer>
                <Button 
                    btnName={'My Resume'}
                    textSize={'2.25'}
                    buttonColor={'rgba(33, 230, 193, 1)'}
                />
                <Button 
                    btnName={'About Me'}
                    textSize={'2.25'}
                    textColor={'rgba(39, 142, 165, 1)'}
                />
            </ModalsLinksContainer>
        </HomeContainer>
    )
}