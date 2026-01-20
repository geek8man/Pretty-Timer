import React from 'react'

function Button(props){

    let buttonStyle = {background:props.background , color:props.color ,
                       height:"40px" , width:"120px",
                       fontSize:"1.5rem",
                       borderRadius:"5%",
                       border:"none",

                     
    }
    return(
        <button style = {buttonStyle}
        onClick={()=>{
            props.click();
        }}><b>{props.text}</b></button>
    )
}
 

export default Button;