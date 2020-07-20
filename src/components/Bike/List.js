import React, { Component } from 'react';
import '../../App.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import CardView from '../CardView.js';
import Banner from '../Banner.js';
import { Grid, Container } from '@material-ui/core';
import MotorcycleOutlinedIcon from '@material-ui/icons/MotorcycleOutlined';
import { gql } from '@apollo/client';
import { graphql } from '@apollo/client/react/hoc';
import { getBikesQuery } from '../../queries/bikes';

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bikes: [],
      searchString: '',
    };
  }

  displayBikes() {
    var data = this.props.data;
    if (data.loading) {
      return <div>Loading bikes...</div>;
    } else {
      return data.bikes.map((item, k) => {
        return (
          <Grid item xs={12} sm={6} lg={4} xl={3}>
            <CardView item={item} key={k} routeUri="/bike-details" />
          </Grid>
        );
      });
    }
  }

  render() {
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
            {this.displayBikes()}
          </Grid>
        </Container>
      </div>
    );
  }
}

export default graphql(getBikesQuery)(List);
