import React from "react";
import { Checkbox} from "@fluentui/react"


export class Community extends React.Component<any, any>{
    render() {
        return (
            <div className="Community">
                <table>
                    <th>Friends</th>
                    <th>Items currently borrowed</th>
                    <th>Items currently lent</th>
                    <th>Best friend</th>
                    <tr>
                        <td>Stacey</td>
                        <td>None</td>
                        <td>None</td>
                        <td><Checkbox  /></td>
                    </tr>
                    <tr>
                        <td>Marcos</td>
                        <td>None</td>
                        <td>None</td>
                        <td><Checkbox  /></td>
                    </tr>
                    <tr>
                        <td>Cam</td>
                        <td>None</td>
                        <td>None</td>
                        <td><Checkbox  /></td>
                    </tr>
                    <tr>
                        <td>Jim</td>
                        <td>None</td>
                        <td>None</td>
                        <td><Checkbox  /></td>
                    </tr>
                </table>
                <button id="addFriend">Add friend</button>
                
            </div>

        );
    }

}