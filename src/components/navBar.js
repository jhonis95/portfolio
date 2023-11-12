// import React from "react";
// import { StaticImage } from "gatsby-plugin-image";
// import { graphql, Link, useStaticQuery } from "gatsby";
// import uuid from 'react-uuid';

// function NavBar(){
//     const query=useStaticQuery(graphql`
//         query navBar_query {
//             dataJson {
//                 navBar_buttons {
//                     linkTo
//                     title
//                 }
//                 socialMedia {
//                     title
//                 }
//             }
//         }
//     `)
//     return(
//         <nav className="bg-slate-500">
//             <div>
//                 <StaticImage
//                     src="../images/logo.png"
//                     alt="A dinosaur"
//                     placeholder="blurred"
//                     layout="fixed"
//                     width={65}
//                     height={65}
//                 />
//                 <h3>jhonis.dev</h3>
//             </div>
//             <div>
//                 {
//                     query.dataJson.navBar_buttons.map((buttons)=>{
//                         return(
//                             <Link key={uuid()} to={buttons.linkTo}>{buttons.title}</Link>
//                         )
//                     })
//                 }
//             </div>
//             <div>
//                 {
//                     query.dataJson.socialMedia.map((socialMedia)=>{
//                         return(
//                             <p key={uuid()} className="text-3xl font-bold underline">{socialMedia.title}</p>
//                         )
//                     })
//                 }
//             </div>
//         </nav>
//     )
// }

// export default NavBar