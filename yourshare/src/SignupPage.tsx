import React from "react";
import { pages } from "./App";
import { BrandComponent } from "./components-SignupPage/brand-component";
import { Hyperlink } from "./components-SignupPage/hyperlink-component"
import { SignupForm } from "./components-SignupPage/signup-form"
import "./SignupPage.css"; 

interface SignupScreenProps {
  changePage: (page: pages) => void;
}

export class SignupPage extends React.Component<SignupScreenProps> {
  render() {
    return (
      <div className ="Signup-Page">

          <BrandComponent/>

          <SignupForm changePage={() => this.props.changePage(pages.WelcomePage) }/>

          <Hyperlink onClick={() => this.props.changePage(pages.WelcomePage) }/> 

      </div> 
        
  
    );
  }


}
