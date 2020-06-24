import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../../App.css";
import axios from "axios";
import { Container, TextField, IconButton, Input } from "@material-ui/core";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  Button,
} from "@material-ui/core";

class Details extends Component {
  constructor(props) {
    super(props);
    this.state = {
      car: {},
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:8082/api/cars/" + this.props.match.params.id)
      .then((res) => {
        this.setState({
          car: res.data,
        });
      })
      .catch((err) => {
        console.log("No data");
      });
  }

  onDeleteClick(id) {
    axios
      .delete("http://localhost:8082/api/cars/" + id)
      .then((res) => {
        this.props.history.push("/");
      })
      .catch((err) => {
        console.log("Error deleting");
      });
  }

  render() {
    const car = this.state.car;

    let carImage;

    if (car.images) {
      carImage = (
        <CardMedia
          style={{
            height: 0,
            paddingTop: "56.25%",
            backgroundSize: "initial",
          }}
          image={car.images[0].image}
          title={car.model_name}
        />
      );
    }

    let carItem = (
      <Card>
        {carImage}
        <CardContent>
          <Typography gutterBottom variant="headline" component="h2">
            {car.model_name}
          </Typography>
          <Typography component="p">{car.description}</Typography>
        </CardContent>
      </Card>
    );

    return (
      <Container>
        <div>{carItem}</div>

        <div className="row">
          <div className="col-md-6">
            {/*
            <button
              type="button"
              className="btn btn-outline-danger btn-lg btn-block"
              onClick={this.onDeleteClick.bind(this, car._id)}
            >
              Delete
            </button>
            */}
            <Input
              type="button"
              onClick={this.onDeleteClick.bind(this, car._id)}
              color="primary"
              value="Delete"
            />

            <Link to={`/edit-car/${car._id}`} color="primary">
              Edit
            </Link>
          </div>
        </div>
      </Container>
    );
  }
}

export default Details;
