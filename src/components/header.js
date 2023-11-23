import * as React from "react"
import { navigate, graphql,useStaticQuery } from "gatsby"
import Button from "../components/button"
import { StaticImage } from "gatsby-plugin-image"


function Header(){
  const toolIcons = useStaticQuery(graphql`
  query tools_icons {
    allFile(filter: {extension: {in: "svg"}}) {
        nodes {
          publicURL
        }
      }
    }
  `)
console.log(toolIcons)
  return(
    <header className=" h-screen bg-gradient-to-b from-main pt-10 ">
      <div className="flex justify-evenly">
        <div className=" flex flex-col z-10 items-center relative w-[380px]">
            <div className=" absolute bg-main_d2 w-[256px] h-screen shadow-2xl"></div>
            <StaticImage
              src="../images/profile.jpg"
              className=" absolute top-[150px] w-[380px] h-[441px] shadow-lg rounded-lg"
              alt="profile-picture"
            />
        </div>
        <div className=" flex flex-col h-screen justify-center">
            <h2 className=" font-audiowide text-5xl text-main_d2">Jonatan De Oliveira</h2>
            <h3 className=" font-merienda text-4xl text-main_l1">Desenvolvedor Web</h3>
            <p className=" font-play text-2xl ">Focado em desenvolvimento de sites e sistemas web que geram valor.</p>
            <div>
              <h2  className=" font-Changa text-5xl">Habilidades</h2>
              <div>
                {
                
                }
              </div>
            </div>
        </div>
        <div>
            <Button action={()=>{navigate('/cv')}}>meu CV</Button>
            <Button action={()=>{navigate('/about')}}>Sobre</Button>
        </div>
      </div>
    </header>
  )
}

export default Header
