import * as React from "react"

function Button({childen,style,action}){
    return(
        <button className={style} onClick={()=>{action()}}>
            {childen}
        </button>
    )
}
export default Button