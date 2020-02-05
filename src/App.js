import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './Components/Home'
import ProjectView from './Components/ProjectView'
import SprintDetails from'./Components/SprintDetails'
import ProjectsHome from './Components/ProjectsHome'

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path = "/" component = {Home}/>
        <Route exact path = "/projects" component = {ProjectsHome}/>
        <Route exact path = "/viewproject/:projectid" component = {ProjectView}/>
        <Route exact path = "/viewproject/:projectid/sprintdetails/:sprintid" component = {SprintDetails}/>
      </div>
    </Router>
  );
}

export default App;
