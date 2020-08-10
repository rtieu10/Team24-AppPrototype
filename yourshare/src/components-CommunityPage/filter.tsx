import React from "react";
import { Checkbox} from "@fluentui/react"

export class Filter extends React.Component<any,any>{
    render(){
        return(
            <div className="Filter">
            <li>
                
                <label><Checkbox label="Text me when someone wants to borrow an item" /></label>
            </li>
            <li>
            
                <label><Checkbox label="Allow best friends to auto borrow without approval"/></label>
            </li>
            <li>
                
                <label><Checkbox label="Block friends of friends from seeing my items" /></label>
            </li>
        
        </div>
        
        );
    }
    
  
    
}