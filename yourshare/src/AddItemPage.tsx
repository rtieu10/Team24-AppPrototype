import React from "react";
import { pages } from "./App";
import "./AddItemPage.css";
import Item from "./Item";
import Header from "./header";
import { ImageUpload } from "./components-AddItemPage/ImageUpload";
import { createAddItemAction } from "./redux/actions"
import { connect } from 'react-redux';

interface AddItemScreenProps {
  changePage: (page: pages) => void;
  AddItem: (n: string, t: string, d: string) => void;
}

interface AddItemScreenState {
  itemName:string;
  itemType:string;
  itemDesc:string;
}

class AddItemPage extends React.Component<AddItemScreenProps, AddItemScreenState> {
  constructor(props:AddItemScreenProps, state:AddItemScreenState) {
    super(props, state);
    this.state = {itemName: "", itemType: "", itemDesc: ""};
  }
  render() {
    return (
      <div className="AddItemPage">
        <Header page = "Add Item" onClick={() => this.props.changePage(pages.WelcomePage)}/>
        <div>
          {this.body()}
          {this.bottomNav()}
        </div>
      </div>
    );
  }

  inputs() {
    return (
      <div className = "inputs">
        <form>
          <input type= "text" placeholder = "Name" value = {this.state.itemName} onChange = {this.onChangeItemName} />
          <input type= "text" placeholder = "Type" value = {this.state.itemType} onChange = {this.onChangeItemType} />
          <input id="desc" type= "text" placeholder = "Description" value = {this.state.itemDesc} onChange = {this.onChangeItemDesc} />
        </form>
      </div>);
  }

/*
  imageUpload() {
    return (
      <div className = "imageUpload">
        <img src = {require('./img/YS_upload.png')} />
        <button className = "primaryButton"> Upload </button>
      </div>);
  }
*/

  body()  {
    return (
      <div className = "body">
        {this.inputs()} 
        <ImageUpload/>
      </div>
    );
  }

  bottomNav() {
    return (
      <div className = "bottom">
        <button className = "secondaryButton" onClick={(e) => this.props.changePage(pages.WelcomePage)}> Cancel </button>
        <button className = "primaryButton" onClick={this.addItem}> Add Item </button>
      </div>
    );
  }

  onChangeItemName = (event: React.FormEvent<HTMLInputElement>):void => {
    this.setState({itemName: event.currentTarget.value});
  };
  onChangeItemType = (event: React.FormEvent<HTMLInputElement>):void => {
    this.setState({itemType: event.currentTarget.value});
  };
  onChangeItemDesc = (event: React.FormEvent<HTMLInputElement>):void => {
    this.setState({itemDesc: event.currentTarget.value});
  };

  addItem = (event: React.MouseEvent<HTMLButtonElement>):void => {
    event.preventDefault();
    if(this.state.itemName && this.state.itemType && this.state.itemDesc)
    {
      this.props.AddItem(this.state.itemName, this.state.itemType, this.state.itemDesc);
      this.props.changePage(pages.WelcomePage);
    }
    else {
      alert("Please fill out all of the input fields");
    }
  }
}

  // Map redux state to component state
  function mapStateToProps(state: AddItemScreenState) {
    return {
      // no data props
    }
  }
  // Map redux actions to component props
  function mapDispatchToProps(dispatch: any) {
    return {
      AddItem: (n: string, t: string, d: string) => dispatch(createAddItemAction(n, t, d))
    }
  }

  // The Hight Order Component (HOC)
  // props need to be recived by the component
  const connectedComponent = connect(
    mapStateToProps,
    mapDispatchToProps
  )(AddItemPage);

export { connectedComponent as AddItemPage }