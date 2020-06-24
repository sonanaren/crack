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
      bikeList = bikes.map((item, k) => (
        <Grid item xs="12" sm="6" lg="4" xl="3">
          <CardView item={item} key={k} routeUri="/bike-details" />
        </Grid>
      ));
    }

    return (
      <div>
        <Banner imgSrc="images/bike-banner.jpg" />
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

          <Grid container spacing={3} style={{ padding: 24 }}>
            {bikeList}
          </Grid>
        </Container>
      </div>
    );
  }
}

export default List;
