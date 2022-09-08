import styled from "styled-components"
import img from './assets/profile.jpg'

const BackgroundShape=styled.div`
    height: 100%;
    width: 250px;
    background-color: rgba(31, 66, 135, 1);
    position: absolute;
    z-index: 1;
`
const DevImg=styled.img`
    width: 300px;
    height: 400px;
    border: 2px solid rgba(33, 230, 193, 1);
    border-radius: 10px;
    object-fit: cover;
    z-index: 2;
    filter: brightness(1.2);
    box-shadow: 5px 4px 14px 4px rgba(0,0,0,0.39);
`

export default function devImg(pros){
    return(
        <>
            <BackgroundShape/>
            <DevImg src={img} alt='dev picture'/>
        </>
    )
}