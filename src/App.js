import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import './App.css';
import BikeAdd from './components/Bike/Add';
import BikeList from './components/Bike/List';
import BikeDetails from './components/Bike/Details';
import BikeUpdate from './components/BikeUpdate';
import CarAdd from './components/Cars/Add';
import CarList from './components/Cars/List';
import CarDetails from './components/Cars/Details';
import login from './components/App/loginForm';
import Home from './components/App/Home';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://localhost:8082/graphql',
  cache: new InMemoryCache(),
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <React.StrictMode>
          <Router>
            <div>
              <NavBar />
              <Route exact path="/" component={Home} />
              <Route path="/bikes" component={BikeList} />
              <Route path="/add-bike" component={BikeAdd} />
              <Route path="/edit-bike/:id" component={BikeUpdate} />
              <Route path="/bike-details/:id" component={BikeDetails} />
              <Route path="/cars" component={CarList} />
              <Route path="/cars-details/:id" component={CarDetails} />
              <Route path="/add-car" component={CarAdd} />
              <Route path="/login" component={login} />
            </div>
          </Router>
        </React.StrictMode>
      </ApolloProvider>
    );
  }
}

export default App;
