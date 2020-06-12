import React, { Component, useState, useEffect } from "react";
import { connect } from "react-redux";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../App.css";
import axios from "axios";
import { Container, TextField, IconButton, Input } from "@material-ui/core";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";

class BikeAdd extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      type: "",
      company: "",
      description: "",
      published_date: "",
      image: "",
    };
  }

  // On file select (from the pop up)
  onFileChange = (e) => {
    this.setState({ image: e.target.files[0] });
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();

    /*const data = {
            name: this.state.name,
            type: this.state.type,
            company: this.state.company,
            description: this.state.description,
            image: this.state.image
        }
        console.log(data);*/

    const formData = new FormData();
    formData.append("name", this.state.name);
    formData.append("type", this.state.type);
    formData.append("company", this.state.company);
    formData.append("description", this.state.description);
    formData.append("image", this.state.image);

    console.log("form Data : " + formData);

    axios
      .post("http://localhost:8082/api/bikes", formData)
      .then((res) => {
        this.setState({
          name: "",
          type: "",
          company: "",
          description: "",
          published_date: "",
          image: "",
        });
        this.props.history.push("/");
      })
      .catch((err) => {
        console.log("Bike not added");
      });
  };

  render() {
    return (
      <Container>
        <div className="row">
          <div className="col-md-8 m-auto">
            <p className="lead text-center">Create new bike</p>

            <form
              noValidate
              onSubmit={this.onSubmit}
              method="post"
              encType="multipart/form-data"
              className="upload-form"
              autoComplete="off"
            >
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

              <div className="form-group">
                <input
                  accept="image/*"
                  style={{ display: "none" }}
                  id="icon-button-photo"
                  name="image"
                  onChange={this.onFileChange}
                  type="file"
                />
                <label htmlFor="icon-button-photo">
                  <IconButton component="span">
                    <CloudUploadIcon />
                  </IconButton>
                </label>
              </div>
              <Input type="submit" color="primary" value="Save" />
            </form>
          </div>
        </div>
      </Container>
    );
  }
}

export default BikeAdd;
