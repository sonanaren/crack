import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../App.css";

class BikeUpdate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      type: "",
      company: "",
      description: "",
      published_date: "",
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:8082/api/bikes/" + this.props.match.params.id)
      .then((res) => {
        this.setState({
          name: res.data.name,
          type: res.data.type,
          company: res.data.company,
          description: res.data.description,
          published_date: res.data.published_date,
        });
      })
      .catch((err) => {
        console.log("Error Updating");
      });
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();

    const data = {
      name: this.state.name,
      type: this.state.type,
      company: this.state.company,
      description: this.state.description,
      published_date: this.state.published_date,
    };

    axios
      .put(
        "http://localhost:8082/api/bikes/" + this.props.match.params.id,
        data
      )
      .then((res) => {
        this.props.history.push("/show-bike/" + this.props.match.params.id);
      })
      .catch((err) => {
        console.log("Error updating.");
      });
  };

  render() {
    return (
      <div className="UpdateInfo">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <br />
              <Link to="/" className="btn btn-outline-warning float-left">
                Show Bike List
              </Link>
            </div>
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Edit Bike</h1>
              <p className="lead text-center">Update Bikes's Info</p>
            </div>
          </div>

          <div className="col-md-8 m-auto">
            <form noValidate onSubmit={this.onSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  placeholder="Name"
                  name="name"
                  className="form-control"
                  value={this.state.name}
                  onChange={this.onChange}
                />
              </div>
              <br />

              <div className="form-group">
                <label htmlFor="type">Type</label>
                <input
                  type="text"
                  placeholder="Type"
                  name="type"
                  className="form-control"
                  value={this.state.type}
                  onChange={this.onChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="company">Company</label>
                <input
                  type="text"
                  placeholder="Company"
                  name="company"
                  className="form-control"
                  value={this.state.company}
                  onChange={this.onChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="description">Description</label>
                <input
                  type="text"
                  placeholder="Description"
                  name="description"
                  className="form-control"
                  value={this.state.description}
                  onChange={this.onChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="published_date">Published Date</label>
                <input
                  type="date"
                  placeholder="published_date"
                  name="published_date"
                  className="form-control"
                  value={this.state.published_date}
                  onChange={this.onChange}
                />
              </div>

              <button
                type="submit"
                className="btn btn-outline-info btn-lg btn-block"
              >
                Update
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default BikeUpdate;
