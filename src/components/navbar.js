import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import * as React from "react"

function Navbar(){
    return(
        <section className=" bg-main pt-1 pb-1">
            <div className="flex flex-row justify-around m-auto">
                <div className=" flex flex-row items-center gap-2">
                    <StaticImage
                        src="../images/logo.svg"
                        alt="logo"
                        width={50}
                        height={50}
                    />
                    <h2 className=" font-audiowide text-default">jonatandev.com</h2>
                </div>
                <nav className=" w-2/5 flex flex-row justify-evenly items-center">
                    <Link className=" font-montserrat text-3xl text-default no-underline" to="/">HOME</Link>
                    <Link className=" font-montserrat text-3xl text-default no-underline" to="/projetos">PROJETOS</Link>
                    <Link className=" font-montserrat text-3xl text-default no-underline" to="/contact">CONTATO</Link>
                </nav>
                <div className=" flex flex-row gap-1 items-center">
                    <StaticImage
                        src="../images/x.svg"
                        alt="x-icon"
                        className=" rounded-md w-9 h-9"
                    />
                    <StaticImage
                        src="../images/instagran.svg"
                        alt="insta-icon"
                        className=" rounded-md w-9 h-9"
                    />
                    <StaticImage
                        src="../images/github.svg"
                        alt="github-icon"
                        className=" rounded-md w-9 h-9 "
                    />
                </div>
            </div>

        </section >
    )
}

export default Navbar;