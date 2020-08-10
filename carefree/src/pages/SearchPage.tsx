import React from 'react';
import Header from '../components/searchPage/header';
import { Search } from '../components/searchPage/search';
import { BackNavigation } from '../components/backnavigation/BackNavigation';
import { NavBar } from '../components/navBar/navBar'

class SearchPage extends React.Component {
    render() {
        return (
            <div>
                <NavBar/>
                <Header/>
                <Search/>
            </div>
        )
    };
}



export default SearchPage;