import React from "react"; 
import Logo from "../img/YS_icon.png";

export class BrandComponent extends React.Component<any,any>{ 
    render(){ 
        return(
            <div className ="Brand"> 
                <h1> <strong>YourShare</strong> </h1>
                <img className = "Yourshare-logo" src= {Logo} alt = "logo" /> 
           </div> 
        )
    }
}