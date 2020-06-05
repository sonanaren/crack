import React, { Component } from 'react';
import '../App.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import BikeCard from './BikeCard.js'

class BikeList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bikes: []
        }
    }

    componentDidMount() {
        axios
        .get('http://localhost:8082/api/bikes')
        .then(res => {
            this.setState({
                bikes: res.data
            })
        })
        .catch(err => {
            console.log('No bikes')
        })
    }

    render() {
        const bikes = this.state.bikes;
        console.log('Bikes: ' + bikes);
        let bikeList;

        if (!bikes) {
            bikeList = 'No data!';
        } else {
            bikeList = bikes.map((bike, k) => 
                <BikeCard bike={bike} key={k} />
            );
        }

        return (
            <div className="BikeList">
              <div className="container">
                <div className="row">
                  <div className="col-md-12">
                    <br />
                    <h2 className="display-4 text-center">Bikes</h2>
                  </div>

                  <div className="col-md-11">
                    <Link to="/add-bike" className="btn btn-outline-warning float-right">
                        + Add Bike
                    </Link>
                    <br />
                    <br />
                    <hr />
                    </div>
                </div>
      
                <div className="list">
                      {bikeList}
                </div>
              </div>
            </div>
        );
    }
}

export default BikeList;