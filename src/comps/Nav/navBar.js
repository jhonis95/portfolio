import {Component } from 'react';
import logo from '../assets/logo.png'
import styled from 'styled-components'

const NavbarContainer= styled.div`
    display: flex;
    height: 5vh;
    align-items: center;
    justify-content: space-between;
    position: static;
    width: 100%;
    box-shadow: 0 0 1em gray;
`
const ButtonContainer=styled.ul`
    width: 20rem;
    height: 1.8rem;
    display: flex;
    padding: 0;
    margin-right: 5px;
    justify-content: space-between;
`
const DevInfContainer=styled.div`
    display: grid;
    grid-template-columns: auto auto;
    grid-template-rows: auto;
    grid-column-gap: 5px;
    margin-left: 5px;
`
const Button=styled.a`
    background-color: white;
    margin: 2px;
    padding: 3px;
    &:hover{
        border: 2px solid black;
        border-radius: 5px;
    }
`
const Logo =styled.img`
    width: 50px;
    border-radius: 50px;
    grid-area: 1 / 1 / 3 / 2;

`
const DevName=styled.p`
    grid-area: 1 / 2 / 2 / 3; 
    margin: 0;
    padding: 0;     
`
const DevDescription=styled(DevName)`
    grid-area: 2 / 2 / 3 / 3;
    font-size: small;
`
export default function navBar(){
    return(
        <NavbarContainer>
            <DevInfContainer>
                <Logo src={logo} alt="logo"/>
                <DevName>Jhonis.dev</DevName>
                <DevDescription>front end developer</DevDescription>
            </DevInfContainer>
            <ButtonContainer>
                <Button>Home</Button>
                <Button>Projects</Button>
                <Button>Contact</Button>
            </ButtonContainer>
        </NavbarContainer>
    )
}