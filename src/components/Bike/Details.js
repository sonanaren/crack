import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';
import axios from 'axios';
import { Container, Input } from '@material-ui/core';
import { Card, CardContent, CardMedia, Typography } from '@material-ui/core';

class Details extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bike: {},
    };
  }

  componentDidMount() {
    axios
      .get('http://localhost:8082/api/bikes/' + this.props.match.params.id)
      .then((res) => {
        this.setState({
          bike: res.data,
        });
      })
      .catch((err) => {
        console.log('No data');
      });
  }

  onDeleteClick(id) {
    axios
      .delete('http://localhost:8082/api/bikes/' + id)
      .then((res) => {
        this.props.history.push('/');
      })
      .catch((err) => {
        console.log('Error deleting');
      });
  }

  render() {
    const bike = this.state.bike;

    let bikeImage;

    if (bike.images) {
      bikeImage = (
        <CardMedia
          style={{
            height: 0,
            paddingTop: '56.25%',
            backgroundSize: 'initial',
          }}
          image={bike.images[0].image}
          title={bike.model_name}
        />
      );
    }

    let bikeItem = (
      <Card>
        {bikeImage}
        <CardContent>
          <Typography gutterBottom variant="headline" component="h2">
            {bike.model_name}
          </Typography>
          <Typography component="p">{bike.description}</Typography>
        </CardContent>
      </Card>
    );

    return (
      <Container>
        <div>{bikeItem}</div>

        <div className="row">
          <div className="col-md-6">
            {/*
            <button
              type="button"
              className="btn btn-outline-danger btn-lg btn-block"
              onClick={this.onDeleteClick.bind(this, bike._id)}
            >
              Delete
            </button>
            */}
            <Input
              type="button"
              onClick={this.onDeleteClick.bind(this, bike._id)}
              color="primary"
              value="Delete"
            />

            <Link to={`/edit-bike/${bike._id}`} color="primary">
              Edit
            </Link>
          </div>
        </div>
      </Container>
    );
  }
}

export default Details;
