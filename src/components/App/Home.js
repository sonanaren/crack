import React, { Component } from 'react';
import '../../App.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import API from '../API/API';
import CardView from '../CardView.js';
import Banner from '../Banner.js';
import { Grid, Container } from '@material-ui/core';
import MotorcycleOutlinedIcon from '@material-ui/icons/MotorcycleOutlined';

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      bikes: [],
      cars: [],
      featured: [],
    };
  }

  componentDidMount() {
    const api = new API({ url: 'http://localhost:8082/api' });
    api.createEntity({ name: 'bikes' });
    api.endpoints.bikes.getAll().then((res) => {
      this.setState({
        bikes: res.data,
      });
    });
  }
  render() {
    const bikes = this.state.bikes;
    let list;

    if (!bikes) {
      list = 'No data!';
    } else {
      list = bikes.map((item, k) => (
        <Grid item xs={12} sm={6} lg={4} xl={3}>
          <CardView item={item} key={k} routeUri="/bike-details" />
        </Grid>
      ));
    }

    return (
      <div>
        <Container>
          <Grid container spacing={3} style={{ padding: 24 }}>
            {list}
          </Grid>
        </Container>
      </div>
    );
  }
}
