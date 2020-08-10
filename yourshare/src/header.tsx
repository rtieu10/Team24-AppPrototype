import React from "react";
import { pages } from "./App";
import "./header.css";
/*The header component which contains the back navigation icon and the Screen title*/
interface headerProps {
    page:string;
    onClick:any;
   
   
  }

  const Header= (props:headerProps)=>{
        {/*Access image location*/}
        const backIcon=require("./img/backIcon.png");
      return (
          <div className="header">
            <div className="topBar"></div>
            {/*Enable clickable icon*/}
            <a onClick={props.onClick}>
            <img className="Back" src={backIcon}/>
            </a>
            {/*Name of page accessed from props*/}
            <p className="screenTitle">{props.page}</p>
          </div>
          
      );
  
    
}
export default Header;