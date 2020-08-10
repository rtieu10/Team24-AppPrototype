import React from "react";
import { pages } from "./App";
import Item from "./Item";
import "./BorrowPage.css";
import Header from "./header";


interface BorrowScreenProps {
    changePage: (page: pages) => void;
}

export class BorrowPage extends React.Component<BorrowScreenProps> {
    render() {
        return (
            //Top Bar Nav
            <div className = "BorrowPage">
                 <Header page = "Add Item" onClick={() => this.props.changePage(pages.WelcomePage)}/>
                <div>
                    {this.body()}
                    {this.BottomNav()}
                </div>
            </div>
        )
    }
    item() {
        return (
            <div className = "item">
                <form>
                    <div className = "row">
                    <input type="text" id="itName" name="Item Name" readOnly value="Item Name:"></input>
                    </div>
                    <br></br>
                    <div className = "row">
                    <input type="text" id="TypeName" name="Type" readOnly value="Type: "></input>
                    </div>
                    <br></br>
                    <div className = "row">
                    <input type="text" id="LendName" name="Lender" readOnly value="Lender:"></input>
                    </div>
                <br></br>
                <div className = "row">
                    <input type="text" id="Descript" name="Description" readOnly value="Description"></input>
                    </div>
                </form>
            </div>
        )
    }
    itemImage(){
        return (
            <div className = "image">
            <img src = {require('./img/YS_Blender.png')} />
            </div>
        )
    }
    body(){
        return(
            <div className = "body">
                {this.item()}
                {this.itemImage()}
            </div>
        )
    }
    BottomNav() {
        return (
            <div className = "bottNav">
                <button onClick={(e) => this.props.changePage(pages.WelcomePage)}>Cancel</button>
                <button onClick={(e) => this.props.changePage(pages.WelcomePage)}>Submit</button>
            </div>
        )

    }
}