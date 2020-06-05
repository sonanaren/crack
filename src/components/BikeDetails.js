import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import axios from 'axios';


class BikeDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bike: {}
        }
    }

    componentDidMount() {
        axios
        .get('http://localhost:8082/api/bikes/' + this.props.match.params.id)
        .then(res => {
            this.setState({
                bike: res.data
            })
        })
        .catch(err => {
            console.log('No data');
        })
    }

    onDeleteClick(id) {
        axios
        .delete('http://localhost:8082/api/bikes/' + id)
        .then(res => {
            this.props.history.push('/');
        })
        .catch(err => {
            console.log('Error deleting');
        })
    }

    render() {
        const bike = this.state.bike;
        let BikeItem = <div>
        <table className="table table-hover table-dark">
          <tbody>
            <tr>
              <td>Name</td>
              <td>{ bike.name }</td>
            </tr>
            <tr>
              <td>Company</td>
              <td>{ bike.company }</td>
            </tr>
            <tr>
              <td>Description</td>
              <td>{ bike.description }</td>
            </tr>
          </tbody>
        </table>
      </div>
  
        return (
            <div className="BikeDetails">
            <div className="container">
                <div className="row">
                <div className="col-md-10 m-auto">
                    <br /> <br />
                    <Link to="/" className="btn btn-outline-warning float-left">
                        Show Bike List
                    </Link>
                </div>
                <br />
                <div className="col-md-8 m-auto">
                    <p className="lead text-center">
                        Bike Details
                    </p>
                    <hr /> <br />
                </div>
                </div>
                <div>
                { BikeItem }
                </div>

                <div className="row">
                    <div className="col-md-6">
                    <button type="button" className="btn btn-outline-danger btn-lg btn-block" onClick={this.onDeleteClick.bind(this,bike._id)}>Delete</button><br />
                    </div>

                    <div className="col-md-6">
                    <Link to={`/edit-bike/${bike._id}`} className="btn btn-outline-info btn-lg btn-block">
                            Edit 
                    </Link>
                    <br />
                    </div>
                </div>

            </div>
            </div>
        );
    }
}

export default BikeDetails;