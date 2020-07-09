import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../App.css';
import { Container, TextField, IconButton, Input } from '@material-ui/core';

class BikeUpdate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      type: '',
      company: '',
      description: '',
      published_date: '',
    };
  }

  componentDidMount() {
    axios
      .get('http://localhost:8082/api/bikes/' + this.props.match.params.id)
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
        console.log('Error Updating');
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
        'http://localhost:8082/api/bikes/' + this.props.match.params.id,
        data
      )
      .then((res) => {
        this.props.history.push('/show-bike/' + this.props.match.params.id);
      })
      .catch((err) => {
        console.log('Error updating.');
      });
  };

  render() {
    return (
      <Container>
        <div className="row">
          <div className="col-md-8 m-auto">
            <p className="lead text-center">Update Bikes's Info</p>
          </div>
        </div>

        <div className="col-md-8 m-auto">
          <form noValidate onSubmit={this.onSubmit} autoComplete="off">
            <div className="form-group">
              <TextField
                name="name"
                label="Name"
                variant="outlined"
                margin="dense"
                value={this.state.name}
                onChange={this.onChange}
              />
            </div>

            <div className="form-group">
              <TextField
                name="type"
                label="Type"
                variant="outlined"
                margin="dense"
                value={this.state.type}
                onChange={this.onChange}
              />
            </div>

            <div className="form-group">
              <TextField
                name="company"
                label="Company"
                variant="outlined"
                margin="dense"
                value={this.state.company}
                onChange={this.onChange}
              />
            </div>

            <div className="form-group">
              <TextField
                name="description"
                label="Describe"
                variant="outlined"
                margin="dense"
                value={this.state.description}
                onChange={this.onChange}
              />
            </div>

            <Input type="submit" color="primary" value="Save" />
          </form>
        </div>
      </Container>
    );
  }
}

export default BikeUpdate;
