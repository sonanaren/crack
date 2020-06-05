import React, { Component, useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../App.css';
import axios from 'axios';

class BikeAdd extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            type: '',
            company: '',
            description: '',
            published_date: '',
            image: ''
        };
    }

    // On file select (from the pop up) 
    onFileChange = e => {
        this.setState({ image: e.target.files[0] })
    }

    onChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    onSubmit = e => {
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
        formData.append('name', this.state.name);
        formData.append('type', this.state.type);
        formData.append('company', this.state.company);
        formData.append('description', this.state.description);
        formData.append('image', this.state.image);
        
        console.log("form Data : " + formData);

        axios
            .post('http://localhost:8082/api/bikes', formData)
            .then(res => {
                this.setState({
                    name: '',
                    type: '',
                    company: '',
                    description: '',
                    published_date: '',
                    image: ''
                })
                this.props.history.push('/');
            })
            .catch(err => {
                console.log('Bike not added');
            })
    };

    render() {
        return (
          <div className="AddBike">
            <div className="container">
              <div className="row">
                <div className="col-md-8 m-auto">
                  <br />
                  <Link to="/" className="btn btn-outline-warning float-left">
                      Show Bike List
                  </Link>
                </div>
                <div className="col-md-8 m-auto">
                  <h1 className="display-4 text-center">Add Bike</h1>
                  <p className="lead text-center">
                      Create new bike
                  </p>
    
                  <form 
                    noValidate 
                    onSubmit={this.onSubmit} 
                    method="post"
                    encType="multipart/form-data"
                    className="upload-form">
                    <div className='form-group'>
                      <input
                        type='text'
                        placeholder='Name of Bike'
                        name='name'
                        className='form-control'
                        value={this.state.name}
                        onChange={this.onChange}
                      />
                    </div>
                    <br />
    
                    <div className='form-group'>
                      <input
                        type='text'
                        placeholder='Type'
                        name='type'
                        className='form-control'
                        value={this.state.type}
                        onChange={this.onChange}
                      />
                    </div>
    
                    <div className='form-group'>
                      <input
                        type='text'
                        placeholder='Company'
                        name='company'
                        className='form-control'
                        value={this.state.company}
                        onChange={this.onChange}
                      />
                    </div>
    
                    <div className='form-group'>
                      <input
                        type='text'
                        placeholder='Describe this bike'
                        name='description'
                        className='form-control'
                        value={this.state.description}
                        onChange={this.onChange}
                      />
                    </div>
    
                    <div className='form-group'>
                      <input
                        type='date'
                        placeholder='Published date'
                        name='published_date'
                        className='form-control'
                        value={this.state.published_date}
                        onChange={this.onChange}
                      />
                    </div>

                    <div className='form-group'>
                    <input type="file" 
                    name="image" 
                    onChange={this.onFileChange} />
                    </div>

                    <input
                        type="submit"
                        className="btn btn-outline-warning btn-block mt-4"
                    />
                  </form>
              </div>
              </div>
            </div>
          </div>
        );
    }    
}

export default BikeAdd;