import React, { Component } from "react"
import Item from "../Item"

export interface L_Item {
    name: string
    lendee: string
}
interface LentItemProps {
    lentItems: Item[]
}
class LentItems extends Component<LentItemProps>{
    render() {
        return (
            <div>
                <table id="lentItems">
                    <thead>
                        <th>Your Items</th>
                        <th>Lent to</th>
                    </thead>
                    <tbody>
                        {this.dataRows()
                        }
                    </tbody>
                </table>
            </div>
        )
    }
    // Datarows displays each item in its own row
    private dataRows() {
        return (
            this.props.lentItems.map(lentItem =>
                <tr><td>{lentItem.name}</td><td>{lentItem.lendee}</td></tr>
            )
        )
    }
}

export default LentItems