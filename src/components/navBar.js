import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { graphql, Link, useStaticQuery } from "gatsby";

function NavBar(){
    const query=useStaticQuery(graphql`
        query navBar_query {
            dataJson {
                navBar_buttons {
                    linkTo
                    title
                }
                socialMedia {
                    title
                }
            }
        }
    `)
    return(
        <nav>
            <div>
                <StaticImage
<<<<<<< HEAD
                    src="../images/logo.png"
                    alt="A dinosaur"
                    placeholder="blurred"
                    layout="fixed"
                    width={65}
                    height={65}
=======

>>>>>>> d5babe258c42c3a773d52f7d661415b2174a051f
                />
                <h3>jhonis.dev</h3>
            </div>
            <div>
                {
                    query.dataJson.navBar_buttons.map((buttons)=>{
                        return(
                            <Link to={buttons.linkTo}>{buttons.title}</Link>
                        )
                    })
                }
            </div>
            <div>
                {
                    query.dataJson.socialMedia.map((socialMedia)=>{
                        return(
                            <p>{socialMedia.title}</p>
                        )
                    })
                }
            </div>
        </nav>
    )
}

export default NavBar