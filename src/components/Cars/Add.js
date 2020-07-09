import React, { Component, useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../../App.css';
import axios from 'axios';
import {
  Container,
  TextField,
  IconButton,
  Input,
  Grid,
  Typography,
  Checkbox,
  FormControlLabel,
} from '@material-ui/core';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';

class Add extends Component {
  constructor(props) {
    super(props);
    this.state = {
      brand_id: '1',
      model_code: '',
      model_name: '',
      price_ex_shoowroom: '',
      description: '',
      type: '',
      cc: '',
      no_of_cylinders: '',
      max_power: '',
      torque: '',
      drive_train: '',
      tank_capacity: '',
      mileage: '',
      mileage_city: '',
      mileage_highway: '',
      power_steering: '',
      steering_type: '',
      adjustable_power_steering: '',
      performance_0_to_100_kmph: '',
      max_speed: '',
      no_of_gears: '',
      clutch: '',
      length: '',
      width: '',
      height: '',
      wheelbase: '',
      ground_clearance: '',
      boot_space: '',
      kerb_weight: '',
      gross_weight: '',
      front_track: '',
      rear_track: '',
      minimum_turning_radius: '',
      no_of_doors: '',
      seating_capacity: '',
      front_brake_type: '',
      rear_brake_type: '',
      front_suspension: '',
      rear_suspension: '',
      wheel_type: '',
      tyre_type: '',
      front_tyre_size: '',
      rear_tyre_size: '',
      airbags: '',
      passenger_airbags: '',
      abs: '',
      electronic_brakeforce_distribution: '',
      engine_immobilizer: '',
      central_locking: '',
      child_safety_lock: '',
      power_door_lock: '',
      turn_indicators_on_orvm: '',
      headlamp_beam_adjuster: '',
      idle_alert: '',
      sos_emergency_call_function: '',
      speed_alert: '',
      air_conditioner_manual: '',
      heater: '',
      steering_adjustment_tilte: '',
      steering_mounted_audio: '',
      paddle_shift: '',
      cruise_ontrol: '',
      light_type_led: '',
      front_fog_lamps: '',
      follw_me_home_headlamps: '',
      stolen_vehicle_notification: '',
      remote_engine_start_stop: '',
      remote_horn_light: '',
      al_voice_command: '',
      published_date: '',
      image: '',
    };
    this.initialState = { ...this.state };
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

    const formData = new FormData();
    for (let name in this.state) {
      formData.append(name, this.state[name]);
    }

    axios
      .post('http://localhost:8082/api/cars', formData)
      .then((res) => {
        this.setState(this.initialState);
        this.props.history.push('/cars');
      })
      .catch((err) => {
        console.log('Car not added.');
      });
  };

  render() {
    return (
      <Container>
        <form
          noValidate
          onSubmit={this.onSubmit}
          method="post"
          encType="multipart/form-data"
          className="upload-form"
          autoComplete="off"
        >
          <div>
            <Typography variant={'h4'}>Add new car</Typography>
            <Grid container spacing={2}>
              <Grid item lg={3} xs={12} xl={3} sm={6}>
                <Typography variant={'subtitle1'}>General</Typography>
                <div className="form-group">
                  <TextField
                    name="model_code"
                    label="Model Code"
                    variant="outlined"
                    margin="dense"
                    value={this.state.model_code}
                    onChange={this.onChange}
                  />
                </div>
                <div className="form-group">
                  <TextField
                    name="model_name"
                    label="Model Name"
                    variant="outlined"
                    margin="dense"
                    value={this.state.model_name}
                    onChange={this.onChange}
                  />
                </div>

                <div className="form-group">
                  <TextField
                    name="price_ex_shoowroom"
                    label="Price Ex Showroom"
                    variant="outlined"
                    margin="dense"
                    value={this.state.price_ex_shoowroom}
                    onChange={this.onChange}
                  />
                </div>

                <div className="form-group">
                  <TextField
                    name="description"
                    label="Description"
                    variant="outlined"
                    margin="dense"
                    value={this.state.description}
                    onChange={this.onChange}
                  />
                </div>
              </Grid>
              <Grid item lg={3} xs={12} xl={3} sm={6}>
                <Typography variant={'subtitle1'}>Engine</Typography>

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
                    name="cc"
                    label="Cylinder capacity (CC)"
                    variant="outlined"
                    margin="dense"
                    value={this.state.cc}
                    onChange={this.onChange}
                  />
                </div>
                <div className="form-group">
                  <TextField
                    name="no_of_cylinders"
                    label="No of Cylinders"
                    variant="outlined"
                    margin="dense"
                    value={this.state.no_of_cylinders}
                    onChange={this.onChange}
                  />
                </div>
                <div className="form-group">
                  <TextField
                    name="max_power"
                    label="Power"
                    variant="outlined"
                    margin="dense"
                    value={this.state.max_power}
                    onChange={this.onChange}
                  />
                </div>
                <div className="form-group">
                  <TextField
                    name="torque"
                    label="Torque"
                    variant="outlined"
                    margin="dense"
                    value={this.state.torque}
                    onChange={this.onChange}
                  />
                </div>
                <div className="form-group">
                  <TextField
                    name="drive_train"
                    label="Drive Train"
                    variant="outlined"
                    margin="dense"
                    value={this.state.drive_train}
                    onChange={this.onChange}
                  />
                </div>
              </Grid>
              <Grid item lg={3} xs={12} xl={3} sm={6}>
                <Typography variant={'subtitle1'}>Fuel Consumptions</Typography>
                <div className="form-group">
                  <TextField
                    name="tank_capacity"
                    label="Tank Capacity"
                    variant="outlined"
                    margin="dense"
                    value={this.state.tank_capacity}
                    onChange={this.onChange}
                  />
                </div>
                <div className="form-group">
                  <TextField
                    name="mileage"
                    label="Mileage"
                    variant="outlined"
                    margin="dense"
                    value={this.state.mileage}
                    onChange={this.onChange}
                  />
                </div>
                <div className="form-group">
                  <TextField
                    name="mileage_city"
                    label="Mileage City"
                    variant="outlined"
                    margin="dense"
                    value={this.state.mileage_city}
                    onChange={this.onChange}
                  />
                </div>

                <div className="form-group">
                  <TextField
                    name="mileage_highway"
                    label="Mileage Highway"
                    variant="outlined"
                    margin="dense"
                    value={this.state.mileage_highway}
                    onChange={this.onChange}
                  />
                </div>
              </Grid>
              <Grid item lg={3} xs={12} xl={3} sm={6}>
                <Typography variant={'subtitle1'}>Steering</Typography>
                <div className="form-group">
                  <FormControlLabel
                    value="1"
                    name="power_steering"
                    control={<Checkbox color="primary" />}
                    label="Power Steering"
                  />
                </div>
                <div className="form-group">
                  <TextField
                    name="steering_type"
                    label="Steering Type"
                    variant="outlined"
                    margin="dense"
                    value={this.state.steering_type}
                    onChange={this.onChange}
                  />
                </div>
                <div className="form-group">
                  <FormControlLabel
                    value="1"
                    name="adjustable_power_steering"
                    control={<Checkbox color="primary" />}
                    label="Adjustable Power Steering"
                  />
                </div>
              </Grid>
              <Grid item lg={3} xs={12} xl={3} sm={6}>
                <Typography variant={'subtitle1'}>Performance</Typography>
                <div className="form-group">
                  <TextField
                    name="performance_0_to_100_kmph"
                    label="Performance 0 to 100 kmph"
                    variant="outlined"
                    margin="dense"
                    value={this.state.performance_0_to_100_kmph}
                    onChange={this.onChange}
                  />
                </div>
                <div className="form-group">
                  <TextField
                    name="max_speed"
                    label="Max Speed"
                    variant="outlined"
                    margin="dense"
                    value={this.state.max_speed}
                    onChange={this.onChange}
                  />
                </div>
              </Grid>
              <Grid item lg={3} xs={12} xl={3} sm={6}>
                <Typography variant={'subtitle1'}>Transmission</Typography>
                <div className="form-group">
                  <TextField
                    name="no_of_gears"
                    label="No of Gears"
                    variant="outlined"
                    margin="dense"
                    value={this.state.no_of_gears}
                    onChange={this.onChange}
                  />
                </div>
                <div className="form-group">
                  <TextField
                    name="clutch"
                    label="Clutch"
                    variant="outlined"
                    margin="dense"
                    value={this.state.clutch}
                    onChange={this.onChange}
                  />
                </div>
              </Grid>
              <Grid item lg={3} xs={12} xl={3} sm={6}>
                <Typography variant={'subtitle1'}>
                  Dimensions and Weight
                </Typography>

                <div className="form-group">
                  <TextField
                    name="length"
                    label="Length"
                    variant="outlined"
                    margin="dense"
                    value={this.state.length}
                    onChange={this.onChange}
                  />
                </div>
                <div className="form-group">
                  <TextField
                    name="width"
                    label="Width"
                    variant="outlined"
                    margin="dense"
                    value={this.state.width}
                    onChange={this.onChange}
                  />
                </div>
                <div className="form-group">
                  <TextField
                    name="height"
                    label="Height"
                    variant="outlined"
                    margin="dense"
                    value={this.state.height}
                    onChange={this.onChange}
                  />
                </div>
                <div className="form-group">
                  <TextField
                    name="wheelbase"
                    label="Wheelbase"
                    variant="outlined"
                    margin="dense"
                    value={this.state.wheelbase}
                    onChange={this.onChange}
                  />
                </div>
                <div className="form-group">
                  <TextField
                    name="ground_clearance"
                    label="Ground Clearance"
                    variant="outlined"
                    margin="dense"
                    value={this.state.ground_clearance}
                    onChange={this.onChange}
                  />
                </div>
                <div className="form-group">
                  <TextField
                    name="boot_space"
                    label="Boot Space"
                    variant="outlined"
                    margin="dense"
                    value={this.state.boot_space}
                    onChange={this.onChange}
                  />
                </div>
                <div className="form-group">
                  <TextField
                    name="kerb_weight"
                    label="Kerb Weight"
                    variant="outlined"
                    margin="dense"
                    value={this.state.kerb_weight}
                    onChange={this.onChange}
                  />
                </div>
                <div className="form-group">
                  <TextField
                    name="gross_weight"
                    label="Gross Weight"
                    variant="outlined"
                    margin="dense"
                    value={this.state.gross_weight}
                    onChange={this.onChange}
                  />
                </div>
                <div className="form-group">
                  <TextField
                    name="front_track"
                    label="Front Track"
                    variant="outlined"
                    margin="dense"
                    value={this.state.front_track}
                    onChange={this.onChange}
                  />
                </div>
                <div className="form-group">
                  <TextField
                    name="rear_track"
                    label="Rear Track"
                    variant="outlined"
                    margin="dense"
                    value={this.state.rear_track}
                    onChange={this.onChange}
                  />
                </div>
                <div className="form-group">
                  <TextField
                    name="minimum_turning_radius"
                    label="Minimum Turning Radius"
                    variant="outlined"
                    margin="dense"
                    value={this.state.minimum_turning_radius}
                    onChange={this.onChange}
                  />
                </div>
                <div className="form-group">
                  <TextField
                    name="no_of_doors"
                    label="No of Doors"
                    variant="outlined"
                    margin="dense"
                    value={this.state.no_of_doors}
                    onChange={this.onChange}
                  />
                </div>
                <div className="form-group">
                  <TextField
                    name="seating_capacity"
                    label="Seating Capacity"
                    variant="outlined"
                    margin="dense"
                    value={this.state.seating_capacity}
                    onChange={this.onChange}
                  />
                </div>
              </Grid>
              <Grid item lg={3} xs={12} xl={3} sm={6}>
                <Typography variant={'subtitle1'}>Braking</Typography>
                <div className="form-group">
                  <TextField
                    name="front_brake_type"
                    label="Front Brake Type"
                    variant="outlined"
                    margin="dense"
                    value={this.state.front_brake_type}
                    onChange={this.onChange}
                  />
                </div>
                <div className="form-group">
                  <TextField
                    name="rear_brake_type"
                    label="Rear Brake Type"
                    variant="outlined"
                    margin="dense"
                    value={this.state.rear_brake_type}
                    onChange={this.onChange}
                  />
                </div>
              </Grid>
              <Grid item lg={3} xs={12} xl={3} sm={6}>
                <Typography variant={'subtitle1'}>Variant</Typography>
                <div className="form-group">
                  <TextField
                    name="code"
                    label="Code"
                    variant="outlined"
                    margin="dense"
                    value={this.state.code}
                    onChange={this.onChange}
                  />
                </div>
                <div className="form-group">
                  <TextField
                    name="price"
                    label="Price"
                    variant="outlined"
                    margin="dense"
                    value={this.state.price}
                    onChange={this.onChange}
                  />
                </div>
              </Grid>
              <Grid item lg={3} xs={12} xl={3} sm={6}>
                <Typography variant={'subtitle1'}>Suspension</Typography>
                <div className="form-group">
                  <TextField
                    name="front_suspension"
                    label="Front Suspension"
                    variant="outlined"
                    margin="dense"
                    value={this.state.front_suspension}
                    onChange={this.onChange}
                  />
                </div>
                <div className="form-group">
                  <TextField
                    name="rear_suspension"
                    label="Rear Suspension"
                    variant="outlined"
                    margin="dense"
                    value={this.state.rear_suspension}
                    onChange={this.onChange}
                  />
                </div>
              </Grid>
              <Grid item lg={3} xs={12} xl={3} sm={6}>
                <Typography variant={'subtitle1'}>Wheel Tyres</Typography>

                <div className="form-group">
                  <TextField
                    name="wheel_type"
                    label="Wheel Type"
                    variant="outlined"
                    margin="dense"
                    value={this.state.wheel_type}
                    onChange={this.onChange}
                  />
                </div>
                <div className="form-group">
                  <TextField
                    name="tyre_type"
                    label="Tyre Type"
                    variant="outlined"
                    margin="dense"
                    value={this.state.tyre_type}
                    onChange={this.onChange}
                  />
                </div>
                <div className="form-group">
                  <TextField
                    name="front_tyre_size"
                    label="Front Tyre Size"
                    variant="outlined"
                    margin="dense"
                    value={this.state.front_tyre_size}
                    onChange={this.onChange}
                  />
                </div>
                <div className="form-group">
                  <TextField
                    name="rear_tyre_size"
                    label="Rear Tyre Size"
                    variant="outlined"
                    margin="dense"
                    value={this.state.rear_tyre_size}
                    onChange={this.onChange}
                  />
                </div>
              </Grid>

              <Grid item lg={3} xs={12} xl={3} sm={6}>
                <Typography variant={'subtitle1'}>Safety Features</Typography>
                <div className="form-group">
                  <FormControlLabel
                    value="1"
                    name="airbags"
                    control={<Checkbox color="primary" />}
                    label="Airbags"
                  />
                </div>
                <div className="form-group">
                  <FormControlLabel
                    value="1"
                    name="passenger_airbags"
                    control={<Checkbox color="primary" />}
                    label="Passenger Airbags"
                  />
                </div>

                <div className="form-group">
                  <FormControlLabel
                    value="1"
                    name="abs"
                    control={<Checkbox color="primary" />}
                    label="ABS"
                  />
                </div>
                <div className="form-group">
                  <FormControlLabel
                    value="1"
                    name="electronic_brakeforce_distribution"
                    control={<Checkbox color="primary" />}
                    label="Electronic Brakeforce Distribution"
                  />
                </div>
                <div className="form-group">
                  <FormControlLabel
                    value="1"
                    name="engine_immobilizer"
                    control={<Checkbox color="primary" />}
                    label="Engine Immobilizer"
                  />
                </div>
                <div className="form-group">
                  <FormControlLabel
                    value="1"
                    name="central_locking"
                    control={<Checkbox color="primary" />}
                    label="Central Locking"
                  />
                </div>
                <div className="form-group">
                  <FormControlLabel
                    value="1"
                    name="child_safety_lock"
                    control={<Checkbox color="primary" />}
                    label="Child Safety Lock"
                  />
                </div>
                <div className="form-group">
                  <FormControlLabel
                    value="1"
                    name="power_door_lock"
                    control={<Checkbox color="primary" />}
                    label="Power Door Lock"
                  />
                </div>
                <div className="form-group">
                  <FormControlLabel
                    value="1"
                    name="turn_indicators_on_orvm"
                    control={<Checkbox color="primary" />}
                    label="Turn Indicators on ORVM"
                  />
                </div>

                <div className="form-group">
                  <FormControlLabel
                    value="1"
                    name="headlamp_beam_adjuster"
                    control={<Checkbox color="primary" />}
                    label="Headlamp Beam Adjuster"
                  />
                </div>
                <div className="form-group">
                  <FormControlLabel
                    value="1"
                    name="idle_alert"
                    control={<Checkbox color="primary" />}
                    label="Idle Alert"
                  />
                </div>
              </Grid>
              <Grid item lg={3} xs={12} xl={3} sm={6}>
                <Typography variant={'subtitle1'}>
                  Comfort Convenience Features
                </Typography>

                <div className="form-group">
                  <FormControlLabel
                    value="1"
                    name="air_conditioner_manual"
                    control={<Checkbox color="primary" />}
                    label="Air Conditioner Manual"
                  />
                </div>
                <div className="form-group">
                  <FormControlLabel
                    value="1"
                    name="heater"
                    control={<Checkbox color="primary" />}
                    label="Heater"
                  />
                </div>
                <div className="form-group">
                  <FormControlLabel
                    value="1"
                    name="steering_adjustment_tilte"
                    control={<Checkbox color="primary" />}
                    label="Steering Adjustment Tilte"
                  />
                </div>
                <div className="form-group">
                  <FormControlLabel
                    value="1"
                    name="steering_mounted_audio"
                    control={<Checkbox color="primary" />}
                    label="Steering Mounted Audio"
                  />
                </div>
                <div className="form-group">
                  <FormControlLabel
                    value="1"
                    name="paddle_shift"
                    control={<Checkbox color="primary" />}
                    label="Paddle Shift"
                  />
                </div>
                <div className="form-group">
                  <FormControlLabel
                    value="1"
                    name="cruise_ontrol"
                    control={<Checkbox color="primary" />}
                    label="Cruise Ontrol"
                  />
                </div>
              </Grid>
              <Grid item lg={3} xs={12} xl={3} sm={6}>
                <Typography variant={'subtitle1'}>Lights Features</Typography>

                <div className="form-group">
                  <FormControlLabel
                    value="1"
                    name="light_type_led"
                    control={<Checkbox color="primary" />}
                    label="Light Type Led"
                  />
                </div>
                <div className="form-group">
                  <FormControlLabel
                    value="1"
                    name="front_fog_lamps"
                    control={<Checkbox color="primary" />}
                    label="Front Fog Lamps"
                  />
                </div>
                <div className="form-group">
                  <FormControlLabel
                    value="1"
                    name="follw_me_home_headlamps"
                    control={<Checkbox color="primary" />}
                    label="Follw Me Home Headlamps"
                  />
                </div>
              </Grid>
              <Grid item lg={3} xs={12} xl={3} sm={6}>
                <Typography variant={'subtitle1'}>Key Features</Typography>

                <div className="form-group">
                  <FormControlLabel
                    value="1"
                    name="sos_emergency_call_function"
                    control={<Checkbox color="primary" />}
                    label="SOS Emergency Call Function"
                  />
                </div>
                <div className="form-group">
                  <FormControlLabel
                    value="1"
                    name="stolen_vehicle_notification"
                    control={<Checkbox color="primary" />}
                    label="Stolen Vehicle Notification"
                  />
                </div>
                <div className="form-group">
                  <FormControlLabel
                    value="1"
                    name="remote_engine_start_stop"
                    control={<Checkbox color="primary" />}
                    label="Remote Engine Start Stop"
                  />
                </div>
                <div className="form-group">
                  <FormControlLabel
                    value="1"
                    name="remote_horn_light"
                    control={<Checkbox color="primary" />}
                    label="Remote Horn Light"
                  />
                </div>
                <div className="form-group">
                  <FormControlLabel
                    value="1"
                    name="al_voice_command"
                    control={<Checkbox color="primary" />}
                    label="AI Voice Command"
                  />
                </div>
              </Grid>
              <Grid item xs={12}>
                <div className="form-group">
                  <input
                    accept="image/*"
                    style={{ display: 'none' }}
                    id="icon-button-photo"
                    name="image"
                    onChange={this.onFileChange}
                    type="file"
                    multiple
                  />
                  <label htmlFor="icon-button-photo">
                    <IconButton component="span">
                      <CloudUploadIcon />
                    </IconButton>
                  </label>
                  <Input type="submit" color="primary" value="Save" />
                </div>
              </Grid>
            </Grid>
          </div>
        </form>
      </Container>
    );
  }
}

export default Add;
