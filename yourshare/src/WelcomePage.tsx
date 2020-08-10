import React from "react";
import { pages } from "./App";
import "./WelcomePage.css";
import LentItems from "./components-WelcomePage/Lent";
import { Welcome } from "./components-WelcomePage/Welcome";
import Item from "./Item"

import ItemList from "./components-WelcomePage/Available"

import { IYourShareState, Person } from './redux/types';
import { connect } from 'react-redux';

interface WelcomeScreenProps {
  changePage: (page: pages) => void;
}

// Items user has lent out
let LentItemsList = [
  { name: 'Car', type: "a", description: "abc", lender: "Alice", lendee: 'Daniel' },
  { name: 'Grill', type: "b", description: "abc", lender: "Bob", lendee: 'Erick' },
  { name: 'Microwave', type: "c", description: "abc", lender: "Charles", lendee: 'Florence' },
]



// Class to tables can render
 class WelcomePage extends React.Component<WelcomeScreenProps> {
  render() { //TODO: Add a Keyword Component to the App, passing the words() data, see below - DONE
    return (
      <div className="full">
      <div className="welcome"> {/*div to animate using CSS*/}
        <Welcome></Welcome>
      </div>

      <div className="available">
      <ItemList onClick={() => this.props.changePage(pages.BorrowPage)}/>  
      </div>

      <div className="lent">
        <LentItems lentItems={this.lentItems()} />
      </div>
      
      
      <div className="buttons">
        <button className="but" onClick={(e) => this.props.changePage(pages.AddItemPage)}>Add item</button>
        <button className="but" onClick={(e) => this.props.changePage(pages.CommunityPage)}>Manage community</button>
      </div>
    </div>
    );
  }

  lentItems(): Item[] {
    return LentItemsList
  }

}


// Map redux state to component state
function mapStateToProps(state: IYourShareState) {
  return {
    you: state.currentUser // "currentUser" in Redux state is 'you' on this page
  }
}

// Map redux actions to component props
function mapDispatchToProps(dispatch: any) {
  return {
    // no actions on this page / screen
  }
}

// The Hight Order Component (HOC)
// props need to be recived by the component
const connectedComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(WelcomePage);

export { connectedComponent as WelcomePage }
