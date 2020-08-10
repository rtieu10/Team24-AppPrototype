import React from "react";
import { pages } from "./App";
import Header from "./header"
import { Community } from "./components-CommunityPage/Community";
import { Filter } from "./components-CommunityPage/filter";
import "./CommunityPage.css";

interface CommunityScreenProps {
  changePage: (page: pages) => void;
  children?:any;
  
}

export class CommunityPage extends React.Component<CommunityScreenProps> {

  render() {
    return (
      <div className="main">
        {this.props.children}
        <div className="title">
          <Header page="Manage Community" onClick={() => this.props.changePage(pages.WelcomePage) }/>
    
        </div>
        
        <Community/>
        <Filter/>
      </div>
    );
  }
}
