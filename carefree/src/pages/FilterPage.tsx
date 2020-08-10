/* Skeleton for Filter Page */
/*The Filter page includes a filtering system and a list of providers. 
Within the filtering system will enable, the user adjusts filters to narrow
down provider options. The user moves sliders to determine the size of the 
search area or indicate the budget to cover medical costs. The user can 
also specify the search to only in-network providers. For additional support,
the user can select and add more filters, as well as collapse the filter to 
better view options. */
import React from 'react';
import { ProviderList } from '../components/ProviderList/providerList'
import { BackNavigation } from '../components/backnavigation/BackNavigation';
import {Filter} from '../components/filterPage/filter';
import "./filterPage.css"
import { NavBar } from '../components/navBar/navBar'

interface FilterScreenProps {
    inNetwork?: boolean,
}

export class FilterPage extends React.Component<FilterScreenProps> {
    render() {
        return (
            <div>
                <NavBar/>
                <BackNavigation/> 
                <div className = "FilterPage">
                    <aside className="Filter">
                        <Filter/>
                    </aside>
                    <div className="ProviderList">
                        <ProviderList/>
                    </div>   
                </div>
            </div>
        )
    }
}