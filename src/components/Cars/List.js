import React, { Component } from "react";
import "../../App.css";
import axios from "axios";
import { Link } from "react-router-dom";
import CardView from "../CardView.js";
import Banner from "../Banner.js";
import { Grid, Container } from "@material-ui/core";
import MotorcycleOutlinedIcon from "@material-ui/icons/MotorcycleOutlined";

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cars: [],
      searchString: "",
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:8082/api/cars")
      .then((res) => {
        this.setState({
          cars: res.data,
        });
      })
      .catch((err) => {
        console.log("No cars");
      });
  }

  render() {
    const cars = this.state.cars;
    let list;

    if (!cars) {
        list = "No data!";
    } else {
        list = cars.map((item, k) => (
        <Grid item xs="12" sm="6" lg="4" xl="3">
          <CardView item={item} key={k} routeUri="/cars-details" />
        </Grid>
      ));
    }

    return (
      <div>
        <Banner imgSrc="images/pexels-photo-3322291.jpeg" />
        <Container>
          <div className="row">
            <div className="col-md-11">
              <Link
                to="/add-car"
                className="btn btn-outline-warning float-right"
              >
                <MotorcycleOutlinedIcon />
              </Link>
            </div>
          </div>

          <Grid container spacing={3} style={{ padding: 24 }}>
            {list}
          </Grid>
        </Container>
      </div>
    );
  }
}

export default List;
