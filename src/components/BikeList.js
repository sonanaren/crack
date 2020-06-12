import React, { Component } from "react";
import "../App.css";
import axios from "axios";
import { Link } from "react-router-dom";
import BikeCard from "./BikeCard.js";
import { Grid, TextField, Container, Icon } from "@material-ui/core";
import MotorcycleOutlinedIcon from "@material-ui/icons/MotorcycleOutlined";

class BikeList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bikes: [],
      searchString: "",
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:8082/api/bikes")
      .then((res) => {
        this.setState({
          bikes: res.data,
        });
      })
      .catch((err) => {
        console.log("No bikes");
      });
  }

  render() {
    const bikes = this.state.bikes;
    let bikeList;

    if (!bikes) {
      bikeList = "No data!";
    } else {
      bikeList = bikes.map((bike, k) => (
        <Grid item xs="12" sm="6" lg="4" xl="3">
          <BikeCard bike={bike} key={k} />
        </Grid>
      ));
    }

    return (
      <Container>
        <div className="row">
          <div className="col-md-11">
            <Link
              to="/add-bike"
              className="btn btn-outline-warning float-right"
            >
              <MotorcycleOutlinedIcon />
            </Link>
          </div>
        </div>

        <Grid container spacing={24} style={{ padding: 24 }}>
          {bikeList}
        </Grid>
      </Container>
    );
  }
}

export default BikeList;
