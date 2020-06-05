import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import BikeAdd from './components/BikeAdd';
import BikeList from './components/BikeList';
import BikeDetails from './components/BikeDetails';
import BikeUpdate from './components/BikeUpdate';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path='/' component={BikeList} />
          <Route path='/add-bike' component={BikeAdd} />
          <Route path='/edit-bike/:id' component={BikeUpdate} />
          <Route path='/show-bike/:id' component={BikeDetails} />
        </div>
      </Router>
    )
  }
}

export default App;
