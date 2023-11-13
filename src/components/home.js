// import Button from "./button";
// import { navigate } from "gatsby"
import * as React from "react";

function Home(){
    // const btnCVstyle=''
    return(
        <main className=" flex justify-between">
            <div>
                <div></div>
                <img src="" alt="" />
            </div>
            <div>
                <h2>Jonatan De Oliveira</h2>
                <h3>Desenvolvedor Web</h3>
                <p>Focado em desenvolvimento de sites e sistemas web que geram valor.</p>
            </div>
            <div>
                {/* <Button style='' action={navigate('/cv')}>meu CV</Button> */}
                {/* <Button action={()=>{navigate('/about')}}>Sobre</Button> */}
            </div>
        </main>
    )
}
export default Home;