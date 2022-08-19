import React, { Component } from 'react';
import styled from 'styled-components';
import devImg from '../assets/profile.jpg'
import Skills from '../skills';
import Button from '../button'

const HomeContainer = styled.section`
    width: 100%;
    height: 95vh;
    display: grid;
`
const DevImgContainer=styled.div`
    background-color: aliceblue;
`
const DevInfoContainer=styled.div`
    background-color: antiquewhite;
`
const DevskillContainer=styled.div`
    background-color: aqua;
`
const ModalsLinksContainer=styled.div`
    background-color: aquamarine;
`
const BackgroundShape=styled.div`

`
const DevImg=styled.img`
    width: 336px;
    height: 430px;
    border: 2px solid rgba(33, 230, 193, 1);
    border-radius: 10px;
`
class Home extends Component{
    render(){
        return(
            <HomeContainer className="home" id="home">
                <DevImgContainer>
                    <BackgroundShape/>
                    <DevImg src={devImg} alt='dev picture'/>
                </DevImgContainer>
                <DevInfoContainer>
                    <h1>Jonatan de Oliveira</h1>
                    <h2>Web Developer</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliq</p>
                </DevInfoContainer>
                <DevskillContainer>
                    <h2>Skills:</h2>
                    <Skills/>
                </DevskillContainer>
                <ModalsLinksContainer>
                    <Button btnName={'My Resulme'}/>
                    <Button btnName={'About Me'}/>
                </ModalsLinksContainer>
            </HomeContainer>
        )
    }
}
export default Home;