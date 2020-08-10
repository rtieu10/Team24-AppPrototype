import React from 'react';
import SearchPage from './pages/SearchPage';
import {FilterPage} from './pages/FilterPage';
import {DoctorprofilePage} from './pages/DoctorprofilePage'
import {ComparisonPage} from './pages/ComparisonPage';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import FooterPage from './components/navBar/footer'

import './App.css';

class App extends React.Component {
  render(){
  return (
    
    //Wrap all contents in Browse Router for the contents to use Routing
   <BrowserRouter>
      <div className="App">
        {/*Render the nav bar component*/}
        {/*Enables specific components to be rendered at specific paths*/}
        <Switch>
          {/*The exact for the '/' path enables exact rendering of search page only and only when the path is '/' */}
          <Route path='/' exact component={SearchPage}></Route>
          <Route path='/filter' component={FilterPage}/>
          <Route path='/profile' component={DoctorprofilePage}></Route>
          <Route path='/compare' component={ComparisonPage}/>
        </Switch>
          {/*Render the footer component*/}
        <div className="push"></div>
        <FooterPage/>
      </div>
   </BrowserRouter>
   

  );
}
}

export default App;
