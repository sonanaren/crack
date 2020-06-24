import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import "./App.css";
import BikeAdd from "./components/BikeAdd";
import BikeList from "./components/Bike/List";
import BikeDetails from "./components/Bike/Details";
import BikeUpdate from "./components/BikeUpdate";
import CarList from "./components/Cars/List";
import CarDetails from "./components/Cars/Details";
import login from "./components/App/loginForm";

function App() {
  return (
    <React.StrictMode>
      <Router>
        <div>
          <NavBar />
          <Route exact path="/" component={BikeList} />
          <Route path="/add-bike" component={BikeAdd} />
          <Route path="/edit-bike/:id" component={BikeUpdate} />
          <Route path="/bike-details/:id" component={BikeDetails} />
          <Route path="/cars" component={CarList} />
          <Route path="/cars-details/:id" component={CarDetails} />
          <Route path="/login" component={login} />
        </div>
      </Router>
    </React.StrictMode>
  );
}

export default App;
