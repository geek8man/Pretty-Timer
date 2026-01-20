import React , {useState} from "react";


function Panel(props){


    function format(time){

      let hh = time.h >=0 &&  time.h <=9 ? "0"+time.h :  time.h
      let mm = time.m >=0 &&  time.m <=9 ? "0"+time.m :  time.m
      let ss = time.s >=0 &&  time.s <=9 ? "0"+time.s :  time.s

      return hh+":"+mm+":"+ss;
    }

    let panleStyle = {fontSize:"5rem" ,color:"white" , padding:"10px" , boxShadow:" 0 1px 5px rgb(138, 137, 137)",
        borderRadius:"5px"
    };
    return(


        <h1 style={panleStyle}>{format(props.time)}</h1>
    );
}

export default Panel;