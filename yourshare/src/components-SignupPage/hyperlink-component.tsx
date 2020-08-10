import React from "react"; 
import { pages } from "../App";

interface HyperlinkProps {
    onClick:any; 
  }

export class Hyperlink extends React.Component<HyperlinkProps, any>{ 
    render(){ 
        return(
            <div className = "hyperlink"> 
                <a href="#" id="signin-hyperlink" onClick={this.props.onClick}> Sign-in </a> 
            </div>
        );
    }
}
